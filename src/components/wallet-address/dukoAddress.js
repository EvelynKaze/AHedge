export const duko = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardDuko = () => {
   navigator.clipboard.writeText(duko)
   toast.info("Copied to Clipboard");
 };