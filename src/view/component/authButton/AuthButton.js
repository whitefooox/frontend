import classes from './AuthButton.module.css'

function AuthButton(props){
    return (
        <div className={classes.button__container}>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export default AuthButton;