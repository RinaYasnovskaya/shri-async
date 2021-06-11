(function () {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getApiResponse = (searchString) => new Promise(resolve =>
            setTimeout(() => resolve(searchString), getRandomInt(1, 10) * 500)
    );

    
})()