import { getcartDataFromLS } from "./getcartData";
let total_value_text=document.querySelector("#sub_total_price");
let tota_price=document.querySelector("#total_price");
let tax_amount=document.querySelector("#tax_amount");
let tax=parseInt(tax_amount.textContent);


export function total_rs(){
    let localstorage=getcartDataFromLS();
    let total=0;
    let tota_price_final=0;

localstorage.forEach((curr_prd)=>{
    const{price}=curr_prd;
    total=total+price;
})
    total_value_text.textContent=Math.round(total*100)/100;
    tota_price_final=tax+total;
    tota_price.textContent=`Rs. ${Math.round(tota_price_final)}`;
    console.log(total);
}




