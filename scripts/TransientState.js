const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (entreeChoice) => {
    transientState.entreeId = entreeChoice;
}

export const setVegetable = (vegetableChoice) => {
    transientState.vegetableId = vegetableChoice;
}

export const setSide = (sideChoice) => {
    transientState.sideId = sideChoice;
}

export const purchase = async () => {

    const orderButton = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", orderButton)
    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)

}