import * as properties from '../components/listings/Listings'
// Initial State
const initialState = {
    properties:[],
    propertyName: ' ',
    propertyDescription: ' ',
    address: ' ',
    city: ' ',
    state: ' ',
    zip: ' ',
    imageURL: ' ',
    loanAmount: ' ',
    monthlyMortgage: ' ',
    desiredRent: ' ',
}


const GET_PROPERTIES = "GET_PROPERTIES";
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_PROPERTY_DESCRIPTION = "UPDATE_PROPERTY_DESCRIPTION";

// Reducer
function reducer(state = initialState, action){
    switch (action.type) {
        case GET_PROPERTIES:
            console.log("pending",action)
            return Object.assign({}, state,{properties:action.payload})
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state,{propertyName:action.payload})

        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state,{propertyDescription:action.payload})
        default: return state
    }
}

// Action Creator
export function getProperties(){
    return{
        type:GET_PROPERTIES,
        payload:properties.getProperties(),

    }
}

export function updatePropertyName(propertyName){
    return{
        type:UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}

export function updatePropertyDescription(propertyDescription){
    return{
        type:UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}

// Export Reducer
export default reducer;