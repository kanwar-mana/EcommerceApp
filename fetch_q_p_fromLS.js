import {getcartDataFromLS} from "./getcartData";
export function fetchQuantity_price(id,price){
        let localstorageData = getcartDataFromLS();

        const existingProduct = localstorageData.find((currp) => currp.id === id);
let quantity=1;
        if(existingProduct){
            price=existingProduct.price;
            quantity=existingProduct.quantity;

        }
        return {price,quantity};
    }