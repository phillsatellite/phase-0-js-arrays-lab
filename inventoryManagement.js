let products = ["Laptop", "Phone", "Headphones", "Monitor"];

//Function logs the first product within the products array
function logFirstProduct(){
  const firstProduct = products[0];
  console.log(firstProduct);
}

logFirstProduct(); //Should show Laptop for index 0

//Adds new product to the product array 
function addProduct(name){
  const newName = {
    name: name
  }
  products.push(newName);
}

addProduct("keyboard");
//Should show array wiht Keyboard added as well
console.log(products);

//Updates the name of the first index/product in the products array
function updateProductName(index, newName){
  products[index] = newName;
}

updateProductName(0, "Macbook");
//"Macbook" should appear for index 0
console.log(products); 

//Removes the last index(product) in the array(products)
function removeLastProduct(){
  products.pop();
}

removeLastProduct(products);
//"Keyboard should no longer appear in the array(products)
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
