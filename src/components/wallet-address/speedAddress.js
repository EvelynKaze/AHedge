export const speed = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardSpeed = () => {
   navigator.clipboard.writeText(speed)
   toast.info("Copied to Clipboard");
 };