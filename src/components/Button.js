import './Button.css';

export function Button (props) {
    return (
        <button type='submit' style={props.style} className='button'>{props.text}</button>
    )
}