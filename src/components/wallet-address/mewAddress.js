export const mew = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
       
export const clipboardMew = () => {
    navigator.clipboard.writeText(mew)
    toast.info("Copied to Clipboard");
};