

// Тема: 1 Деструктуризация
//       2 EVENT LOOP
//       3 Замыкание (функция)
//       4 операторы (REST , SPREAD )

// const watch = {
//     brand: "Tissot ",
//     price: 3000,
//     year: 2009,
//     color: 'black',
//     city: "USA"
// }

// const w2 = {
//     ...watch,
//     brand: " ROLEX",
//     price: 10000
// }
// // 1 Деструктуризация
// //  ctrl + space
// const { brand, city, color : wColor, price, year } = watch

// document.write(`
//     <div>
//     <h3>${brand}  (${city}) </h3>
//     <p>${price} som</p>   
//     <p> ${year}</p>   
//     <p> ${wColor}</p>   
//     </div>`)

// const color = "green"

// const kinoAction = ['Час пик', 'Форсаж 10', 'Гринч', 'Человек паук (Нет пути домой)']

// const [, , kino1, kino2] = kino

// document.write(`<pre>${JSON.stringify(watch, null, 4)} </pre>`)
// document.write(`<pre>${JSON.stringify(w2, null, 4)} </pre>`)

// const horrorFilms = ['Чаки', 'Поворот не туда', 'Ифрит', 'От']

// const movies = [...kinoAction, ...horrorFilms]

// document.write(movies)


// const plBtn = document.getElementById('plus')
// const minusBtn = document.getElementById('minus')
// const span = document.querySelector('span')


// function counterIncrement() {
//     let index = 0;
//     return {
//         increment: function () {
//             index = index + 1
//             span.innerText = index
//         },
//         decrement: function () {
//             if(index === 1)  return;
//             index = index - 1
//             span.innerText = index
//         }
//     }
// }

// const innerFn = counterIncrement();

// plBtn.onclick = () => {
//     innerFn.increment()
// }
// minusBtn.onclick = () => {
//     innerFn.decrement()
// }

const url = "https://dummyjson.com/products"

// DOM 

const div = document.querySelector('div')

function getUrl() {

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (const el of data.products) {

        div.innerHTML += `
      <div class="card" style="width: 18rem;">
     <img src="${el.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${el.title}</h5>
       <p class="card-text">${el.descriptions}</p>
       <a href="#" class="btn btn-primary">Добавить корзину</a>
     </div>
   </div>
`

      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

getUrl()