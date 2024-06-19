export const hot = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardHot = () => {
  navigator.clipboard.writeText(hot)
  toast.info("Copied to Clipboard");
};