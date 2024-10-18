import { useState } from "react"
import RenderingFast from "./RenderingFast"
import RenderingSecond from "./RenderingSecond"

export default function Rendering({ dataReceive }) {
    console.log(dataReceive);

    const renderingStyle = {
        border: '1px solid purple',
        borderRadius: '10px',
        marginTop: '20px'
    }

    const [status, setStatus] = useState(true)

    const handleConditionalRendering = () => {
        setStatus(!status)


    }

    return (
        <div style={renderingStyle}>
            <h2>Conditional Rendering</h2>
            {
                status ? <RenderingFast></RenderingFast> : <RenderingSecond></RenderingSecond>
            }
            <button onClick={handleConditionalRendering} style={{ margin: "20px" }}>Rendering</button>
            <button onClick={() => dataReceive('Pass Done')}>Data pass Child to parent</button>
        </div>
    )
}