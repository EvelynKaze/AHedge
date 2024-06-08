export const wif = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        
export const clipboardWif = () => {
    navigator.clipboard.writeText(wif)
    toast.info("Copied to Clipboard");
};