import './App.css';

function App(props){
    return (
        <div className="app__wrapper">{props.children}</div>
    )
}

export default App