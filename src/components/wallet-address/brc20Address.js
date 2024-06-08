export const brc20 = "bc1p2sqyg89zhk8z69854xs56ezkdnlan37tmngs8z89thswj7tpzjksnpsk4x"
        
export const clipboardBRC = () => {
    navigator.clipboard.writeText(brc20)
    toast.info("Copied to Clipboard");
};