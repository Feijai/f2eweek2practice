import React, { useState } from 'react'
import styled from 'styled-components'
import CanvasBox from '../../components/CanvasBox'
import SelectorColorList from '../../components/SelectorColorList'
import { RecoilRoot } from 'recoil' // 必要不然會報錯
import ToolList from '../../components/ToolList'
import Menus from '../../components/Menus'

const HomeCss = styled.div`
  display: flex;
  flex-flow: row;
  flex: 1 1 0;
  overflow: hidden;
  min-height: 88vh;
`

export default function Home() {

    return (
        <div className="jspaint">
            <div className="vertical">
                <RecoilRoot >
                    <Menus />
                    <HomeCss>
                        <ToolList></ToolList>
                        <CanvasBox></CanvasBox>
                    </HomeCss>
                    <SelectorColorList></SelectorColorList>
                </RecoilRoot>
            </div>
        </div>
    )
}
