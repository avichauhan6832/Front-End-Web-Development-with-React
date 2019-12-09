import {createStore, combineReducers} from 'redux';
import {Comments} from './comments';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Leaders} from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );

    return store;
}
