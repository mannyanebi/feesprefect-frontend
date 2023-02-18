const generateRandomString = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i += 1) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        result += randomChar;
    }

    return result;
};

export default generateRandomString;
