export const gme = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardGME = () => {
   navigator.clipboard.writeText(gme)
   toast.info("Copied to Clipboard");
 };