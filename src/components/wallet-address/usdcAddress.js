export const usdc = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"

export const clipboardUSDC = () => {
    navigator.clipboard.writeText(usdc)
    toast.info("Copied to Clipboard");
  };