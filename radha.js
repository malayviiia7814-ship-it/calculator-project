let d=document.getElementById("display");
document.querySelectorAll("button").forEach(b=>b.onclick=()=>{
   d.value=b.innerText=="="?eval(d.value):b.innerText=="C"?"":d.value+b.innerText
});