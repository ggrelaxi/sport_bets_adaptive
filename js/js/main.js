const regularValidation=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,button0=document.getElementById("submitBtn0"),button1=document.getElementById("submitBtn1"),email0=document.getElementById("email0"),email1=document.getElementById("email1"),checkbox0=document.getElementById("checkbox0"),checkbox1=document.getElementById("checkbox1");email0.addEventListener("input",e=>isFormValid0(e.target.value)),email1.addEventListener("input",e=>isFormValid1(e.target.value)),checkbox0.addEventListener("click",e=>isFormValid0(email0.value)),checkbox1.addEventListener("click",e=>isFormValid1(email1.value));const isFormValid0=e=>{let t=regularValidation.test(String(e).toLowerCase());if(checkbox0.checked&&t)return button0.classList.add("able"),void(button0.disabled=!1);button0.disabled=!0,button0.classList.remove("able")},isFormValid1=e=>{let t=regularValidation.test(String(e).toLowerCase());if(checkbox1.checked&&t)return button1.classList.add("able"),void(button1.disabled=!1);button1.disabled=!0,button1.classList.remove("able")};
//# sourceMappingURL=main.js.map
