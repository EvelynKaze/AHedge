export const xlm = "GAAZHEFRKMW6EIU2DB6XZ5Q4GNXPPEIGBQ44HBPJJTJNCRRAZSR5BRHJ"

export const clipboardXLM = () => {
    navigator.clipboard.writeText(xlm)
    toast.info("Copied to Clipboard");
  };