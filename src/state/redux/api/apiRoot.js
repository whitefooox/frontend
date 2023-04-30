import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

function buildProvider(){
    return (props)=> {
        return (
            <ReduxProvider store = {store}>     
            {props.children}  
            </ReduxProvider>
        );
    };
}

export {
    buildProvider
}