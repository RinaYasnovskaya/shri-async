(function () {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getApiResponse = (searchString) => new Promise(resolve =>
        setTimeout(() => resolve(searchString), getRandomInt(1, 10) * 500)
    );

    const { fromEvent } = rxjs;

    const button = document.querySelector('#button');
    const input = document.querySelector('#input');
    const responsiveContainer = document.querySelector('#response-container');
    const requestContainer = document.querySelector('#cancel-prev-request-container');

    // task 1 
    fromEvent(button, 'click').subscribe(() => {
        input.value = '';
        responsiveContainer.textContent = '';
        requestContainer.textContent = '';
    });

    // task 2
    
})()