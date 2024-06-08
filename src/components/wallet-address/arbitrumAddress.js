export const arbitrum = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"

export const clipboardARBITRUM = () => {
  navigator.clipboard.writeText(arbitrum)
  toast.info("Copied to Clipboard");
};