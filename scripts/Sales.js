export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=veg&_expand=side").then(res => res.json())

    // Generate HTML for each sale
    let salesHTML = sales.map(sale => {
        const totalPrice = (sale.entree?.price || 0) + (sale.veg?.price || 0) + (sale.side?.price || 0)
        return `
        <div class="sale">
            <strong>Purchase #${sale.id}</strong>: $${totalPrice.toFixed(2)}<br>
        </div>
        `
    }).join("")

    return `
        <section class="sales">
            <h2>Previous Purchases</h2>
            ${salesHTML}
        </section>
    `
}