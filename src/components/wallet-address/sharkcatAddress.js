export const sharkcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardSharkcat = () => {
   navigator.clipboard.writeText(sharkcat)
   toast.info("Copied to Clipboard");
 };