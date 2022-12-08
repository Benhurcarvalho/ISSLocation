const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
    errorMenssage: null,
    isLoading: false,
}

const ISSLocationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
};

export default ISSLocationReducer;