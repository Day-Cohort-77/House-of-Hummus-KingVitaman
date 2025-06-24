import { FoodTruck } from "./FoodTruck.js"
import { purchase } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

// Attach the click listener ONCE here
mainContainer.addEventListener("click", async (event) => {
    if (event.target.id === "purchase") {
        await purchase()
        renderAllHTML()
    }
})

