/** @format */
export const SETHEADERDATA = "SETHEADERDATA";

export const setHeaderData = (data) => {
  return {
    type: SETHEADERDATA,
    payload: data,
  };
};

const initialState = {
  setHeader: [],
}; //Initial state of the counter

const reducer = (state = initialState, action) => {
  // console.log(action.payload.data,"action")
  switch (action.type) {
    case SETHEADERDATA:
      return {
        setHeaderData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
