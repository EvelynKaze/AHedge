export const mini = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardMini = () => {
   navigator.clipboard.writeText(mini)
   toast.info("Copied to Clipboard");
 };