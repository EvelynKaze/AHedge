export const lichi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardLichi = () => {
   navigator.clipboard.writeText(lichi)
   toast.info("Copied to Clipboard");
 };