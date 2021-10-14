const getFile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bbb');
            resolve("data 33333");
            console.log('ccc');
        }, 1000);
    });
};
