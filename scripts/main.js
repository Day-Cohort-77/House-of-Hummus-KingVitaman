import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

// Listen for the custom event and re-render when a new order is created
document.addEventListener("newOrderCreated", () => {
    renderAllHTML()
})