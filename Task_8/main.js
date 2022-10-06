
function actualPrice () {
    let price = parseInt(document.querySelector("#inputPrice").value);
    console.log(price);
    if (price < 0){
        document.getElementById("inputPrice").style.border = "1.5px solid #e84843";
        document.getElementById("cntPrice").innerHTML = "Please enter correct price!";
        document.getElementById("cntPrice").style.color = "#f7e3e1";
    }
    else if(price > 0) {
        document.getElementById("inputPrice").style.border = "1.5px solid #4ACE6A";
        document.getElementById("cntPrice").innerHTML = "Поточна ціна $: " + price;
        document.getElementById("cntPrice").style.color = "white";
    }
    return price;
}

function clearPrice (){
    document.getElementById("myForm").reset();
    const elem = document.getElementById("cntPrice");
    elem.remove();
}

