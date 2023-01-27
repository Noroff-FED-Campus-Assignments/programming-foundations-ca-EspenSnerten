const phone = {
    brand: "Apple",
    modelNr: ["A2172", "A2402", "A2403", "A2404"],
    modelName: "iPhone 12",
    releaseYear: 2020,
    colors: ["black", "blue", "purple", "red", "green", "white"],
    onSale: false,
    sale: function () {
        phone.onSale = !phone.onSale;
    },
};

// to check if my function is working.
phone.sale();
console.log(phone.onSale);