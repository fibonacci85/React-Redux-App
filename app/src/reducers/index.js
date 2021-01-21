
const initialState = {
    isFetching: false,
    joke: "",
    error: ""

};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case("FETCH_JOKE_START"):
          return({
              ...state,
              isFetching: true,
              joke: "",
              error:""
          });
        case("FETCH_JOKE_SUCCESS"):
          return({
              ...state,
              isFetching: false,
              joke: action.payload,
              error:""
          });
        case("FETCH_JOKE_FAIL"):
          return({
              ...state,
              isFetching: false,
              joke: "",
              error:action.payload
          });
    default:
        return state;
}
};