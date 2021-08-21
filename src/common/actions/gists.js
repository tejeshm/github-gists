import axios from 'axios';
import {getGithubGistsFromUsernameUrl} from './urls';

export const FETCHING_GISTS_BY_USERNAME = "FETCHING_GISTS_BY_USERNAME";
export const FETCHED_GISTS_BY_USERNAME = "FETCHED_GISTS_BY_USERNAME";
export const FAILED_FETCHING_GISTS_BY_USERNAME = "FAILED_FETCHING_GISTS_BY_USERNAME";
export const CLEAR_GISTS_DATA = "CLEAR_GISTS_DATA";
export const ADD_GIST_FORK = "ADD_GIST_FORK";

const MAX_PAGE_SIZE = 100;
const FORKS_PAGE_SIZE = 3;

export const getGistsByUsername = (userName) => {
    return (dispatch, getState) => {
        let state = getState();
        if (state.gists.username !== userName) {
            dispatch({type: CLEAR_GISTS_DATA});
            dispatch({type: FETCHING_GISTS_BY_USERNAME, payload: {username: userName}});

            let url = getGithubGistsFromUsernameUrl(userName);
            //TODO can implement pagination.
            axios.get(url, {params:{per_page: MAX_PAGE_SIZE}}).then(function (response) {
                    dispatch({type: FETCHED_GISTS_BY_USERNAME, payload: response.data});
                }
            ).catch(function (error) {
                dispatch({type: FAILED_FETCHING_GISTS_BY_USERNAME});
            })
        }
    }
};

export const getForkDetails = (gistId, forkUrl) => {
    return (dispatch) => {
        axios.get(forkUrl, {params:{per_page: FORKS_PAGE_SIZE}})
            .then( function (response){
                dispatch({ type: ADD_GIST_FORK, payload: {gistId: gistId, forkDetails: response.data} });
            }
        ).catch(function (error) {
            dispatch({ type: FAILED_FETCHING_GISTS_BY_USERNAME});
        })
    }
}

export const clearGistsData = ({
    type: CLEAR_GISTS_DATA
})