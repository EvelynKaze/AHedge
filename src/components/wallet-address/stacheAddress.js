export const stache = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardStache = () => {
   navigator.clipboard.writeText(stache)
   toast.info("Copied to Clipboard");
 };