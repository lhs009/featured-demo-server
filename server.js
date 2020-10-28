const fs = require('fs');

const express = require('express');
const showdown = require('showdown');
const app = express();
const converter = new showdown.Converter();

app.use(express.static('public'));

function getReadMe(no) {
	//const fileName = './pjtno + '.md';
	let pNo = 0;
	if (no === '498') {
		pNo = 1;
	} else if (no === '499') {
		pNo = 2;
	} else if (no === '504') {
		pNo = 4;
		return pNo;
	} else {
		pNo = no;
	}

	console.log(no, pNo);
	const fileName = `./public/pjt${pNo}/readme.md`;
	console.log(fileName);
	const data = fs.readFileSync(fileName, 'utf8');
	console.log(data);
	return data;
}

app.get('/readme/:no', (req, res) => {
	// getReadMe(no);
	console.log('readme @@@@@@@@@@@@@@@@@@@@@');
	const no = req.params.no;
	console.log('no===>' + no);
	const data = getReadMe(no);
	console.log('data ###### => ' + data);
	if (data === 4) {
		return res.redirect('../pjt4/demolink.html');
	}

	res.send(converter.makeHtml(data));
});

app.listen(3000, () => {
	console.log('server is running.....');
});
