import axios from "axios"
const url = 'https://randomuser.me/api/?results=50';



export default {
    ApiSearch: function () {
        return axios.get(url)

    }
}