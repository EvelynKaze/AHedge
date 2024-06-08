export const derp = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardDerp = () => {
  navigator.clipboard.writeText(derp)
  toast.info("Copied to Clipboard");
};