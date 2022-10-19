interface propsIF {
    ctx?: any;
    x: any;
    y: any;
    width?: any;
    height?: any;
    r: number;
}


export const drawOval = (
    ctx: any,
    startX: number,
    startY: number,
    x: number,
    y: number
) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY + (y - startY) / 2);
    ctx.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
    ctx.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
    ctx.closePath();
    ctx.stroke();
};

export const pickColor = (
    ctx: any,
    point: { x: number; y: number },
    setActiveColor: (x: string) => void
) => {
    const p = ctx.getImageData(point?.x, point?.y, 1, 1).data;
    const color = `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${p[3]})`;
    setActiveColor(color);
};

export const roundRect = ({
    ctx,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    r,
}: propsIF) => {
    if (width && width < 2 * r) r = width / 2;
    if (height && height < 2 * r) r = height / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.stroke();
};