function kom() {
    if (k1.value !="X" ){
        meno=document.getElementById("jmeno").value
        text=document.getElementById("texto").value
        output=document.getElementById("k1")
        localStorage.setItem("meno", meno);
        localStorage.setItem("text", text);
        output.textContent=(meno+":"+text);
        k1.value="X"
    }
    if (k1.value=="X"){
        meno2=document.getElementById("jmeno").value
        text2=document.getElementById("texto").value
        output2=document.getElementById("k2")
        localStorage.setItem("meno2", meno2);
        localStorage.setItem("text2", text2);
        output.textContent=(meno2+":"+text2);
        k2.value="X"
    }
    if (k2.value=="X"){
        meno3=document.getElementById("jmeno").value
        text3=document.getElementById("texto").value
        output3=document.getElementById("k3")
        localStorage.setItem("meno3", meno3);
        localStorage.setItem("text3", text3);
        output.textContent=(meno3+":"+text3);
        k3.value="X"
    }
    
}
function load(){
    output=document.getElementById("k1")
    meno=localStorage.getItem("meno");
    text=localStorage.getItem("text");
    output.textContent=(meno+":"+text);
    output2=document.getElementById("k2")
    meno2=localStorage.getItem("meno2");
    text2=localStorage.getItem("text2");
    output2.textContent=(meno2+":"+text2);
    output3=document.getElementById("k3")
    meno3=localStorage.getItem("meno3");
    text3=localStorage.getItem("text3");
    output3.textContent=(meno3+":"+text3);

}


