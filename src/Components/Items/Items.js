
import './Items.css'

const Items = (props) => {
    const { name, img, time } = props.item
    return (
        <div className='item-card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Time: {time}min</p>
            <button id='btn' onClick={() => { props.handleAddToList(props.item) }}>Add To List</button>
        </div>
    );
};

export default Items;