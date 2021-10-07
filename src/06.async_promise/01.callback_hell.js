// The Callback Hell demo code

function findMyName() {
	setTimeout(() => {
		console.log('access database to find my name')
	}, 2000);
	return 'Tim'
}

function printName(name) {
	console.log('print my name: ' + name)
	return true
}

function sayMyName() {
	setTimeout(() => {
		let myname = findMyName()
		if (myname !== "") {
			setTimeout(() => {
				let result = printName(myname)
				if (result) {
					console.log('success')
				}
			}, 2000)
		} else {
			throw new Error('Can not get your name')
		}
	}, 2000);

}


// 
sayMyName()