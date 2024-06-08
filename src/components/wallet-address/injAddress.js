export const inj = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
        
export const clipboardINJ = () => {
    navigator.clipboard.writeText(inj)
    toast.info("Copied to Clipboard");
};