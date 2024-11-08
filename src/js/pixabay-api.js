const API_KEY = '46966788-e70827204bebbcb7a27eabe68';
const BASE_URL = 'https://pixabay.com/api/';


export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.hits;
        })
        .catch(error => {
            console.error('Error fetching images', error);
            return [];
        });
}

