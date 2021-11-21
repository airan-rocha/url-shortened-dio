const user = ''
const password = ''
const db = ''

export const config = {
	API_URL: 'http://localhost:5000',
	MONGO_CONNECTION:
		`mongodb+srv://${user}:${password}@${db}.psusb.mongodb.net/urlCurto?retryWrites=true&w=majority`,
}