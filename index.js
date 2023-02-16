/* const count = 0; */

/* setTimeout(() => {
    console.log('count 1', count);
}, 0) */

/* console.log('count 2', count);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello')
    }, 1000)
});

promise.then((response) => {
    console.log('response', response);
}) */

// * промисы

const loader = document.querySelector('.loader');

async function getUsers() {
    loader.style.display = 'block'; 
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('==> response.json()', data);
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }

}

getUsers();