function load() {
    let texts = localStorage.getItem("localText");
    let textObj;
    if (texts == null) {
        textObj = [];
    } else {
        textObj = JSON.parse(texts)
    }
    textObj.forEach((item) => {
        add(item);
    })
}
function add(txt) {
    let btn = document.getElementById("btn").innerHTML;
    let li = document.createElement("li");
    let tik = document.createElement("span");
    let trash = document.createElement("span");
    let pen = document.createElement("span");
    let i = document.createElement("i");
    let ul = document.getElementById("myUl");
    tik.className = "unchecked";
    trash.className = "fas fa-trash-alt ";
    pen.className = "fas fa-pencil-alt"
    li.className = "fs-5";
    i.innerHTML = txt;
    li.appendChild(tik);
    li.appendChild(trash);
    li.appendChild(i);
    li.appendChild(pen);

    ul.insertBefore(li, ul.firstChild);
    document.getElementById('input').value = null;
    if (btn == "Change") {
        document.getElementById('btn').innerHTML = "ADD"
        document.getElementById('input').parentElement.style.boxShadow = "none"
    }
}
function crateLi() {
    let txt = document.getElementById('input').value;
    let input = document.getElementsByClassName('inputBox')[0];
    if (txt == "") {
        input.style.boxShadow = "0px 0px 11px 3px rgba(196,10,0,0.65)";
        document.getElementById("Warning").style.display="block"
        document.getElementById('input').focus();
    } else {
        input.style.boxShadow = "none";
        document.getElementById("Warning").style.display="none"
        add(txt);
    }

    let texts = localStorage.getItem("localText");
    let textObj;
    if (texts == null) {
        textObj = [];
    } else {
        textObj = JSON.parse(texts)
    }

    let txtOb = textObj.filter((item) => {
        return item;
    });
    console.log(txtOb)
    txtOb.unshift(txt);
    localStorage.setItem("localText", JSON.stringify(txtOb));
}

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        crateLi();
    }
});
document.onclick = e => {
    if (e.target.className == "fas fa-trash-alt ") {
        item = e.target;
        document.getElementById('wrap').style.display = "block";
    }
    if (e.target.className == "fas fa-pencil-alt") {
        document.getElementById('input').value = e.target.previousElementSibling.innerHTML;
        document.getElementById("btn").innerHTML = "Change";
        document.getElementById('input').focus();
        document.getElementById('input').parentElement.style.boxShadow = "0px 0px 11px 3px rgba(10,83,190,0.65)"
        e.target.parentNode.style.display = "none";
    }
    if (e.target.className == "fas fa-check-square checkedBox") {
        e.target.className = "unchecked";
        e.target.parentNode.className = "";

    } else if (e.target.className == "unchecked") {
        e.target.className = "fas fa-check-square checkedBox";
        e.target.parentNode.className = "fs-5 checked";
    }
}
function yes() {
    let it=item.nextElementSibling.innerHTML;
    delt(it);
    document.getElementById('wrap').style.display = "none";
    item.parentNode.style.display = "none";
}
function no() {
    document.getElementById('wrap').style.display = "none";
}

function delt (filter) {
    let texts = localStorage.getItem("localText");
    let textObj;
    if (texts == null) {
        textObj = [];
    } else {
        textObj = JSON.parse(texts)
    }
    let txtOb=textObj.filter((item)=> {
        return (item != filter);
    });
    localStorage.setItem("localText", JSON.stringify(txtOb));
}
