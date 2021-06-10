const { AsyncArray, less, add } = Homework;

function promisify(f) {
    return function(...args) {
        return new Promise((resolve) => {
            f(...args, resolve);
        })
    }
}

async function map(array, fn, cb) {
    array = (array instanceof AsyncArray) ? array : new AsyncArray(array);
    const resArray = new AsyncArray();

    const lengthAsyncArr = await promisify(array.length)();
    const getAsyncArr = promisify(array.get);
    const pushAsyncArr = promisify(resArray.push);

    const lessAsyncOperation = promisify(less);
    const addAsyncOperation = promisify(add);

    let index = 0;

    while (await lessAsyncOperation(index, lengthAsyncArr)) {
        await getAsyncArr(index)
            .then(res => {
                console.log('получено значение из массива: ', res);
                return fn(res, index, array);
            })
            .then(mapped => {
                console.log('преобразованное значение: ', mapped);
                pushAsyncArr(mapped);
            });

        index = await addAsyncOperation(index, 1);
    }

    console.log('финальный массив:');
    cb(resArray);
}

// examples
function doublePow(element) {
    return Math.pow(element, 2);
}

function equalOfElementAndOne(element) {
    return element === 1;
}

async function example(params) {
    const array = new AsyncArray([1,2,3,4]);

    console.log('----Возведение в степень----');
    console.log('начальный массив:');
    array.print();
    await map(array, doublePow, (array) => array.print());

    console.log('----Сравнение с 1----');
    console.log('начальный массив:');
    array.print();
    await map(array, equalOfElementAndOne, (array) => array.print());
}

example();