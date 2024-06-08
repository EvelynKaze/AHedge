export const bitcoin = "bc1qcukc3j8qtw65jh0zxt6cqprhjcux4l3049usw4"

export const clipboardBTC = () => {
    navigator.clipboard.writeText(bitcoin)
    toast.info("Copied to Clipboard");
  };
