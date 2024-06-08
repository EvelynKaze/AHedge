export const michi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        
export const clipboardMichi = () => {
    navigator.clipboard.writeText(michi)
    toast.info("Copied to Clipboard");
};