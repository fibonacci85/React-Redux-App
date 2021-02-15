import axios from 'axios';

export const getJoke = () => dispatch => {
    dispatch({type:"FETCH_JOKE_START"})
    axios
        .get("https://geek-jokes.sameerkumar.website/api")
        .then((res) => {
            console.log(res.data)
            dispatch({type: "FETCH_JOKE_SUCCESS", payload:res.data})
            })
            .catch(err => {
            dispatch({type:"FETCH_JOKE_FAIL", payload:err});
            })  
}

