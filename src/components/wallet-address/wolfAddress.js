export const wolf = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardWolf = () => {
   navigator.clipboard.writeText(wolf)
   toast.info("Copied to Clipboard");
 };