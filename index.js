const getFile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data 33333");
        }, 1000);
    });
};
