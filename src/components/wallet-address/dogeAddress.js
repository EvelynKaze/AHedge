export const doge = "DGmRUnfhrAb4bQY8LPFSNYxgqPaT5SbbaN"

export const clipboardDOGE = () => {
    navigator.clipboard.writeText(doge)
    toast.info("Copied to Clipboard");
};