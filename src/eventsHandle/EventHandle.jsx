import { useEffect, useState } from "react"

export default function EventHandle() {
    const handleStyle = {
        border: '1px solid white',
        borderRadius: '10px',
        marginTop: '20px'
    }

    const [state, setState] = useState(0);

    useEffect(() => {
        console.log('UseEffect code run');

    }, [state])

    const handleAddEvents = () => {
        setState(state + 1)
    }

    const handleMinusEvents = () => {
        setState(state - 1)
    }

    return (
        <div style={handleStyle}>
            <h2>Handle The number Count {state}</h2>
            <h3>UseEfect</h3>
            <button onClick={handleAddEvents} style={{ margin: "20px" }}>Event add</button>
            <button onClick={handleMinusEvents}>Event Minus</button>

        </div>
    )
}