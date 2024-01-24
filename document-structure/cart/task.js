const quantDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const quantInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const addBtns = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

// уменьшение кол-ва
quantDec.forEach(el => {
    el.addEventListener('click', () => {
        if (el.nextElementSibling.textContent > 0) {
            el.nextElementSibling.textContent--;
        }
    })
})

// увеличение кол-ва
quantInc.forEach(el => {
    el.addEventListener('click', () => {
        el.previousElementSibling.textContent++;
    })
}) 

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        if (Number(product.querySelector('.product__quantity-value').textContent) > 0) {
            const itemAttr = product.getAttribute("data-id");
            const itemInCart = cartProducts.querySelector(`[data-id="${itemAttr}"]`);
            const itemsToAdd = product.querySelector('.product__quantity-value').textContent;
            // если товар уже есть в корзине, увеличиваем кол-во
            if (itemInCart) {
                const itemInCartQuant = Number(itemInCart.querySelector('.cart__product-count').textContent);
                itemInCart.querySelector('.cart__product-count').textContent = itemInCartQuant + Number(itemsToAdd);
            // если товара нет, добавляем в корзину
            } else {
                // создание основного div для добавляемого продукта
                let itemInCart = document.createElement('div');
                itemInCart.classList.add('cart__product');
                itemInCart.setAttribute('data-id', itemAttr);
                // добавление элемента с изображением
                itemInCart.innerHTML += `<img class="cart__product-image" src="${product.querySelector('.product__image').src}">`;
                // добавление элемента с количеством товара
                itemInCart.innerHTML += `<div class="cart__product-count">${itemsToAdd}</div>`;
                cartProducts.insertAdjacentElement("beforeend", itemInCart);
            }
        }
    })
})



