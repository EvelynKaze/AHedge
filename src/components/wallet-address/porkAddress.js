export const pork = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardPork = () => {
   navigator.clipboard.writeText(pork)
   toast.info("Copied to Clipboard");
 };