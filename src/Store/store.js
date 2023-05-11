import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import VehicleReducer from './reducers/VehicleReducer';
import thunk from 'redux-thunk';


const loggerMiddleware = (store) => (next) => (action) => {
    let result = next(action);
    setTimeout(() => {
        console.log('dispatch time out');
    }, 5000);
    console.log('next state', store.getState());
    return result;
};


const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    vehicles: VehicleReducer
});

export const store = createStore(reducers, composeEnhancers(middleware));
