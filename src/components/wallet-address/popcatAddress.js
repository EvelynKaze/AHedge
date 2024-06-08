export const popcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardPopcat = () => {
   navigator.clipboard.writeText(popcat)
   toast.info("Copied to Clipboard");
};