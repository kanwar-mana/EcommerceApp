import { addValuetocart, cardvalueNo } from "./cardvalueNo";
import { toastcard } from "./toast";

const productTemplate = document.querySelector(".producttemplate");
const productContainer = document.querySelector("#productContainer");
//const bucket_cart = document.querySelector('#cartadd');
console.log(productTemplate);
//*****************For ProductQuantity************************ */

//*********************add dynamic product from apis************************************* */
export const showProductcontainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((currPro) => {

        const { brand, category, description, id, image, name, price, stock } = currPro;
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#card").setAttribute("id", `card${id}`);
        productClone.querySelector("#product-name").textContent = name;
        productClone.querySelector("#pro-computer").textContent = category;
        productClone.querySelector("#pro-images").src = image;
       // productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productActualPrice").textContent = `Rs ${price*4}`;
        productClone.querySelector("#product-name").textContent = name;

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
           cardvalueNo(event, id, stock);

        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addValuetocart(event, stock, id,image,name);
            toastcard("add",id);

        });

        //logic trugger when we click on our bucket


        productContainer.append(productClone);


    });

};
//************************Add value in the cart*******************************/