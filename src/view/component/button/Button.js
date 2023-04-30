import classes from './Button.module.css'

function Button(props){
    return (
        <div className={classes.button__container}>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button;