const pass = document.getElementById("password")
const check = document.getElementById("toggle")
const marker = document.querySelector(".marker")

check.addEventListener('change', (e) => {
    if(e.target.checked){
        pass.setAttribute("type", "text");
        marker.textContent = "show";
    }
    else{
        pass.setAttribute("type", "password");
        marker.textContent = "hide";
    }
});
