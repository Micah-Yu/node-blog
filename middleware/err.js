module.exports = (err, req, res, next) => {
	let result = JSON.parse(err)
	let params = []

	for (let attr in result) {
		if (attr != 'path') {
			params.push(attr + '=' + result[attr])
		}
	}
	res.redirect(`${result.path}?${params.join('&')}`)
}
