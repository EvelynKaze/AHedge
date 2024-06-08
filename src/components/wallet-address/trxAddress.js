export const trx = "TNW1zeNt9hMvXPfT6JEBeAhfGAsbqgCNWX"

export const clipboardTRX = () => {
    navigator.clipboard.writeText(trx)
    toast.info("Copied to Clipboard");
};