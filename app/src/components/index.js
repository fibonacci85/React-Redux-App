import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';


const Jokes = ({joke, isFetching, error, getJoke}) => {
    useEffect(() => {
    });

    const handleClick = () => {
       getJoke();
    }

    console.log(error)

    if (error) {
        return <h2>We got an error on our hands:</h2>
    }
    if (isFetching) {
        return <h2>Loading Joke...</h2>
    }
    return(
        <>
        <h1>Chuck Norris <br/> for President</h1>
        <button onClick={handleClick}>Learn More</button>
        <h3>{joke}</h3>
        </>
    )
}

const mapStateToProps = state => {
        console.log(state.data)
        console.log(state.isFetching)
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getJoke})(Jokes)