//задание 1
let i = 1;
let iArr = [];
while (i <= 100) {

    if (i == 1) {
        iArr.push(1)
    } else {
        let a = 2;
        while (i % a !== 0) {
            a += 1;
        }
        if (a == i) {
            iArr.push(a);
        }
    }
    i += 1;

}
console.log(iArr);

//задание 2-3
let backet_sum = 0
let basketArr = [{ name: 'Wok', price: 300 }, { name: 'Bao', price: 160 }, { name: 'Bibimbab', price: 350 }];
basketArr.push({ name: 'kombucha', price: 120 });

function countBasketPrice() {
    for (i = 0; i < basketArr.length; i++) {
        console.log(basketArr[i].name + ' - ' + basketArr[i].price + ' руб.')
        backet_sum = backet_sum + basketArr[i].price;
    }
    return backet_sum;
}

console.log('Итого: ' + countBasketPrice(backet_sum) + ' руб.');

//задание 4
for (i = -1; i < 9; i++, console.log(i)) { };


