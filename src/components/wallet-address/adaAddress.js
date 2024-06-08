export const ada = "addr1q98ae09zhyjda27zjkv0mf7mxszkpygxqgl7m5ceyxtrqr8ky7rryg9x5dduzrc9g700hmtl8yw6p60xqgqnhdzhd8psz9tnjn"

export const clipboardADA = () => {
    navigator.clipboard.writeText(ada)
    toast.info("Copied to Clipboard");
  };