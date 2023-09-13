// const { log } = require("console");

const categorySelect = document.querySelector('#categorySelect');

function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
        .then( resp => {
            if (resp.ok)
                return resp.json();
            else {
                throw new Error('Failed request!')
            }
        })
        .then( categories => {
            // console.log(categories);
            // console.log(categories[0]);
            categories.forEach(element => {
                // const el = document.createElement('option');
                // el.value = element;
                // el.textContent = element.charAt(0).toUpperCase() + element.slice(1);
                // categorySelect.append(el);
            });
        })
        .catch( err => console.log('Something went wrong! ' + err));
};

getCategories();


let english = {
    "advantages":[
        "МЫ БОЛЕЕ 13 ЛЕТ на рынке образования",
        "НОСИТЕЛИ ЯЗЫКА из США и из АНГЛИИ",
        "TOEFL, IELTS100% сдача экзамена",
        "ВЫЕЗД Мы приедем к Вам"
    ],

    "reasons":[
        "Много учеников закончили курсы успешно",
        "Все преподаватели С красными дипломами",
        "Большой опыт в подготовке к международным экзаменам",
        "Носители языка Из США и из АНГЛИИ","80% практики разговорной речи","Сертификат международного образца"
    ],

    "endOfDiscount":
        {"timeStamp":1699868632000},

    "problemSolving":[
        "Не могу свободно говорить",
        "Не понимаю английскую речь и песни",
        "В голове каша из грамматики и артиклей",
        "Не умею читать и писать",
        "Говорю, но медленно или неправильно",
        "У меня неправильное произношение"
    ]
}

// =========== advantage =========

let advantageBox = document.querySelectorAll('.ads_1-item'); 
// console.log('ads = ', advantageBox);

let englishAdvantages = english.advantages;
// console.log('englishAdv => ', english.advantages);

advantageBox.forEach((element,index) => {
    // console.log(element,index);

    englishAdvantages.forEach((item,ind) => {
        
        if (index == ind){
            // console.log(item,ind);
            const el = document.createElement('p');
            el.innerHTML = item;
            element.append(el);
            // console.log(element.innerHTML);
        }
    });
    
});


// =========== clock ==========

// "endOfDiscount": {"timeStamp":1699868632000}
// Получаем элемент с классом "timer-clock"
let clockDiv = document.querySelector('.timer-clock');

function updateCountdown() {
    // Получаем текущее время
    const now = new Date();

    // Получаем метку времени из объекта 'english'
    const endOfDiscountTimeStamp = english.endOfDiscount.timeStamp;

    // Создаем объект Date на основе метки времени
    const endOfDiscountDate = new Date(endOfDiscountTimeStamp);

    // Вычисляем разницу между текущим временем и временем окончания скидки
    const timeDiff = endOfDiscountDate - now;

    // Проверяем, если скидка истекла
    if (timeDiff <= 0) {
        clockDiv.innerHTML = 'Скидка истекла';
    } else {
        // Преобразуем разницу времени в часы, минуты и секунды
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Отображаем обратный отсчет
        clockDiv.innerHTML = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Обновляем обратный отсчет каждую секунду
setInterval(updateCountdown, 1000);

// Инициализация при загрузке страницы
updateCountdown();

