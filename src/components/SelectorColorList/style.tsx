import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex: 0 0 auto;
  padding: 0 5px;
`;

export const CurrentColorBox = styled("div")`
  width: 30px;
  height: 31px;
  border-top: 1px solid var(--ButtonShadow);
  border-left: 1px solid var(--ButtonShadow);
  border-right: 1px solid var(--ButtonFace);
  border-bottom: 1px solid var(--ButtonFace);
  background: var(--checker);
  position: relative;
`;

export const ActiveColor = styled("div")`
  background: ${(props) => props?.color || `#FFF`};
  width: 15px;
  height: 15px;
  border: 0;
  display: flex;
  position: absolute;
  left: 2px;
  top: 4px;
  border-top: 1px solid var(--ButtonHilight);
  border-left: 1px solid var(--ButtonHilight);
  border-right: 1px solid var(--ButtonShadow);
  border-bottom: 1px solid var(--ButtonShadow);
  z-index: 2;
`;

export const SubColor = styled("div")`
  background: ${(props) => props?.color || `#FFF`};
  width: 15px;
  height: 15px;
  border: 0;
  display: flex;
  position: absolute;
  right: 3px;
  bottom: 3px;
  border-top: 1px solid var(--ButtonHilight);
  border-left: 1px solid var(--ButtonHilight);
  border-right: 1px solid var(--ButtonShadow);
  border-bottom: 1px solid var(--ButtonShadow);
`;

export const ListBox = styled("div")`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  height: 32px;
  width: 224px;
`;

export const Item = styled("div")`
  border-top: 1px solid var(--ButtonShadow);
  border-left: 1px solid var(--ButtonShadow);
  border-right: 1px solid var(--ButtonFace);
  border-bottom: 1px solid var(--ButtonFace);
  background-color: ${(props) => props?.color};
  padding: 0;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
`;
