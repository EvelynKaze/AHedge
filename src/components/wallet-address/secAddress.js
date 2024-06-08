export const sec = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardSec = () => {
  navigator.clipboard.writeText(sec)
  toast.info("Copied to Clipboard");
};