export const textCute = (text, length) => {
    if (text.length > length) {
        return text.substr(0, length)
    } else {
        return text
    }
}
