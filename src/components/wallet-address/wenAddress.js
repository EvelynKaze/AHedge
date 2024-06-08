export const wen = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        
export const clipboardWEN = () => {
    navigator.clipboard.writeText(wen)
    toast.info("Copied to Clipboard");
};