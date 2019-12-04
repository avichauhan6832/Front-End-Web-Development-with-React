import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
}