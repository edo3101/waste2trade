import axios from 'axios'

export const fetchAllPartners = async () => {

    const response = await axios.get('http://localhost:3000/user/coffeeShops')
    return response.data
};
