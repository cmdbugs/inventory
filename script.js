const input = document.querySelector("item");
const button = document.querySelector("#btn");
const orderList = document.querySelector("ul")


function addItem(e) {
    e.preventDefault();

    const newItem = document.getElementById("item").value;


    const list = document.createElement("p");
    // console.log("1")
    list.style.padding = "0px";
    list.style.marginTop = "20px"
    list.style.listStyleType = "none"
    list.style.textAlign = "left"
    list.style.padding = "10px "
    list.style.border = "1px solid silver";
    list.style.display = "flex";
    list.style.justifyContent = "flex-start"
    list.style.alignItems = "center";
    list.style.fontWeight = "500"
    // list.style.color = "white"
    // list.style.gap = "100px"

    list.appendChild(document.createTextNode(newItem))

    // list.value = ""

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "Delete"
    deletBtn.style.marginLeft = "100px"
    deletBtn.style.padding = "5px 10px"
    deletBtn.style.marginLeft = "auto"
    deletBtn.style.fontWeight = "900"
    // deletBtn.style.backgroundColor = "red"
    // deletBtn.style.color = "white"
    // deletBtn.style.border = "1px solid red"

    list.appendChild(deletBtn)

    orderList.appendChild(list)
    orderList.style.fontWeight = "600"

        // input.value = "";

    deletBtn.addEventListener("click", function () {
        list.remove()
    })


}


button.addEventListener("click", addItem)