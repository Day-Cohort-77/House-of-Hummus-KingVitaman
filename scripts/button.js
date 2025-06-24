import { purchase } from "./TransientState.js"

const handleSubmission = async (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        await purchase()
    }
}

export const button = () => {
    document.addEventListener("click", handleSubmission)
    return `<button id="submission-button">Place Order</button>`
}