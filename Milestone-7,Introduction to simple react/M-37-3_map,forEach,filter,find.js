const digitalProducts = [
  { name: "phone", brand: "samsung", price: 40000, color: "grey" },
  { name: "phone", brand: "Iphone", price: 200000, color: "bluish" },
  { name: "laptop", brand: "lenovo", price: 88000, color: "silver" },
  { name: "smartwatch", brand: "samsung", price: 40000, color: "grey" },
];

const products = digitalProducts.map((product) => product.brand);
console.log("The products are from map() ", products);

digitalProducts.forEach((product) => console.log(product.price));

const productPrice = digitalProducts.filter((product) => product.price > 40000);
console.log("Product found from Filter", productPrice);

const productPriceFind = digitalProducts.find(
  (product) => product.price > 40000,
);
console.log("product found from find", productPriceFind);
