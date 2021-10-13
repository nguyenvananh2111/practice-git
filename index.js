const getFile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaaaaaaa');
            resolve("data 22222222222222222");
        }, 1000);
    });
};
