import { purchase } from "./TransientState.js"

const handleOrderSubmission = (clickEvent) => {
   if (clickEvent.target.id === "purchase") {
       purchase();
   }
}

export const button = () => {
    document.addEventListener("click", handleOrderSubmission)
    return `<button id="purchase">Purchase Combo</button>`
}