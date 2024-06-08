export const brett = "0x9DB78849AB84291944ac393897a013E99703dfD6"
        
export const clipboardBrett = () => {
    navigator.clipboard.writeText(brett)
    toast.info("Copied to Clipboard");
};