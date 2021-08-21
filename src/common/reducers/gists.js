import {FETCHING_GISTS_BY_USERNAME, FETCHED_GISTS_BY_USERNAME,
    FAILED_FETCHING_GISTS_BY_USERNAME, CLEAR_GISTS_DATA, ADD_GIST_FORK} from '../actions/gists';

let initialState = {
    gists: {username: '', fetching:false, success: false, failed: false, list:[] },
    forks:{}
};

const gists = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GISTS_BY_USERNAME:
            return { ...state, gists: { ...state.gists, username: action.payload.username, fetching: true, success: false, failed: false, list: []}};
        case FETCHED_GISTS_BY_USERNAME:
            return { ...state, gists: { ...state.gists, fetching: false, success: true, failed: false, list: action.payload}};
        case FAILED_FETCHING_GISTS_BY_USERNAME:
            return { ...state, gists: { ...state.gists, fetching: false, success: false, failed: true, list: []}};
        case ADD_GIST_FORK:
            return { ...state, forks: { ...state.forks, [action.payload.gistId]: action.payload.forkDetails}};
       case CLEAR_GISTS_DATA:
            return initialState;
        default:
            return state;
    }
};

export default gists;
