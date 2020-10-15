//задание 2
class Product {
    constructor(name, desc, count, price) {
        this.name = name;
        this.desc = desc;
        this.count = count;
        this.price = price;
    }
    getPrice() {
        return this.count * this.price;
    }

}

class Basket {
    constructor() {
        this.products = []
    }
    addToBasket(product) {
        this.products.push(product);
    }

    getPrice() {
        return this.products.reduce((acc, product) => {
            return acc + product.getPrice();
        }, 0);
    }

    allProduct() {
        if (this.products == 0) {
            return ('Корзина пуста')
        }
        else {
            return ('В корзине: ' + this.products.length + ' товара на сумму ' + this.getPrice() + ' рублей.');
        }

    }

}
const basket = new Basket();

basket.addToBasket(new Product('wok', 'лапша с курицей и овощами', 1, 300));
basket.addToBasket(new Product('bao', 'булочка на пару с тофу и чукой', 2, 160));
basket.addToBasket(new Product('bibimbab', 'рис с начинками, вег.', 1, 350));
basket.addToBasket(new Product('kombucha', 'напиток на основе чайного гриба', 2, 150));

const h1 = document.createElement('h1');
h1.innerHTML = 'Ваши покупки';
basket_full.appendChild(h1);

const div = document.createElement('div');
div.id = 'final';
basket_full.appendChild(div);

document.getElementById('final').innerHTML = basket.allProduct();
