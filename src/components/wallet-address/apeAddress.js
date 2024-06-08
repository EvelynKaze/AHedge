export const ape = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"

export const clipboardApe = () => {
    navigator.clipboard.writeText(ape)
    toast.info("Copied to Clipboard");
};