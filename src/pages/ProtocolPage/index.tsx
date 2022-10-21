import * as React from "react";
import { ProtocolPageCss } from "./style";
import PDFViewer from "../../components/PDFViewer";
import PDFcontrol from "../../components/PDFControl";
import SignWritePannel from "../../components/SignWritePannel";
import { isPC } from "../../utils/helps";
import {
  useCloneSignCanvas,
  useDrawSignInCanvas,
  useEditPdf,
} from "../../hook";

const { useState, useCallback, useRef } = React;

function ProtocolPage() {
  const pdfFileRef = useRef<any>();
  const pdfViewerRef = useRef<any>();
  const isPdfEndLoadRef = useRef<boolean>(false);
  const [isPdfBeginLoad, pdfBeginLoaded] = useState(false);
  const [pdfCanvasNeedLoad, triggerCanvasLoad] = useState(0);
  const [curPdfCanvas, saveCurPdfCanvas] = useState<HTMLCanvasElement | null>(
    null
  );
  const [showSignWritePannelState, toggleShowSignWritePannel] = useState(false);
  // 添加渲染层
  const scale = useCloneSignCanvas(
    pdfCanvasNeedLoad,
    isPdfBeginLoad,
    isPdfEndLoadRef
  );
  const {
    addSignInCanvas,
    deleteSignInCanvas,
    updateSignList,
    uploadPdf,
    downloadPdf,
    saveSelectSign,
    signList,
    pdfReadBuffer,
  } = useEditPdf(curPdfCanvas as HTMLCanvasElement, isPdfEndLoadRef);
  
  // 渲染层绘画
  useDrawSignInCanvas(
    curPdfCanvas as HTMLCanvasElement,
    signList,
    isPdfEndLoadRef
  );

  const showSignWritePannel = useCallback(() => {
    if (curPdfCanvas) {
      toggleShowSignWritePannel(true);
    }else{
      alert("請選擇簽名pdf頁面")
    }
  }, [curPdfCanvas]);
  const hideSignWritePannel = useCallback(() => {
    toggleShowSignWritePannel(false);
  }, []);

  return (
    <ProtocolPageCss>
      <div className={`${isPC ? "pcMode" : ""}`}>
        <div className="pdf-wrap">
          <PDFcontrol
            pdfViewerRef={pdfViewerRef}
            uploadPdf={uploadPdf}
            downloadPdf={downloadPdf}
            deleteSignInCanvas={deleteSignInCanvas}
            showSignWritePannel={showSignWritePannel}
          />
          <PDFViewer
            scale={scale}
            pdfFileRef={pdfFileRef}
            pdfViewerRef={pdfViewerRef}
            pdfReadBuffer={pdfReadBuffer as ArrayBuffer}
            signList={signList}
            curPdfCanvas={curPdfCanvas as HTMLCanvasElement}
            triggerCanvasLoad={triggerCanvasLoad}
            updateSignList={updateSignList}
            uploadPdf={uploadPdf}
            saveCurPdfCanvas={saveCurPdfCanvas}
            saveSelectSign={saveSelectSign}
            pdfBeginLoaded={pdfBeginLoaded}
          />
          {showSignWritePannelState ? (
            <SignWritePannel
              hideSignWritePannel={hideSignWritePannel}
              addSignInCanvas={addSignInCanvas}
            />
          ) : null}
        </div>
      </div>
    </ProtocolPageCss>
  );
}
export default ProtocolPage;
