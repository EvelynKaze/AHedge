export const tremp = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardTremp = () => {
    navigator.clipboard.writeText(tremp)
    toast.info("Copied to Clipboard");
};