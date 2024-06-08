export const dixi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardDixi = () => {
  navigator.clipboard.writeText(dixi)
  toast.info("Copied to Clipboard");
};