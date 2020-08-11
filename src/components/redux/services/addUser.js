import  axios  from '../../../utils/axios';

export default function addUser(user){
    return axios.post('https://b6k7tuuhrj.execute-api.eu-north-1.amazonaws.com/dev/', user);
}