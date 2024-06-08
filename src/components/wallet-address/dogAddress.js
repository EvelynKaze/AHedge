export const dog = "bc1p2sqyg89zhk8z69854xs56ezkdnlan37tmngs8z89thswj7tpzjksnpsk4x"

export const clipboardDog = () => {
    navigator.clipboard.writeText(dog)
    toast.info("Copied to Clipboard");
};