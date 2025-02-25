import { updateCartvalue } from "./updateBucket";
export const getcartDataFromLS = () => {
    let cartProduct = localStorage.getItem('cartProductLS');
    if (!cartProduct) {
        return [];
    }
    cartProduct = JSON.parse(cartProduct);

    //update cart value in bucket
    updateCartvalue(cartProduct);
    return cartProduct;
}