export const redo = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"

export const clipboardRedo = () => {
   navigator.clipboard.writeText(redo)
   toast.info("Copied to Clipboard");
 };