import { setEntree } from "./TransientState.js";
export const Entrees = async () => {
    // Fetch entrees from your API
    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();

    // Generate radio buttons for each entree
    const entreesHTML = entrees.map(entree => `
        <label>
            <input type="radio" name="entree" value="${entree.id}" />
            ${entree.name}
        </label>
    `).join("");
    document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntree(parseInt(event.target.value))
    }
})
    // Return the HTML string
    return `
        <section class="entrees">
            <h2>Base Dishes</h2>
            ${entreesHTML}
        </section>
    `;
}