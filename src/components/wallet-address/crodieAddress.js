export const crodie = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardCrodie = () => {
   navigator.clipboard.writeText(crodie)
   toast.info("Copied to Clipboard");
 };