export const nigi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardNigi = () => {
    navigator.clipboard.writeText(nigi)
    toast.info("Copied to Clipboard");
};