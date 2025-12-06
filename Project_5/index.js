let items = [];

const itemsDiv = document.getElementById("items")

function renderItems() {
    itemsDiv.innerHTML = null;
    
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.textContent = item;

        const button = document.createElement("button")

        itemsDiv.appendChild(text)
    }
}

function loadItems() {}

function saveItem() {}

function addItem() {}

function removeItem() {}