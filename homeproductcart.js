const productTemplate = document.querySelector(".producttemplate");
const productContainer = document.querySelector("#productContainer");



export const showProductcontainer = (products) => {
    if (!products) {
        return false;
    }
    products.forEach((currPro) => {

        const { brand, category, description, id, image, name, price, stock } = currPro;
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#product-name").textContent = name;
        productClone.querySelector("#pro-computer").textContent = category;
        productClone.querySelector("#pro-images").src = image;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productActualPrice").textContent = `Rs ${price*4}`;
        productClone.querySelector("#product-name").textContent = name;
        productContainer.append(productClone);
    });
};