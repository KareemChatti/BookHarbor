import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/book/getAll');
        return response.data.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;
