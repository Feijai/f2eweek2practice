// Get the position of the mouse relative to the canvas
export const getMousePos = (canvasDom: any, mouseEvent: any) => {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
    };
}

// Get the position of a touch relative to the canvas
export const getTouchPos = (canvasDom: any, touchEvent: any) => {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}

export const getScaledDim = (img: any, maxWidth: any, maxHeight: any) => {
    var scaled = {
        ratio: img.width / img.height,
        width: img.width,
        height: img.height
    };
    if (scaled.width > maxWidth) {
        scaled.width = maxWidth;
        scaled.height = scaled.width / scaled.ratio;
    }
    if (scaled.height > maxHeight) {
        scaled.height = maxHeight;
        scaled.width = scaled.height / scaled.ratio;
    }
    return scaled;
};