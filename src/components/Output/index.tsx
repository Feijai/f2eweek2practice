import React, { useEffect, useState, useRef } from "react";
import { useAtom } from "jotai";
import { bgFileAtom, signAtom } from "../AtomJotai";
import { Wrapper, Main } from "./style";
import { fabric } from "fabric";

const canvasOriginalHeight = 600;
const canvasOriginalWidth = 600;

const Output = () => {
    const [signData] = useAtom(signAtom);
    const [bgFileData] = useAtom(bgFileAtom);

    const mainRef = useRef(null);
    const [canvas, setCanvas] = useState<any>(null);

    /** 建立主要的 canvas */
    useEffect(() => {
        const c = new fabric.Canvas(mainRef.current);
        setCanvas(c);
    }, [mainRef]);

    /** 填上簽名 */
    useEffect(() => {
        if (canvas && signData) {
            fabric.Image.fromURL(signData, (img) => {
                img.scaleToWidth(100);
                img.scaleToHeight(100);
                canvas.add(img).renderAll();
            });
        }
    }, [canvas, signData]);

    /** 填上背景檔案 */
    useEffect(() => {
        if (canvas && bgFileData) {
            fabric.Image.fromURL(bgFileData, (img: any) => {
                // @ts-ignore
                canvas.setBackgroundImage(bgFileData).renderAll();
                canvas.setHeight(img.height);
                canvas.setWidth(img.width);
                scaleAndPositionImage(img);
            });
        }
    }, [canvas, bgFileData]);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    });

    /** 縮放 */
    const scaleAndPositionImage = (bgImage: any) => {
        const { canvasWidth, canvasHeight } = setCanvasZoom();

        const canvasAspect = canvasWidth / canvasHeight;
        const imgAspect = bgImage.width / bgImage.height;
        let left, top, scaleFactor;

        if (canvasAspect >= imgAspect) {
            scaleFactor = canvasWidth / bgImage.width;
            left = 0;
            top = -(bgImage.height * scaleFactor - canvasHeight) / 2;
        } else {
            scaleFactor = canvasHeight / bgImage.height;
            top = 0;
            left = -(bgImage.width * scaleFactor - canvasWidth) / 2;
        }
        if (canvas) {
            canvas.setBackgroundImage(bgImage, canvas.renderAll.bind(canvas), {
                top: top,
                left: left,
                originX: "left",
                originY: "top",
                scaleX: scaleFactor,
                scaleY: scaleFactor
            });
        }
    };

    const setCanvasZoom = () => {
        let canvasWidth = canvasOriginalWidth * 1;
        let canvasHeight = canvasOriginalHeight * 1;
        console.log(canvas)
        if (canvas) {
            canvas.setWidth(canvasWidth);
            canvas.setHeight(canvasHeight);
        }
        return { canvasWidth, canvasHeight };
    };

    /** 監聽刪除 */
    const handleUserKeyPress = (e: any) => {
        console.log(e, e.keyCode);
        if (e.keyCode === 8) {
            deleteSelectedObjectsFromCanvas();
        }
    };

    /** 刪除選取物件 */
    const deleteSelectedObjectsFromCanvas = () => {
        console.log("canvas", canvas);
        if (canvas) {
            const activeObject = canvas.getActiveObject();
            const activeGroup = canvas.getActiveGroup();

            console.log("activeObject", activeObject);
            console.log("activeGroup", activeGroup);
            if (activeObject) {
                canvas.remove(activeObject);
            } else if (activeGroup) {
                const objectsInGroup = activeGroup.getObjects();
                canvas.discardActiveGroup();
                objectsInGroup.forEach(function (object: any) {
                    canvas.remove(object);
                });
            }
        }
    };

    /** 下載 */
    const download = () => {
        const dataURL = canvas.toDataURL({ format: "png" });
        const link = document.createElement("a");
        link.download = "my-image.png";
        link.href = dataURL;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    };

    return (
        <Wrapper>
            <div>
                <button onClick={download}>下載</button>
            </div>
            <Main>
                <canvas ref={mainRef} style={{ border: `2px solid #000` }}></canvas>
            </Main>
        </Wrapper>
    );
};

export default Output;

// https://stackoverflow.com/questions/35339478/html5-canvas-how-do-i-merge-2-canvas-into-1-of-which-1-is-draggable

// resize https://jsfiddle.net/whippet71/7s5obuk2/

// network error https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error/37151835
