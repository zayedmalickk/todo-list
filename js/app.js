const list = document.getElementById("list")
const input = document.getElementById("input")

// adding a new item
function addItem() {
    // looking whether the user has entered a value or not
    if (input.value === "" || input.value === " ") {
        alert("add a fuckin item bruh")
    }

    // create elements blah blah
    else {
        let item = document.createElement("li")
        item.classList.add("item")
        item.textContent = input.value


        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7"
        item.appendChild(cross)

        list.appendChild(item)
    }

    // changing the input value to default => blank 
    input.value = ""
    storeData()
}

// deleting an item or checking it
list.addEventListener("click", function(e) {
    // checking the item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check")
    }
    // deleting the item
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }

    storeData()
}, false)

// storage of items
function storeData() {
    localStorage.setItem("data", list.innerHTML)
}

// displaying items
function showData() {
    list.innerHTML = localStorage.getItem("data")
}
showData()