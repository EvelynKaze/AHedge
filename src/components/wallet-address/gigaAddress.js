export const giga = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardGiga = () => {
   navigator.clipboard.writeText(giga)
   toast.info("Copied to Clipboard");
 };