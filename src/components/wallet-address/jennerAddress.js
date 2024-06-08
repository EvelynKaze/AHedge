export const jenner = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardJenner = () => {
    navigator.clipboard.writeText(jenner)
    toast.info("Copied to Clipboard");
};