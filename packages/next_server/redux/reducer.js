

export default function actions(initState = {},action) {
    switch (action.type) {
        case "DataLoaded":{
            console.log("payload",action.payload);
            return {...action.payload};}
            
        default:
            return initState;
    }
}