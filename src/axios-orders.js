import axios from 'axios';

const instance= axios.create({
    baseURL:'https://react-burger-project-cc565-default-rtdb.firebaseio.com/'
});

export default instance;