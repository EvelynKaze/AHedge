export const bonk = "7rk2qUYSbgHhRCdqEFw7LmAWiPyW1Ws4fYfvYJXDkw6n"

export const clipboardBONK = () => {
  navigator.clipboard.writeText(bonk)
  toast.info("Copied to Clipboard");
};