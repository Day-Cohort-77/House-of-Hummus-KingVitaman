const transientState = {
    entreeId: 0,
    veggieId: 0,
    sideId: 0
}

export const setEntree = (entreeChoice) => {
    transientState.entreeId = entreeChoice;
}

export const setVeggie = (veggieChoice) => {
    transientState.veggieId = veggieChoice;
}

export const setSide = (sideChoice) => {
    transientState.sideId = sideChoice;
}

export const purchase = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}

export function getTransientState() {
    return { ...transientState }
}