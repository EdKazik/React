import './style.css';

const Card = (props) => {
    // console.log(props, +props.age);
    return (
        <div className='card'>
            {props.profile}: {props.name}; age: {props.age}
        </div>
    )
};


export default Card;


