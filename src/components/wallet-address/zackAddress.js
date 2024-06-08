export const zack = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardZack = () => {
    navigator.clipboard.writeText(zack)
    toast.info("Copied to Clipboard");
};