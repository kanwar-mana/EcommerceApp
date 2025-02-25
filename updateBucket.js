const bucket_value = document.querySelector("#cartadd-p");
export const updateCartvalue = (storage_data) => {
      //  storage_data.pop();
      //console.log(storage_data);
    bucket_value.textContent = storage_data.length;

};