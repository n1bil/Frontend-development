const shoppingCard = {
    items: [],                                                          // array goods  |   item => name, price, quantity
    totalPrice: 0,                                                      // total price all products
    addItem(item) {
        const existingItem = this.items.find(
            (element) => element.name === item.name
        );                                                              // find item wardrobe
        if (existingItem) {// if exists
            existingItem.quantity += item.quantity;                     // add quantity
            existingItem.price =existingItem.price < item.price         // add new price if new price is higher
                    ? item.price
                    : existingItem.price;                               // or remain old price
        } else {
            this.items.push(item);                                      // if it doesn't exist then add new item
        }
        this.updateTotalPrice();
    },
    removeItem(itemName) {
        const index = this.items.findIndex(
            (element) => element.name === itemName
        );                                                              // find index element if it exists
        if (index != -1) {                                              // if the index element is found
            this.items.splice(index, 1);                                // then delete element by getting index
            this.updateTotalPrice();
        }
    },
    updateTotalPrice() {
        this.totalPrice = this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    },
};

// const add = document.getElementById('add');
add.onclick = addHandler;
stats.onclick = statsHandler;

function statsHandler() {
    const lengthItems = shoppingCard.items.length;
    const totalSum = shoppingCard.totalPrice;
    let allProducts = 0;
    let maxPrice = 0;
    let minPrice = Number.MAX_VALUE;
    shoppingCard.items.forEach((item) => {
        allProducts += item.quantity;
        if (maxPrice < item.price) {
            maxPrice = item.price;
        }
        if (minPrice > item.price) {
            minPrice = item.price;
        }
    });
    let averagePrice = totalSum / allProducts;

    const li = document.createElement("li");
    li.textContent = `
        Amount position: ${lengthItems},
        Total sum: ${totalSum},
        Total products: ${allProducts},
        Max price: ${maxPrice},
        Min price: ${minPrice},
        Average price: ${averagePrice}
    `;
    ourStats.appendChild(li);
}


function addHandler() {
    shoppingCard.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim(),
    });

    productList.innerHTML = "";

    shoppingCard.items.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Quantity of products: ${e.quantity},
        `;
        productList.appendChild(li);
    });
}
