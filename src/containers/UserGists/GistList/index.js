import React from "react";
import PropTypes from 'prop-types';
import GistCard from '../GistCard'
import Lottie from 'react-lottie';
import loaderData from "./loader.json";

const GistList = (props) => {

    const {searched, list, loading, getFork} = props;

    /**
     * Conditionally decides what to show is the list area.
     * Shows loading screen or the List of gists or error message
     * @returns {JSX.Element}
     */
    const getContent = () => {

        if (loading) {
            return <div data-testid="loading" id="loading">
                <Lottie options= {{
                    loop: true,
                    autoplay: true,
                    animationData: loaderData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }}}
                        height={500}
                        width={500}
                />
            </div>
        }
        //If it is not  loading and searched then we have the response for the api call.
       if (searched && list.length === 0) {
            return <div data-testid="error" className="error"> Please check the username, there are no available gists with this username. </div>;
        } else if ( searched && list.length > 0) {
            return (<div data-testid="gist-list" className="gist-list">
                {
                    list.map((gist, index) => <GistCard gist={gist} key={index}
                                                     forks={props.forks[gist.id] ? props.forks[gist.id]: null}
                                                     getFork={getFork}/>)
                }
            </div>)
        }
    }

    return (
        <div className="list-container">
            {getContent()}
        </div>
    )
}

GistList.propTypes = {
    list: PropTypes.array,
    searched: PropTypes.bool.isRequired,
    hasError: PropTypes.bool,
    forks: PropTypes.array,
    getFork: PropTypes.func.isRequired
};

export default GistList;