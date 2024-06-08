export const kiki = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardKiki = () => {
    navigator.clipboard.writeText(kiki)
    toast.info("Copied to Clipboard");
};