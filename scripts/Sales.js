export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    // Generate HTML for each sale
    let salesHTML = sales.map(sale => {
        const totalPrice = sale.entree.price + sale.vegetable.price + sale.side.price
        return `
        <div class="sale">
            <strong>Receipts #${sale.id}</strong>: $${totalPrice.toFixed(2)}<br>
        </div>
        `
    }).join("")

    return `
        <section class="sales">
            ${salesHTML}
        </section>
    `
}