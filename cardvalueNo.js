import { getcartDataFromLS } from "./getcartData";
import { updateCartvalue } from "./updateBucket";
getcartDataFromLS();

export const cardvalueNo = (event, id, stock) => {
    const whichcard = document.querySelector(`#card${id}`);
    let Availstock = whichcard.querySelector(".productStock");
    const ProductQuantity = whichcard.querySelector(".productQuantity");
    let quantityvalue = parseInt(ProductQuantity.textContent);
    let stockleft = parseInt(Availstock.textContent);
    let ln = stock;
    if (event.target.className === "cartIn") {
        if (quantityvalue < stock) {
            quantityvalue++;
        } else if (quantityvalue = stock) {
            quantityvalue = stock;
        }
    };
    if (event.target.className === "cartout") {
        if (quantityvalue === 1) {
            return;
        }

        quantityvalue -= 1;

    };
    stockleft = ln - quantityvalue;
    ProductQuantity.textContent = quantityvalue;
    Availstock.textContent = stockleft;
    return quantityvalue;

};
/*******************Add value to cart************************ */

export const addValuetocart = (event, stock, id, image,name) => {

    //ge local storage data from function getcartData
    let localstorageData = getcartDataFromLS();

    //get price,quantity of current product
    let whichcard = document.querySelector(`#card${id}`);
    let price = whichcard.querySelector('.productPrice').innerText;
    let quantity = whichcard.querySelector('.productQuantity').innerText;
    

    price = price.replace("Rs", "");
    //console.log(price, quantity);

    let currPro = localstorageData.find((currp) => currp.id === id);
    if (currPro && quantity >= 1) {

        quantity = parseInt(currPro.quantity) + parseInt(quantity);
        price = Number(price * quantity);

        let updatedStorage = { id, price, quantity };
         updatedStorage = localstorageData.map((curr) => {
            return curr.id === id ? updatedStorage : curr;

        });
        localStorage.setItem("cartProductLS", JSON.stringify(updatedStorage));
        updateCartvalue(localstorageData);
    };
    if (currPro) {
        return false;
    };

    price = Number(price * quantity);
    console.log(price, quantity);

    localstorageData.push({ id, price, quantity });
    localStorage.setItem("cartProductLS", JSON.stringify(localstorageData));
    updateCartvalue(localstorageData);

};