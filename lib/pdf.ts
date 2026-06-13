import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportPDF(element: HTMLElement, filename: string = "curriculo.pdf"): Promise<void> {
  await document.fonts.ready;

  const images = element.getElementsByTagName("img");
  await Promise.all(
    Array.from(images).map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    )
  );

  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: "#ffffff",
    logging: false,
    useCORS: true,
  });

  const dataUrl = canvas.toDataURL("image/png");
  if (!dataUrl || dataUrl === "data:,") {
    throw new Error("Canvas produced invalid image data");
  }

  const pdfImg = await loadImage(dataUrl);

  const imgWidth = 210;
  const imgHeight = (pdfImg.height * imgWidth) / pdfImg.width;

  const pdf = new jsPDF("p", "mm", "a4");
  let heightLeft = imgHeight;
  let position = 0;
  const pageHeight = 297;

  pdf.addImage(pdfImg, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    pdf.addImage(pdfImg, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image data"));
    img.src = src;
  });
}
