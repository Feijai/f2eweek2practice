import React, { useRef, useEffect } from "react";
import { useHandleCanvasEvent, IProps } from "../../hook";
import { DEFAULT_SCALE_VALUE } from "../../data/constants";
import "pdfjs-dist/web/pdf_viewer.css";
import { PDFViewerCss } from "./style";
import pdfIcon from "../../assets/pdf.png";

const pdfjs = require("pdfjs-dist");
const pdfjsViewer = require("pdfjs-dist/web/pdf_viewer");
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry");

// 显示文字类型 0 不显示 1 显示 2 启用增强
const TEXT_LAYER_MODE = 0;
// 是否通过CSS控制放大缩小 true false
const USE_ONLY_CSS_ZOOM = true;

const PDFViewer = (props: IProps) => {
  const { pdfReadBuffer, pdfFileRef, pdfViewerRef, pdfBeginLoaded, uploadPdf } =
    props;
  const pdfRef = useRef<HTMLDivElement>(null);
  const eventBusRef = useRef<any>(new pdfjsViewer.EventBus());
  const linkServiceRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);

  // canvas event
  useHandleCanvasEvent(props, pdfRef);

  // render pdf
  useEffect(() => {
    if (pdfReadBuffer) {
      const linkService = new pdfjsViewer.PDFLinkService({
        eventBus: eventBusRef.current,
      });
      const pdfViewer = new pdfjsViewer.PDFViewer({
        container: containerRef.current,
        eventBus: eventBusRef.current,
        linkService,
        maxCanvasPixels: 5242880,
        l10n: pdfjsViewer.NullL10n,
        useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
        textLayerMode: TEXT_LAYER_MODE,
      });

      linkService.setViewer(pdfViewer);
      pdfViewerRef.current = pdfViewer;
      linkServiceRef.current = linkService;
      // 設置初始缩放
      pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
      eventBusRef.current.on("pagesloaded", function () {
        pdfViewerRef.current.currentScaleValue = DEFAULT_SCALE_VALUE;
        pdfBeginLoaded(true);
      });
      // render
      const initialViewer = async (pdfBuffer: any) => {
        pdfFileRef.current = pdfjs.getDocument(pdfBuffer).promise;
        pdfFileRef.current
          .then((pdf: any) => {
            // console.timeEnd(`pdf解析成功：//${pdfUrl}`);
            if (pdfViewerRef.current) {
              pdfViewerRef.current.setDocument(pdf);
              linkServiceRef.current.setDocument(pdf);
            }
            return;
          })
          .catch((err: any) => {
            return err;
          });
      };

      initialViewer(pdfReadBuffer);
    }
  }, [pdfReadBuffer]);

  return (
    <PDFViewerCss>
      <div id="viewerContainer" className="viewerContainer" ref={containerRef}>
        <div id="pdf-list" ref={pdfRef} />
        {!pdfReadBuffer ? (
          <div className="upload-pdf">
            <input
              type="file"
              accept="pdf"
              title="上傳PDF"
              onChange={uploadPdf}
            />
            <img src={pdfIcon} title="上傳PDF" alt="上傳PDF" />
          </div>
        ) : null}
      </div>
    </PDFViewerCss>
  );
};

export default PDFViewer;
