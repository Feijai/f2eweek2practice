import styled from "styled-components";

export const PDFControlCss = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  background: #efdeb2;
  overflow: hidden;
  text-align: center;
  z-index: 800;
  overflow: hidden;
  .pdf-tool-title {
    float: left;
    text-indent: 10px;
    line-height: 35px;
    margin-right: 10px;
  }
  .pdf-tool-list {
    position: absolute;
    list-style: none;
    height: 33px;
    background: #f1d790;
    right: 0;
  }
  .tool-item {
    position: relative;
    float: left;
    line-height: 35px;
    margin: 0 10px;
    cursor: pointer;
  }
  .item-icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .upload {
    input {
      cursor: pointer;
      position: absolute;
      opacity: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .line {
    display: inline-block;
    height: 39px;
    line-height: 39px;
    width: 1px;
    color: #a58888;
    float: left;
    margin-left: -1px;
  }
`;
