/**
 * 上方工具列
 */

import styled from 'styled-components'
import map from "lodash/map";

const Wrapper = styled("div")`
  background-color: #c0c0c0;
  display: flex;
  padding: 2px 5px;
`;

const Button = styled("div")`
  padding: 2px 6px;
  font-family: "Segoe UI", sans-serif;
  font-size: 13px;
  cursor: pointer;
  > span {
    text-decoration: underline;
  }
  :hover {
    box-shadow: 1px 1px 0 var(--ButtonHilight) inset,
      -1px -1px 0 var(--ButtonShadow) inset;
  }
`;

const list = [
    { label: "檔案", hotKeyword: "F" },
    { label: "編輯", hotKeyword: "E" },
    { label: "檢視", hotKeyword: "V" },
    { label: "影像", hotKeyword: "I" },
    { label: "色彩", hotKeyword: "C" },
    { label: "說明", hotKeyword: "H" },
    { label: "Extars", hotKeyword: "" },
];

const Menus = () => {
    return (
        <Wrapper>
            {map(list, (el) => (
                <Button key={el?.label}>
                    {el?.label}(<span>{el?.hotKeyword}</span>)
                </Button>
            ))}
        </Wrapper>
    );
};

export default Menus;