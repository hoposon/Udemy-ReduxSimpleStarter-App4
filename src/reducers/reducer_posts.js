import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'; //import index.js - no name has to be specified

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state,  };
            // newState[post.id] = post;
            // return newState;
            // same as
            return { ...state, [action.payload.data.id] : action.payload.data }
        case DELETE_POST:
            return _.omit(state, action.payload); 
            // return NEW object without the key we want to omit.
            // Does not change the existing state
        default:
            return state;
    }
}