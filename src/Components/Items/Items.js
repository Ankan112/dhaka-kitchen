
import './Items.css'

const Items = (props) => {
    const { name, img, time } = props.item
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Time {time}min</p>
            <button onClick={() => { props.handleAddToList(props.item) }}>Add To List</button>
        </div>
    );
};

export default Items;