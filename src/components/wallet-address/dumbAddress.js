export const dumb = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardDumb = () => {
   navigator.clipboard.writeText(dumb)
   toast.info("Copied to Clipboard");
 };