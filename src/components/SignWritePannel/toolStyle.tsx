import styled from "styled-components";

export const SignPannelToolCss = styled.div`
  @media screen and (orientation: portrait) {
    .canvas-write-wrap {
      position: relative;
      left: 60px;
    }
    .canvas-write-title {
      position: absolute;
      z-index: 999;
      width: 60px;
      height: 100%;
      top: 0;
      right: 0;
      background: #7f8995;
      img {
        width: 50px;
        margin-top: 6px;
        margin-left: 5px;
      }
      p {
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        transform: rotate(90deg);
      }
      .title-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        left: 50%;
      }
    }
    .canvas-write-tool {
      position: fixed;
      z-index: 999;
      width: 60px;
      height: 100%;
      top: 0;
      left: 0;
      background: #f4fcf5;
      border-right: 0.5px dashed #ccc;
      .canvas-write-tool-span {
        flex-direction: row;
        height: 40px;
        line-height: 40px;
        color: #fff;
        input {
          vertical-align: middle;
        }
      }
      .bold-wrap {
        margin-top: 30px;
        img {
          display: inline-block;
          width: 40px;
          margin: 10px;
          transform: rotate(90deg);
        }
      }
      .button-wrap {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        left: 50%;
      }
      .color-wrap {
        position: absolute;
        bottom: 16px;
        .color {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 14px 8px;
          border-radius: 50%;
        }
        .red {
          background-color: red;
        }
        .black {
          background-color: black;
        }
        .blue {
          background-color: blue;
        }
      }
      .button {
        border: 2px solid #f1c343;
        background: #fff;
        color: #ccc;
        transform: rotate(90deg);
        width: 74px;
        margin: 30px 0px;
        padding: 10px;
        height: 51px;
        font-size: 18px;
      }
      .save {
        border: 2px solid #f1c343;
        background: #f1c343;
        color: #fff;
      }
    }
  }

  @media screen and (orientation: landscape) {
    .canvas-write-title {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 60px;
      top: 0;
      left: 0;
      background: #7f8995;
      img {
        width: 50px;
        margin-top: 6px;
        margin-left: 5px;
      }
      p {
        float: left;
        margin: 0 2px;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }
      .title-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        left: 50%;
      }
    }
    .canvas-write-wrap {
      position: relative;
      top: 60px;
    }
    .canvas-write-tool {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 60px;
      bottom: 0;
      left: 0;
      background: #f4fcf5;
      border-right: 0.5px dashed #ccc;
      .canvas-write-tool-span {
        flex-direction: row;
        height: 40px;
        line-height: 40px;
        color: #fff;
        input {
          vertical-align: middle;
        }
      }
      .bold-wrap {
        float: left;
        img {
          display: inline-block;
          width: 40px;
          margin: 10px;
        }
      }
      .button-wrap {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        text-align: center;
        left: 50%;
      }
      .color-wrap {
        float: right;
        .color {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 10px;
          border-radius: 50%;
        }
        .red {
          background-color: red;
        }
        .black {
          background-color: black;
        }
        .blue {
          background-color: blue;
        }
      }
      .button {
        border: 2px solid #f1c343;
        background: #fff;
        color: #ccc;
        width: 74px;
        margin: 30px 0px;
        padding: 10px;
        height: 51px;
        font-size: 18px;
        margin-right: 10px;
      }
      .save {
        border: 2px solid #f1c343;
        background: #f1c343;
        color: #fff;
      }
    }
  }

  .bold-wrap {
    .bold {
      border-bottom: 2px solid transparent;
      padding-bottom: 4px;
    }
    .select {
      border-bottom: 2px solid #f1c343;
      padding-bottom: 4px;
    }
  }
  .color-wrap {
    .color {
      border: 2px solid transparent;
    }
    .select {
      border: 2px solid #f1c343;
    }
  }
`;
