import { setVeggie } from "./TransientState.js"

export const Veggies = async () => {
    // Fetch veggies from your API
    const response = await fetch("http://localhost:8088/vegetables");
    const veggies = await response.json();

    // Generate radio buttons for each veggie
    const vegHTML = veggies.map(veggie => `
        <label>
            <input type="radio" name="veggie" value="${veggie.id}" class="veggie-radio" />
            ${veggie.type}
        </label>
    `).join("");

    document.addEventListener("change", (event) => {
        if (event.target.name === "veggie") {
            setVeggie(parseInt(event.target.value))
        }
    })

    return `
        <section class="veggies">
            <h2>Vegetables</h2>
            ${vegHTML}
        </section>
    `
}