export const Sales = async function() {
    // Fetch purchases from your API
    const response = await fetch("http://localhost:8088/purchases")
    const purchases = await response.json()

    // Build the HTML string using a basic for loop
    let salesHTML = ""
    for (let i = 0; i < purchases.length; i++) {
        let purchase = purchases[i]
        let total = "N/A"
        if (typeof purchase.total === "number") {
            total = purchase.total.toFixed(2)
        }
        salesHTML += "<div>Receipt #" + purchase.id + " = $" + total + "</div>"
    }

    return (
        "<section>" +
            "<h2>Monthly Sales</h2>" +
            salesHTML +
        "</section>"
    )
}