import React from "react";
import PropTypes from 'prop-types';
import './GistCard.css';

/**
 *  Card component which shows the details of each gists of the user.
 *  Contains the description and link to the gist, languages used in the files , creation date and
 *  option to see the last 3 forks of the gist
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const GistCard = (props) => {
    const {gist, forks} = props;

    /**
     * Returns the Languages as tags for a file list of a Gist
     * @param files gist.files
     * @returns {*[]} HTML
     */
    const getLanguageTags = (files) => {
        let tags = [];
        for (let key in files) {
            tags.push(<span key={key} className="badge rounded-pill bg-secondary me-2">{files[key].language}</span>)
        }
        return tags;
    }

    /**
     * Make the api call to get the Forks of the gist if it is not already loaded
     */
    const showFormDetails = () => {
        if (!forks) {
            props.getFork(gist.id, gist.forks_url);
        }
    }

    /**
     * Loop through list of forks for a gist and render the list of last 3 users along with Avatars
     * @returns {JSX.Element|unknown[]}
     */
    const getForkDetails = () => {
        if (forks) {
            if (forks.length) {
                return forks.map((fork, index) => (
                        <div key={index} className="me-2">
                            <a className="fork-link" href={fork.owner.html_url} target="_blank" rel="noreferrer">
                                <img className="avatar-image me-2" src={fork.owner.avatar_url} width="20px" alt=""/>
                                {fork.owner.login}
                            </a>
                        </div>
                    )
                )
            } else {
                return ( <div  className="me-2 sub-text">
                    0 forks
                </div>)
            }
        }
    }

    /**
     * Converts ISO date formate to mm-dd-yyyy
     * TODO move to common function
     * @param gistDate ISO date
     * @returns {string} date dd-mm-yyyy
     */
    const parseISODate = (gistDate) => {
        let date = new Date(gistDate);
        date.toLocaleDateString('en-GB');
        return date.getDate()+'-' + (date.getMonth()+1) + '-'+date.getFullYear()
    }

    return (
            <section className="gist-card">
                <div className="row p-2">
                    <div className="col-md-9 p-2 gist-card-left">
                        <a href={gist.html_url} target='_blank' className="no-decoration" rel="noreferrer">
                            <h3 className="card-title">
                                {gist.description?.length ?gist.description: "No description" }
                            </h3>
                        </a>
                        <div className="my-4">{getLanguageTags(gist.files)}</div>
                        <div className="sub-text">Created on {parseISODate(gist.created_at)}</div>
                    </div>
                    <div className="col-md-3 p-2  fork-column">
                        <div>
                            {!forks && <span  className="no-decoration fork-link" onClick={showFormDetails}> Show forks </span>}
                            <div className="fork-list">
                                {getForkDetails()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

GistCard.propTypes = {
    gist: PropTypes.object.isRequired,
    forks: PropTypes.array,
    getFork: PropTypes.func.isRequired
};

export default GistCard;