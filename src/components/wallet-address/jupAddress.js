export const jup = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardJUP = () => {
  navigator.clipboard.writeText(jup)
  toast.info("Copied to Clipboard");
};