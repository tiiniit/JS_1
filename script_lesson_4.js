//задание 1
let res = {
    number: 46,
    units: 0,
    tens: 0,
    hundreds: 0,
}
if (res.number >= 0 && res.number <= 9) {
    res.units = res.number;
} else if (res.number >= 0 && res.number <= 999) {
    res.units = Math.floor(res.number % 10);
    res.tens = Math.floor(res.number / 10 % 10);
    res.hundreds = Math.floor(res.number / 100 % 10);

} else {
    res.number < 0 || res.number > 999
    console.log(res.number + ' не соответствует условию');
}
console.log(res);

//задание 2
//задание 2-3 Урок 3. Корзина с помощью массива
/*let backet_sum = 0
let basketArr = [{ name: 'Wok', price: 300 }, { name: 'Bao', price: 160 }, { name: 'Bibimbab', price: 350 }];
basketArr.push({ name: 'kombucha', price: 120 });

function countBasketPrice() {
    for (i = 0; i < basketArr.length; i++) {
        console.log(basketArr[i].name + ' - ' + basketArr[i].price + ' руб.')
        backet_sum = backet_sum + basketArr[i].price;
    }
    return backet_sum;
}

console.log('Итого: ' + countBasketPrice(backet_sum) + ' руб.');*/

//корзина через объект

function countBasketPrice(basket) {
    let backet_sum = 0;
    for (let sum of Object.values(basket)) {
        backet_sum += sum;
    }
    return backet_sum

}
let basket = {
    wok: 300,
    bao: 160,
    bibimbab: 350,
}
basket.kombuch = 120;
console.log(Object.keys(basket) + ' - ' + countBasketPrice(basket) + ' руб.')