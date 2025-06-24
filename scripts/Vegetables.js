import { setVeggie } from "./TransientState.js"

export const Veggies = async () => {
    // Fetch veggies from API
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()

    // Generate radio buttons for each veggie
    const vegetableHTML = veggies.map(veggie => `
        <label>
            <input type="radio" name="veggie" value="${veggie.id}" class="veggie-radio" />
            ${veggie.type}
        </label>
    `).join("")

    document.querySelectorAll(".veggie-radio").forEach(input => {
        input.addEventListener("change", (event) => {
            setVeggie(parseInt(event.target.value))
        })
    })

    return `
        <section class="vegetables">
            <h2>Vegetables</h2>
            ${vegetableHTML}
        </section>
    `
}