export const amc = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardAmc = () => {
   navigator.clipboard.writeText(amc)
   toast.info("Copied to Clipboard");
 };