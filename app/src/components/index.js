import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';


const Jokes = ({joke, isFetching, error, getJoke}) => {
    useEffect(() => {
    });

    console.log(getJoke())
    
    const handleClick = () => {
        getJoke()
    }

    if (error) {
        return <h2>We got an error on our hands:</h2>
    }
    if (isFetching) {
        return <h2>Loading Joke...</h2>
    }
    return(
        <>
        <h2>NERD JOKES! {joke}</h2>
        <button onClick={handleClick}>Get new joke</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getJoke})(Jokes)