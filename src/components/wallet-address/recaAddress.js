export const reca = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardReca = () => {
   navigator.clipboard.writeText(reca)
   toast.info("Copied to Clipboard");
 };