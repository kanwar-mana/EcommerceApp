import { getcartDataFromLS } from "./getcartData";
import { total_rs } from "./total_price";
import { updateCartvalue } from "./updateBucket";
import { updateBucketinWindow } from "./bucket";
import { toastcard } from "./toast";
export function remove_products(id){
    let localstorageData = getcartDataFromLS();

    localstorageData = localstorageData.filter((currremv) => currremv.id !== id);

    //Update the local storage after filter currid product 

    localStorage.setItem("cartProductLS", JSON.stringify(localstorageData));

    // Now remove div also as we click on button

    let remove_div=document.querySelector(`#card${id}`);

    if(remove_div){
        remove_div.remove();
        // Show toast after delete the cart product from cart 
        toastcard("delete",id);
    };

    updateCartvalue(localstorageData);
    total_rs();
};