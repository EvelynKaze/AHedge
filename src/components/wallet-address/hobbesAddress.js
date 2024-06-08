export const hobbes = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 
export const clipboardHobbes = () => {
    navigator.clipboard.writeText(hobbes)
    toast.info("Copied to Clipboard");
};