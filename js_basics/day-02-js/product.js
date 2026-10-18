const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 5000,
        category: "shoes",
        inStock: true
    },
    {
        id: 2,
        name: "Adidas Runner",
        price: 3500,
        category: "shoes",
        inStock: true
    },
    {
        id: 3,
        name: "Puma T-Shirt",
        price: 2000,
        category: "clothing",
        inStock: false
    },
    {
        id: 4,
        name: "Levi's Jeans",
        price: 4000,
        category: "clothing",
        inStock: true
    }
];

// 1. Print the name of the first product

// console.log(products[0].name);

// 2. Print name and price of every product

// products.forEach((product) => {
//     console.log(`${product.name} - ${product.price}`);
    
// })

// 3. Find the product whose ID is 3

// const product = products.find((product) => {
//     return product.id === 3
// })

// console.log(product);

// 4. Find the product named "Levi's Jeans"

// const product = products.find((product) => {
//     return product.name == "Levi's Jeans"
// })

// console.log(product);

// 5. Find all products whose price is greater than 3000

// const expensiveProduct = products.filter(product => {
//     return product.price > 3000;
// })

// console.log(expensiveProduct);

// 6. Find all products which are in stock

// const availableProducts = products.filter(product => {
//     return product.inStock === true;
// })

// console.log(availableProducts);

// 7. Remove product whose ID is 2

// const index = products.findIndex(product => product.id === 2);

// if(index !== -1){
//     products.splice(index, 1);
// }
// console.log(products);

// 8. Update Nike Air Max price to 5500

// const product = products.find(product => product.name === "Nike Air Max");

// if(product){
//     product.price = 5500;
// }
// console.log(product);


// 9. Add a rating property to every product

// products.forEach(product => {
//     product.rating = 4.5;
// });
// console.log(products);

// 10. Destructure the first product

// const {
//     name,
//     price,
//     category
// } = products[0];

// console.log(name);
// console.log(price);
// console.log(category);

// 11. Convert products array into JSON

// const jsonData = JSON.stringify(products);
// console.log(jsonData);

// 12. Convert JSON back to JavaScript object

// const jsonData = JSON.stringify(products);
// const newProducts = JSON.parse(jsonData);

// console.log(newProducts);
// console.log(typeof jsonData);
// console.log(typeof newProducts);

// 13. Create a new array containing only name and price

const productDetails = products.map((product) => {
    return {
        name : product.name,
        price : product.price
    };
})
console.log(productDetails);
