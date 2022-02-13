export function changeMinNumber(newNumber: number) {
    return {
        type: 'NUM_MIN_CHANGE',
        payload: newNumber 
    }
}

export function changeMaxNumber(newNumber: number) {
    return { 
        type: 'NUM_MAX_CHANGE', 
        payload: newNumber
    }
}