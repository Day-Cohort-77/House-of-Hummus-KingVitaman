import { purchase } from "./TransientState.js"

const handleSubmission = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        await purchase(clickEvent.target.value)
    }
}

export const button = () => {
    document.addEventListener("click", handleSubmission)
    return `<button id="purchase">Purchase Combo</button>`
}