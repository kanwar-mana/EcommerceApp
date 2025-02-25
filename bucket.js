import products from "./api/products.json";
import { getcartDataFromLS } from "./getcartData";
import { fetchQuantity_price } from "./fetch_q_p_fromLS";
import { total_rs } from "./total_price";
import { remove_products } from "./remove_product";
import { incre_dec } from "./inc_dec";


export function updateBucketinWindow(){

    let storage_data= getcartDataFromLS();


console.log(products);
console.log(storage_data);
const bucket_container=document.querySelector("#bucket_container");
const bucketTemplate=document.querySelector(".products_in_bucket");

let bkt_pro=products.filter((curr_pro)=>{
    return storage_data.some((curr_ele)=>curr_ele.id===curr_pro.id);
});
console.log(bkt_pro);

let total=0;

    bkt_pro.forEach((curr_bkt)=>{
        const{id,name,image,stock,category,price}=curr_bkt;

        let updatedValues=fetchQuantity_price(id,price);

        const bkt_pro1=document.importNode(bucketTemplate.content,true);

        bkt_pro1.querySelector("#bucket_type").textContent=category;
        bkt_pro1.querySelector("#card_template").setAttribute("id",`card${id}`);
        bkt_pro1.querySelector("#bkt_img1").src = image ;
        bkt_pro1.querySelector(".bucket_product_name").textContent=name;
        bkt_pro1.querySelector(".bucket_product_price").textContent=`Rs. ${updatedValues.price}`;
        bkt_pro1.querySelector("#bucket_quantity").textContent=updatedValues.quantity;

        bkt_pro1.querySelector(".bucket_sum").addEventListener("click",(event)=>{
            incre_dec(event,stock,id,price);
        });

        bkt_pro1.querySelector("#bkt_rmv_btn").addEventListener("click",()=>{
        remove_products(id,total);
        });

        bucket_container.append(bkt_pro1);

        
    })
    total_rs();
    

}

updateBucketinWindow();
    

