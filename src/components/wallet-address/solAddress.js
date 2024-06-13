export const sol = "7rk2qUYSbgHhRCdqEFw7LmAWiPyW1Ws4fYfvYJXDkw6n"

export const clipboardSOL = () => {
  navigator.clipboard.writeText(sol)
  toast.info("Copied to Clipboard");
};