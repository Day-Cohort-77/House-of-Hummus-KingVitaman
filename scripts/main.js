import { FoodTruck } from "./FoodTruck.js"
import { purchase } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

mainContainer.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        purchase()
    }
})


