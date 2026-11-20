let products = [
    {
        productId: 897,
        product_name: "pen",
        price: 2536,
        stock: 8
    },

        {
        productId: 557,
        product_name: "light",
        price: 3695,
        stock: 10
    },
        {
        productId: 8797,
        product_name: "packet",
        price: 1200,
        stock: 5
    },
        {
        productId: 897,
        product_name: "mobile",
        price: 900,
        stock: 289
    },
        {
        productId: 8972187,
        product_name: "fan",
        price: 500,
        stock: 2387
    }
];

for(let pro of products){
    if(pro.price >1000){
        console.log(pro);
    }
}