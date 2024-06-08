export const pepe = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"

export const clipboardPepe = () => {
   navigator.clipboard.writeText(pepe)
   toast.info("Copied to Clipboard");
 };