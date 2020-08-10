import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger007.firebaseio.com/'
});

export default instance;