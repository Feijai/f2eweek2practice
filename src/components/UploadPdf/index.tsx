import React, { useEffect, useRef, useState } from "react";
import { getScaledDim } from "../../utils/touchFunc";
import { useAtom } from "jotai";
import { bgFileAtom } from "../AtomJotai";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const canvasSize = 400;

const UploadPdf = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [src, setSrc] = useState<string>("");

  const [bgFileData, setBgFileData] = useAtom(bgFileAtom);

  useEffect(() => {
    if (canvasRef.current) {
      const c = canvasRef.current;
      setCanvas(c);
      setCtx(c.getContext("2d") as CanvasRenderingContext2D);
    }
  }, [canvasRef]);

  /** image */
  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const f = event.target.files[0];
    const ctx = canvasRef.current?.getContext("2d") as any;
    const img = new Image();
    img.onload = function () {
      const scaled = getScaledDim(img, canvasSize, canvasSize);
      // scale canvas to image
      if (ctx) {
        ctx.width = scaled.width;
        ctx.height = scaled.height;
      }
      // draw image
      ctx.drawImage(img, 0, 0, ctx.width, ctx.height);
    };
    img.src = URL.createObjectURL(f);
  };

  /** pdf */
  const handleUploadPdf = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file.type === "application/pdf" && ctx) {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        const pdfData = new Uint8Array(this.result as ArrayBuffer);
        // Using DocumentInitParameters object to load binary data.
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        loadingTask.promise.then(
          function (pdf) {
            console.log("PDF loaded");
            // Fetch the first page
            const pageNumber = 1;
            pdf.getPage(pageNumber).then(function (page) {
              console.log("Page loaded");

              const scale = 1.5;
              const viewport = page.getViewport({ scale: scale });
              console.log(viewport);
              // Prepare canvas using PDF page dimensions
              if (canvas) {
                canvas.height = viewport.height;
                canvas.width = viewport.width;
              }
              // Render PDF page into canvas context
              const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
              };
              console.log(renderContext);
              const renderTask = page.render(renderContext);
              renderTask.promise.then(function () {
                console.log("Page rendered");
              });
            });
          },
          function (reason) {
            // PDF loading error
            console.error(reason);
          }
        );
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  /** 輸出成圖片 */
  const handleConvertToImage = () => {
    if (canvas) {
      const image = canvas.toDataURL() as any;
      console.log(image);
      setBgFileData(image);
      setSrc(image);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: `1rem` }}>
        上傳 Image:
        <input type="file" onChange={handleUploadImage} />
      </div>
      <div>
        上傳 PDF:
        <input accept=".pdf" type="file" onChange={handleUploadPdf} />
      </div>

      <canvas ref={canvasRef as any} width={canvasSize} height={500}></canvas>
      <div>
        <button onClick={handleConvertToImage}>輸出</button>
      </div>
      {/* <img src={src} alt="imagePdf" /> */}
    </div>
  );
};

export default UploadPdf;

// https://mozilla.github.io/pdf.js/examples/index.html#interactive-examples
