export const trump = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardTrump = () => {
    navigator.clipboard.writeText(trump)
    toast.info("Copied to Clipboard");
};