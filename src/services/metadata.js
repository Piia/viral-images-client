import axios from 'axios'

const groom = (data) => {
	let groomed = []
	groomed.push(data[0].images[0].link)
	groomed.push(data[1].images[0].link)
	groomed = data
				.filter(item => item.images && item.images[0].link)
				.map(item => item.images[0].link)
	return groomed
}

const getAll = () => {
	return axios.get('http://localhost:3004/data')
			.then(response => { return groom(response.data) })
			.catch(error => console.log("error in getAll in metadata"))
}

export default {getAll}