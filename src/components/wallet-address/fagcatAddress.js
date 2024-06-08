export const fagcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardFagcat = () => {
    navigator.clipboard.writeText(fagcat)
    toast.info("Copied to Clipboard");
};