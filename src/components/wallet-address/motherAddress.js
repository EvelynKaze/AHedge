export const mother = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardMother = () => {
  navigator.clipboard.writeText(mother)
  toast.info("Copied to Clipboard");
};