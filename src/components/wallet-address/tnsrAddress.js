export const tnsr = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        
export const clipboardTnsr = () => {
    navigator.clipboard.writeText(tnsr)
    toast.info("Copied to Clipboard");
};