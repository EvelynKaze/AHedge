export const xrp = "rG3cdRNzZ1k83uFrzxMmpekkifKBYcv1dv"

export const clipboardXRP = () => {
    navigator.clipboard.writeText(xrp)
    toast.info("Copied to Clipboard");
  };