import React, { memo, useState } from "react";
import { initSignCanvasSize } from "../../utils/canvasTool";
import { DEFAULT_SCALE_VALUE } from "../../data/constants";
import zoomOutIcon from "../../assets/zoomOut.png";
import zoomInIcon from "../../assets/zoomIn.png";
import deleteIcon from "../../assets/delete.png";
import downloadIcon from "../../assets/download.png";
import editdIcon from "../../assets/edit.png";
import textIcon from "../../assets/text.png";
import pdfIcon from "../../assets/pdfIcon.png";
import pictureIcon from "../../assets/picture.png";
import { PDFControlCss } from "./style";

interface Props {
  showSignWritePannel: () => void;
  deleteSignInCanvas: () => void;
  uploadPdf: (e: any) => Promise<void>;
  downloadPdf: () => void;
  pdfViewerRef: any;
}

const PDFControl = memo((props: Props) => {
  const [pdfScale, setPdfScale] = useState<any>(DEFAULT_SCALE_VALUE);
  const {
    uploadPdf,
    pdfViewerRef,
    showSignWritePannel,
    deleteSignInCanvas,
    downloadPdf,
  } = props;

  // 重新设置pdf尺寸
  const setPdfView = (scaleValue: number) => {
    pdfViewerRef.current.currentScaleValue = scaleValue;
    setPdfScale(scaleValue);
    initSignCanvasSize();
  };

  return (
    <PDFControlCss>
      <h3 className="pdf-tool-title">PDF Signaturer</h3>
      <ul className="pdf-tool-list">
        <li className="tool-item upload">
          <input
            type="file"
            accept="pdf"
            title="上傳PDF"
            onChange={uploadPdf}
          />
          <img className="item-icon" src={pdfIcon} alt="zoomout" />
        </li>
        <li
          className="tool-item zoom-out"
          onClick={() => setPdfView(pdfViewerRef.current._currentScale * 1.1)}
        >
          <img className="item-icon" src={zoomOutIcon} alt="zoomout" />
        </li>
        <li
          className="tool-item zoom-in"
          onClick={() => {
            if (pdfScale !== DEFAULT_SCALE_VALUE) {
              setPdfView(pdfViewerRef.current._currentScale / 1.1);
            }
          }}
        >
          <img className="item-icon zoom-in" src={zoomInIcon} alt="zoomin" />
        </li>
        <li className="tool-item edit" onClick={showSignWritePannel}>
          <img className="item-icon edit" src={editdIcon} alt="edit" />
        </li>
        <li className="tool-item clean" onClick={deleteSignInCanvas}>
          <img className="item-icon" src={deleteIcon} alt="clean" />
        </li>
        <li className="tool-item download" onClick={downloadPdf}>
          <img
            className="item-icon download"
            src={downloadIcon}
            alt="download"
          />
        </li>
      </ul>
    </PDFControlCss>
  );
});

export default PDFControl;
