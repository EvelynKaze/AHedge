export const djcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardDjcat = () => {
  navigator.clipboard.writeText(djcat)
  toast.info("Copied to Clipboard");
};