import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://survey-test-bui.firebaseio.com/'
});

export default instance;