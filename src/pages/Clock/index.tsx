import React, { useEffect, useRef } from "react";

const Clock = () => {
    const clockRef = useRef<any>(null);

    useEffect(() => {
        const clock = () => {
            const canvas = clockRef.current;
            const ctx = canvas.getContext("2d");
            let now = new Date(),
                sec = now.getSeconds(),
                min = now.getMinutes(),
                hr = now.getHours();
            hr = hr > 12 ? hr - 12 : hr;

            // 底盤顏色
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(-Math.PI / 2); // 將座標軸逆時針轉90度，x軸正方向對準12點位置
            var lingrad = ctx.createLinearGradient(150, 0, -150, 0);
            lingrad.addColorStop(0, "#242f37"); // 製造漸層感的底色
            lingrad.addColorStop(1, "#48585c");
            ctx.fillStyle = lingrad;
            ctx.beginPath();
            ctx.arc(0, 0, 150, 0, Math.PI * 2, true);
            ctx.fill();

            // 小時刻度
            ctx.save();
            for (var i = 0; i < 12; i++) {
                ctx.beginPath();
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 3;
                ctx.rotate(Math.PI / 6);
                ctx.moveTo(140, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.restore();

            // 分鐘刻度
            ctx.save();
            ctx.beginPath();
            for (i = 0; i < 60; i++) {
                if (i % 5 !== 0) {
                    ctx.beginPath();
                    ctx.strokeStyle = "#eee";
                    ctx.lineWidth = 2;
                    ctx.moveTo(140, 0);
                    ctx.lineTo(130, 0);
                    ctx.stroke();
                }
                ctx.rotate(Math.PI / 30);
            }
            ctx.restore();

            // 時間文字
            ctx.save();
            ctx.rotate(Math.PI / 2);
            ctx.beginPath();
            ctx.fillStyle = "#01bBC2";
            ctx.font = "32px Microsoft yahei";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("3", 100, 0);
            ctx.fillText("6", 0, 100);
            ctx.fillText("9", -100, 0);
            ctx.fillText("12", 0, -100);
            ctx.restore();

            // 時針
            ctx.save();
            ctx.rotate(
                hr * (Math.PI / 6) + min * (Math.PI / 360) + sec * (Math.PI / 21600)
            );
            ctx.lineWidth = 10;
            ctx.strokeStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(110, 0);
            ctx.stroke();
            ctx.fillStyle = "#34434c";
            ctx.arc(102, 0, 3, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();

            // 分針
            ctx.save();
            ctx.rotate(min * (Math.PI / 30) + sec * (Math.PI / 1800));
            ctx.lineWidth = 6;
            ctx.strokeStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(135, 0);
            ctx.stroke();

            ctx.lineWidth = 3;
            ctx.strokeStyle = "#34434c";
            ctx.beginPath();
            ctx.moveTo(130, 0);
            ctx.lineTo(115, 0);
            ctx.stroke();
            ctx.restore();

            // 秒針
            ctx.save();
            ctx.rotate(sec * (Math.PI / 30));
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "#fff";
            ctx.moveTo(0, 0);
            ctx.lineTo(141, 0);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 12;
            ctx.strokeStyle = "#fff";
            ctx.moveTo(0, 0);
            ctx.lineTo(-38, 0);
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(0, 0, 15, 0, Math.PI * 2, true);
            ctx.fill();

            ctx.beginPath();
            ctx.strokeStyle = "#cdd2d5";
            ctx.lineWidth = 1;
            ctx.arc(0, 0, 8, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.restore();

            // 外框
            ctx.beginPath();
            ctx.lineWidth = 7;
            var lingrad2 = ctx.createLinearGradient(150, 0, -150, 0);
            lingrad2.addColorStop(0, "#adb9c5");
            lingrad2.addColorStop(1, "#e9eced");
            ctx.strokeStyle = lingrad2;
            ctx.arc(0, 0, 152, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.restore();

            window.requestAnimationFrame(clock); // loop 時間
        };

        if (clockRef.current) clock();
    }, [clockRef]);

    return (
        <div className="container">
            <div className="text-center">
                <canvas ref={clockRef} width={500} height={500}></canvas>
            </div>
        </div>
    );
};

export default Clock;
