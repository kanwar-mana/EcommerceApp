export function toastcard(operation,id){

    var toast = document.querySelector(".toast");
    var toastred = document.querySelector(".toastred");
    var close = document.querySelector(".toast-close");
    var progress = document.querySelector(".progress");
    var progressred = document.querySelector(".progressred");

    if(operation==="add"){
        document.querySelector(".text-2").innerText=`Product with id ${id} has been added`;
        toast.classList.add("active");
      progress.classList.add("active");
    
      setTimeout(() =>{
        toast.classList.remove("active");
      }, 5000)
    
      setTimeout(() =>{
        progress.classList.remove("active");
      }, 5300)
    }
    else{
        document.querySelector(".text-2").innerText=`Product with id ${id} has been removed`;
        toastred.classList.add("active");
      progressred.classList.add("active");
    
      setTimeout(() =>{
        toastred.classList.remove("active");
      }, 5000)
    
      setTimeout(() =>{
        progressred.classList.remove("active");
      }, 5300)
    }
    
    
    close.addEventListener("click", () =>{
      toast.classList.remove("active");
    
      setTimeout(() =>{
        progress.classList.remove("active");
      }, 300)
    })



    
}