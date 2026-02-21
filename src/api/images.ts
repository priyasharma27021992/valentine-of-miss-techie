import axios from 'axios';

//one single AxiosInstance
const axiosClient = axios.create({
	baseURL: 'https://api.unsplash.com/',
});

export async function getRandomImage() {
	console.log('baby', import.meta.env.VITE_CLIENT_ACCESS_KEY);
	try {
		const response = await axiosClient({
			url: `/photos/random?client_id=${import.meta.env.VITE_CLIENT_ACCESS_KEY}`,
			method: 'get',
		});
		console.log('response', response);
		return [null, response.data];
	} catch (error) {
		return [error];
	}
}
