import React from "react";
import PropTypes from "prop-types";

export default function Profile(props)
{
    
    return (
        <>
            <p>Nom complet : {props.fullName}</p>
            <p>Ma bio : {props.bio}</p>
            <p>Profession : {props.profession}</p>
            <p>Image du jour : <img src={props.children} alt="ImageDuJour"/></p>
            <button className="btn btn-success" onClick={() => props.handleName("Je m'appelle " +props.fullName)}>Afficher le nom </button>
        </>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};

Profile.defaultProps = {
    fullName: "MyName",
    bio: "Biographie",
    profession: "Informaticien"
};

