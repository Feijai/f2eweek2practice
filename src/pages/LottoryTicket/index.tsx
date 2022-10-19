import { useEffect, useRef } from "react";
import styled from "styled-components";
import { RecoilRoot } from 'recoil' // 必要不然會報錯



const LottoryTicketCss = styled.div`
font-family: sans-serif;
text-align: center;
.box {
  position: relative;
  margin: 10px auto;
  display: flex;
  align-self: center;
  justify-content: center;
}
#canvas {
  z-index: 2;
}
.text {
  position: absolute;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
}
`

const width = 400;
const hight = 100;

export default function LottoryTicket() {
    const canvasRef = useRef<any>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // 填充颜色
        ctx.fillStyle = "darkgray";
        ctx.fillRect(0, 0, width, hight);
        ctx.fillStyle = "#fff";
        ctx.fillText("刮刮卡", 180, 50);

        let isDraw = false;
        canvas.onmousedown = () => {
            console.log('in down')
            isDraw = true;
        };
        //手機touchStart
        canvas.addEventListener("touchstart",(e:any)=>{
            isDraw = true;
        })

        canvas.onmousemove = (event: any) => {
            console.log('in onmousemove')
            if (!isDraw) return;
            const point = getClientOffset(event);
            const x = point?.x;
            const y = point?.y;

            // 遮盖策略
            console.log(x,y)
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            getFilledPercentage(ctx); // 驗證是否已刮大於60%
        };
        // 手機 touchmove
        canvas.addEventListener("touchmove",(e:any)=>{
            if (!isDraw) return;
            const rect = canvasRef.current.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            console.log(x,y)
            // 遮盖策略
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            getFilledPercentage(ctx); // 驗證是否已刮大於60%
        })


        canvas.onmouseup = () => {
            console.log('in onmouseup')
            isDraw = false;
        };
        // 手機 touchend
        canvas.addEventListener("touchend",(e:any)=>{
            isDraw = false;
        })

    }, [canvasRef]);

    /** 取得位置 */
    const getClientOffset = (event: any) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const point = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
            return point;
        }
    };

    /** 判斷完成度百分比 */
    const getFilledPercentage = (ctx: any) => {
        const imgData = ctx.getImageData(0, 0, width, hight);
        let pixels = imgData.data;
        let n = 0;
        for (let i = 0; i < pixels.length; i += 100) {
            if (pixels[i + 3] < 128) {
                n += 100;
            }
        }

        if (n >= pixels.length * 0.6) {
            ctx.globalCompositeOperation = "destination-over";
            ctx.canvas.style.opacity = 0;
        }
    };

    return (
        <RecoilRoot >
            <LottoryTicketCss>
                <h2>刮刮樂小遊戲</h2>
                <div className="box">
                    <canvas ref={canvasRef} id="canvas" width="400" height="100"></canvas>
                    <div className="text">永遠都不會中好嗎</div>
                </div>
            </LottoryTicketCss>
        </RecoilRoot>
    );
}
