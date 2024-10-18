import Product from "./product/product";

export default function Products({ people }) {

    return (
        <div style={{ border: '2px solid green', borderRadius: '10px', padding: '20px' }}>
            <h2>This is second Components</h2>
            <Product person={people}></Product>

        </div>
    )
}