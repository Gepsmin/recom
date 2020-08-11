import  axios  from '../../../utils/axios';

export const BASE = 'https://cors-anywhere.herokuapp.com/';

export default function addUser(user){
    return axios.post(BASE+'https://b6k7tuuhrj.execute-api.eu-north-1.amazonaws.com/dev/', user);
}