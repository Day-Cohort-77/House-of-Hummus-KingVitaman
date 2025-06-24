import { setSide } from "./TransientState.js"

export const Sides = async () => {
    // Fetch sides from API
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    // Generate radio buttons for each side
    const sidesHTML = sides.map(side => `
        <label>
            <input type="radio" name="side" value="${side.id}" class="side-radio" />
            ${side.title}
        </label>
    `).join("")

    document.querySelectorAll(".side-radio").forEach(input => {
        input.addEventListener("change", (event) => {
            setSide(parseInt(event.target.value))
        })
    })

    return `
        <section class="sides">
            <h2>Side Dishes</h2>
            ${sidesHTML}
        </section>
    `
}