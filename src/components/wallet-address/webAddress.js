export const web = "0x46d72B60E83D5dca094C23B9D24f51F87f02fDa6"

export const clipboardWeb = () => {
    navigator.clipboard.writeText(web)
    toast.info("Copied to Clipboard");
};