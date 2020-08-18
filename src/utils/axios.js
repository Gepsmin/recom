import axios from 'axios';

const instance = axios.create({
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Access-Control-Allow-Origin'] = '*';
instance.defaults.timeout = 10000;

export default instance;