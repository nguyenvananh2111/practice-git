const getFile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data 2");
        }, 1000);
    });
};
