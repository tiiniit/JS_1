//задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 инкремент до переменной поэтому выводится a + 1
d = b++; alert(d);           // 1 инкремент после, поэтому выводится "старое" значение b, но инкремент срабатывает и ниже  b имеет значение 2
c = (2 + ++a); alert(c);      // 5 переменная a уже имеет значение 2 (c = ++a;), соответственно c = 2 + 1 + 2
d = (2 + b++); alert(d);      // 4 b = 2 (см. строку  3) отсюда d = 2 + 2, но далее b присваивается значение 3 (b++) 
alert(a);                    // 3 инкремент в строке 4 прибавляет к a ещё 1, поэтому a = 3
alert(b);                    // 3 инкремент в строке 5 прибавляет к b ещё 1, поэтому b = 3

//задание 2
var a = 2;
var x = 1 + (a *= 2); //5, т. к. a *= 2 - это присваивание с умножением - a = a*2. Итого x=1+(2*2)=5
alert(x);

//задание 3
var a = +prompt('введите переменную a', '');
var b = +prompt('введите переменную b', '');

if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if (a <= 0 && b <= 0) {
    alert(a * b);
}
else if (a >= 0 && b <= 0 || a <= 0 && b >= 0) {
    alert(a + b);
}


//задание 4
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = randomNum(0, 15)
switch (a) {
    case 0:
        alert(a);
        break
    case 1:
        alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 2:
        alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 3:
        alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 4:
        alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 5:
        alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 6:
        alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 7:
        alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 8:
        alert('8, 9, 10, 11, 12, 13, 14, 15');
        break
    case 9:
        alert('9, 10, 11, 12, 13, 14, 15');
        break
    case 10:
        alert('10, 11, 12, 13, 14, 15');
        break
    case 11:
        alert('11, 12, 13, 14, 15');
        break
    case 12:
        alert('12, 13, 14, 15');
        break
    case 13:
        alert('13, 14, 15');
        break
    case 14:
        alert('14, 15');
        break
    default:
        alert('что-то не так');
}

//задание 5
function addFoo(a, b) {
    return a + b;
}
function subFoo(a, b) {
    return a - b;
}
function multFoo(a, b) {
    return a * b;
}
function divisionFoo(a, b) {
    return a / b;
}

//задание 6
var a = +prompt('введите a');
var b = +prompt('введите b');
operation = prompt('сложение, вычетание, умножение или деление?')

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'сложение':
            alert(addFoo(a, b));
            break
        case 'вычетание':
            alert(subFoo(a, b));
            break
        case 'умножение':
            alert(multFoo(a, b));
            break
        case 'деление':
            alert(divisionFoo(a, b));
            break
    }
}
mathOperation(a, b, operation)