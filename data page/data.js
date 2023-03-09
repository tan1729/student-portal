const greeting = document.querySelector('.name');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = 'D:\IIITL\WebDev Practice\WDAD Project\login.html\login.html';
    } else{
        document.getElementById("name").innerHTML = `${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}