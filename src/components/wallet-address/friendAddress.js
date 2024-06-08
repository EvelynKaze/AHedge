export const friend = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
       
export const clipboardFriend = () => {
    navigator.clipboard.writeText(friend)
    toast.info("Copied to Clipboard");
};