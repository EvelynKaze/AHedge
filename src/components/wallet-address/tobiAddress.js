export const tobi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardTobi = () => {
   navigator.clipboard.writeText(tobi)
   toast.info("Copied to Clipboard");
 };