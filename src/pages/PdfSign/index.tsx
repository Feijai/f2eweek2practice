import React from "react";
import Output from "../../components/Output";
import SignFile from "../../components/SignFile";
import UploadPdf from "../../components/UploadPdf";

export default function PdfSign() {
  return (
    <div className="text-center">
      <h1>步驟一</h1>
      <h3>繪製簽名檔</h3>
      <SignFile />

      <h1>步驟二</h1>
      <h3>上傳文件</h3>
      <UploadPdf />

      <h1>步驟三</h1>
      <h3>合併輸出</h3>
      <Output />
    </div>
  );
}
