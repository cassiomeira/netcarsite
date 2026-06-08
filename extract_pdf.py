import fitz  # PyMuPDF
import sys

def extract_pdf_info(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        print(f"Total pages: {len(doc)}")
        
        all_text = ""
        for i, page in enumerate(doc):
            text = page.get_text()
            if text.strip():
                print(f"--- Page {i+1} ---")
                print(text)
                all_text += text
                
        if not all_text.strip():
            print("No text found. The PDF might consist entirely of images.")
            
            # Let's count images
            image_count = 0
            for i in range(len(doc)):
                image_list = doc[i].get_images(full=True)
                image_count += len(image_list)
                print(f"Page {i+1}: {len(image_list)} images")
            
            print(f"Total images found: {image_count}")
            
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    extract_pdf_info("C:\\Users\\SPN TELECOM\\Downloads\\Catalogo Netcar.pdf")
