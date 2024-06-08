export const bobo = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardBobo = () => {
   navigator.clipboard.writeText(bobo)
   toast.info("Copied to Clipboard");
 };