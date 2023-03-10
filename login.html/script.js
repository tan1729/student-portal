$(document).ready(function(){
    $(".togglebtn").click(function(){
        $(".toggle").slideToggle();
    });

    $(".togglebtn").click(function(){
        $(".togglebtn").toggleClass("active");
    });
});
function addNew()
{
    console.log("Adding new field")
    let newNode1=document.createElement("textarea")
    newNode1.classList.add('form-control')
    newNode1.classList.add('ntsf')
    newNode1.classList.add('mt-1')
    newNode1.setAttribute("rows",2)
    newNode1.setAttribute("placeholder","Enter here")
    newNode1.setAttribute("id","ta")
    newNode1.setAttribute("style","background:rgba(255, 255, 255, 0.068);backdrop-filter: blur(5px);padding: 4px; border:none")

    let ntsOb=document.getElementById("nts")
    let ntsAddButtonOb=document.getElementById("ntsAddButton")
    
    ntsOb.insertBefore(newNode1 , ntsAddButtonOb)
}

const weekDay = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"];
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatTime(val)
{
    if(val<10){return "0";}
    else{ return "";}
}

function clockTime()
{
    console.log("Entered into clock function");
    const d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    document.getElementById("dow").innerHTML = weekDay[d.getDay()];
    document.getElementById("mth").innerHTML = monthName[d.getMonth()];
    document.getElementById("dy").innerHTML = d.getDate();
    console.log(d.getDate());
    time = formatTime(h) + h + ":" + formatTime(m) + m;
    ampmv= h >= 12 ? 'PM' : 'AM';
    document.getElementById("sc").innerHTML = formatTime(s) + s;
    document.getElementById("apm").innerHTML = ampmv;
    document.getElementById("tm").innerHTML = time ;
}
setInterval(clockTime,1000);