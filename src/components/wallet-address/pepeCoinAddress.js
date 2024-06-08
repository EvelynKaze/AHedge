export const pepecoin = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"

export const clipboardPepeCoin = () => {
   navigator.clipboard.writeText(pepecoin)
   toast.info("Copied to Clipboard");
 };