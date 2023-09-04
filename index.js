const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1375534f15msh837c1eab89c92f1p192f3fjsn68c2f76f00ca',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}