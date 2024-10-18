export default function Product({ person }) {
    const { name, phone } = person;

    return (
        <div style={{ border: '1px solid yellow', borderRadius: '10px' }}>
            <h3>This is Third Components</h3>
            <h4>Parent to chid data pass Name: {name} Phone: {phone}</h4>
        </div>
    )
}