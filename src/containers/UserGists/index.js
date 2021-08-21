import React, {useCallback} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox';
import GistList from './GistList';
import {getGistsByUsername, getForkDetails} from '../../common/actions/gists'
import './userGists.css';

const UserGists = (props) => {

    const [gists, forks] = useSelector((state) => [state.gists, state.forks], shallowEqual);
    const dispatch = useDispatch();
    const getGists = useCallback(
        (username) => dispatch(getGistsByUsername(username)),
        [dispatch]
    )
    const getFork = useCallback(
        (gistId, forkUrl) => dispatch(getForkDetails(gistId, forkUrl)),
        [dispatch]
    )

    return (
            <div className="container m-5">
                <h2 className="text-center">Github Gists</h2>
                <div className="col-md-8 offset-md-2 p-5 ">
                    <SearchBox  onSearch={getGists}/>
                    <div className="search-result-container p-3">
                        <GistList list={gists.list} searched={!!gists.username.length} hasError={gists.failed}
                                  loading={gists.fetching} getFork={getFork} forks={forks}
                        />
                    </div>
                </div>
            </div>

    )
}

export default UserGists;