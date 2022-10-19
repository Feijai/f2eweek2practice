import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled("div")`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled("canvas")`
  position: absolute;
  left: 0;
  right: 0;

  &.sign {
    z-index: 3;
  }

  &.bg {
    z-index: 2;
    /* background: #eee; */
  }
`;

export { Wrapper, Canvas, Main };