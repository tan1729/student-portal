document.querySelector(".form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    email = document.querySelector(".email").value;
    password =  document.querySelector(".password").value;

    if ( email == "lcs2022022@iiitl.ac.in" && password == "PRAKASH") {
       
        window.location.href = "htmlfile.html";
    } 
    else {
        alert("Invalid username or password");
        document.querySelector(".form").reset();
    }

}
