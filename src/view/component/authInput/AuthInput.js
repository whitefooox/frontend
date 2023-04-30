import classes from './AuthInput.module.css'

function AuthInput(props){
    return (
        <div className={classes.input__container}>
          <label>{props.title}</label>
          <input type={props.type} onChange={(e) => props.getValue(e.target.value)} required />
        </div>
    )
}

export default AuthInput;