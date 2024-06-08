export const selfie = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardSelfie = () => {
   navigator.clipboard.writeText(selfie)
   toast.info("Copied to Clipboard");
 };