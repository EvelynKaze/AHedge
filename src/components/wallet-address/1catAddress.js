export const $1cat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboard$1cat = () => {
  navigator.clipboard.writeText($1cat)
  toast.info("Copied to Clipboard");
};