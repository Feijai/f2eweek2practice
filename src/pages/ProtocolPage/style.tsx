import styled from "styled-components";

export const ProtocolPageCss = styled.div`
  .button {
    border: none;
    padding: 10px;
    border-radius: 4px;
    background: #f9cb2a;
    color: #fff;
    transition: opacity 1s;
  }
  .button:active {
    opacity: 0.6;
  }

  .signPic {
    position: absolute;
    z-index: 100;
    border: 1px solid red;
    cursor: pointer;
  }
  .page-load-wrap {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    z-index: 999;
  }
  .page-loading {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    left: 50%;
  }
  .canvasWrapper {
    position: relative;
    canvas {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .pdf-title {
    width: 800px;
    margin: 0 auto;
    font-weight: 700;
  }
  .pcMode {
    position: relative;
    width: 800px;
    height: 800px;
    margin: 0 auto;
    box-sizing: border-box;
    .pdf-title {
      font-weight: 700;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .pdf-wrap {
      position: relative;
      border: 2px solid #ccc;
      height: 100%;
      width: 100%;
    }
    .sign-modal {
      position: absolute;
    }
  }

  .upload-pdf {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    input {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      opacity: 0;
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
