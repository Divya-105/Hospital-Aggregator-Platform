import axios from "axios"

function CitySearch(){

    const search= async( query) => {
        return await axios.get('/citysearch=`${query}`');
    }
    return{search};
}


export default CitySearch;