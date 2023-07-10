import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const requestApi = async (value, page = 1) => {
    const response = await axios.get('', {
        params: {
            q: value,
            page,
            key: '36658431-70b367d2ef8581f2f498a1946',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12
        }
    });

    return response.data;
}