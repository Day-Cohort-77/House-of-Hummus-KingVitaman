export const Sales = async () => {
    // Fetch purchases from your API
    const response = await fetch("http://localhost:8088/purchases")
    const purchases = await response.json()

    // Generate HTML for each purchase
    const salesHTML = purchases.map(purchase => `
        <div class="sale">
            <strong>Purchase #${purchase.id}</strong>: $${purchase.total.toFixed(2)}
        </div>
    `).join("")

    return `
        <section class="sales">
            <h2>Previous Purchases</h2>
            ${salesHTML}
        </section>
    `
}