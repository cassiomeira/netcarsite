import fitz
import os

def pdf_to_images(pdf_path, output_dir):
    try:
        doc = fitz.open(pdf_path)
        os.makedirs(output_dir, exist_ok=True)
        
        for i in range(len(doc)):
            page = doc.load_page(i)
            # Render page to an image
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for better OCR/reading
            output_path = os.path.join(output_dir, f"page_{i+1}.png")
            pix.save(output_path)
            print(f"Saved {output_path}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    pdf_to_images("C:\\Users\\SPN TELECOM\\Downloads\\Catalogo Netcar.pdf", "pdf_pages")
