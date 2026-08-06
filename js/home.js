document.addEventListener("DOMContentLoaded",()=>{

const content=document.querySelector(".content");

setTimeout(()=>{

content.classList.remove("hidden");

content.classList.add("show");

},2000);

});