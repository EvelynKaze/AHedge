export const andy = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardAndy = () => {
  navigator.clipboard.writeText(andy)
  toast.info("Copied to Clipboard");
};