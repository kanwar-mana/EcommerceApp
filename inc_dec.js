import { getcartDataFromLS } from "./getcartData";
import { total_rs } from "./total_price";
export function incre_dec(event,stock,id,price){
    const whichcard=document.querySelector(`#card${id}`);
    let proquantity=whichcard.querySelector("#bucket_quantity");
    let proprice=whichcard.querySelector(".bucket_product_price");

    let quantity=1;
    let storageDataprice=0;

    let localstorageData=getcartDataFromLS();

    let excistingPro=localstorageData.find((curr_pr)=>curr_pr.id===id);
    if(excistingPro){
        quantity=excistingPro.quantity;
        storageDataprice=excistingPro.price;
    }
    else{
        storageDataprice=price;
        price=price;
    }

    if (event.target.className === "bucket_cartin") {
        if (quantity < stock) {
            quantity++;

        } else if (quantity = stock) {
            quantity = stock;
        }
    };

    if (event.target.className === "bucket_cartout") {
        if (quantity === 1) {
            return;
        }

        quantity -= 1;

    };
    storageDataprice=price*quantity;
    proprice.textContent=Math.round(storageDataprice*100)/100;
    proquantity.textContent=quantity;
    console.log(storageDataprice);

    let updatedCart={id,price: Math.round(storageDataprice*100)/100,quantity};
    updatedCart=localstorageData.map((curr_cart)=>{
        return curr_cart.id===id ? updatedCart : curr_cart;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    total_rs();

}