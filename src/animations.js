export const ScaleForeGround = (x, y) => `scale(${(Math.abs(y) / 2000) + 1})`;
export const ScaleBackground = (x, y) => `scale(${(Math.abs(y) / 1000) + 1})`;
export const MoveFast = (x, y) => `translate3d(${x / 2}px,0px,0)`;
export const skewBoxShadow = (x, y) => `0px 0px 7px rgb(70, 105, 116), ${x * -1 / 100}px ${Math.abs(x) / 100}px 5px rgb(70, 105, 116)`;
export const backgroundGradient = (x, y) => `linear-gradient(${x / 120}deg, rgb(70, 105, 116), #dae8e8)`;