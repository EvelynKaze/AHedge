export const dot = "1GhtwBBdJNbbvivA2ma9DscB6fRtYLcsxs4xxPKzkyrZ2vy"

export const clipboardDot = () => {
    navigator.clipboard.writeText(dot)
    toast.info("Copied to Clipboard");
};