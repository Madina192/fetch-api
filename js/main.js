// Промис
// const WRING_OUT_TIME = 500
// function wringOut(count) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, count * WRING_OUT_TIME);
//     })
// }
// console.log('Начать отжимание');
// wringOut(10).then(() => {
//     console.log('Отжался 10 раз');
// })
// .catch(() => {
//     console.log('Oops! Something went wrong');
// })

// const wringOut = new Promise();
// const squatting = new Promise();

// const myTraining = async () => {
//     try{
//         await wringOut(10);
//         console.log('Отжался 10 раз');
//         await squatting(20);
//         console.log('Присел 20 раз');
//     } catch(err) {
//         console.log("Couldn't do");
//     }
// }

// let allWentWell = null || '0'
// function promise () {
//     return new Promise((resolve, reject) => {
//     if(allWentWell) {
//       resolve('Все прошло отлично!');
//     } else {
//       reject('Что-то пошло не так');
//     }
//   });
// }
// console.log(promise());

const box = document.querySelector('.box')
fetch('http://hp-api.herokuapp.com/api/characters')
.then(response => {
    if(!response.ok) throw new Error('Oops!')
    return response.json()
})
.then(data => {
    data.forEach((el) => {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'div')
        newDiv.textContent = el.name
        box.appendChild(newDiv)
        const img = document.createElement('img')
        img.setAttribute('class', 'img')
        img.setAttribute('src', `${el.image}`)
        newDiv.appendChild(img)
    })
})

console.log();
