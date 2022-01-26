let ageEl = document.getElementById("age");

setInterval(() => {
	var d = new Date(1996, 8, 26); //This is set to my birthday
	let time = dayjs().diff(dayjs(d), 'year', true); 
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);
