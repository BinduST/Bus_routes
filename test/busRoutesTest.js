var fs = require('fs');
fs.readFile('../data/All_Routes_By_Number.txt','utf-8',function (err,data) {
	if(err)	throw err;
	console.log(data);
});