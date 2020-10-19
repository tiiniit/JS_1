let buy = document.querySelectorAll(".buy");
let basketWindow = document.querySelector('.basket-window');

buy.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let idProduct = event.target.dataset.id;
        let nameProduct = event.target.dataset.name;
        let priceProduct = Number(event.target.dataset.price);
        basket.addProduct(idProduct, nameProduct, priceProduct);

    })
});

let cleaner = document.querySelector('.cleaner');
cleaner.addEventListener('click', function () {
    basket.cleanAll();
});

let basket = {
    totalPrice: 0,
    count: 0,
    addProduct(idProduct, nameProduct, priceProduct) {
        ++this.count;
        this.sum(priceProduct);
        let basketLine = `<tr class="productLine" data-id='${this.count}'>
        <td>${idProduct}</td>
        <td>${nameProduct}</td>
        <td>${priceProduct}</td>
        <td><button class="removeBtn" data-id='${this.count}'>удалить</button></td>
        </tr>`
        basketWindow.insertAdjacentHTML("beforeend", basketLine);
        let removeButtons = document.querySelectorAll(".removeBtn");
        removeButtons.forEach(function (removeButton) {
            removeButton.addEventListener('click', function (event) {
                basket.removeProduct(event);
            });

        })
    },

    cleanAll() {
        basketWindow.innerHTML = `<table class="basket-window"><tr>
                <td>Id</td>
                <td>Название</td>
                <td>Цена</td>
            </tr>
            <tr>
                    <td>Итого:</td>
                    <td class="basket_full">0</td>
                    <td>руб.</td>
                </tr>
            </table>`;
        this.totalPrice = 0;
    },

    removeProduct(event) {
        let productLines = document.querySelectorAll(".productLine");

        productLines.forEach(function (productLine) {
            if (productLine.dataset.id === event.target.dataset.id) {
                basket.del(Number(productLine.childNodes[5].innerHTML));
                productLine.remove();
            };
        });
    },

    sum(price) {
        this.totalPrice += price;
        document.querySelector('.basket_full').innerHTML = this.totalPrice;
    },

    del(price) {
        this.totalPrice -= price;
        document.querySelector('.basket_full').innerHTML = this.totalPrice;
    },

}






