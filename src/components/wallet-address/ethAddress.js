export const eth = "0xD72eF06415D0E523D57a86f787cE93b74A978b62";

export const clipboardETH = () => {
  navigator.clipboard.writeText(eth);
  toast.info("Copied to Clipboard");
};
