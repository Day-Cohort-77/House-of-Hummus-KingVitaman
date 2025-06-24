import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { button } from "./button.js"

export const FoodTruck = async () => {
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <section class="choices">
            <div class="options">${entreesHTML}</div>
            <div class="options">${veggiesHTML}</div>
            <div class="options">${sidesHTML}</div>
        </section>

        <article>
            ${button()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `
}
