export const enj = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
        
export const clipboardENJ = () => {
    navigator.clipboard.writeText(enj)
    toast.info("Copied to Clipboard");
};