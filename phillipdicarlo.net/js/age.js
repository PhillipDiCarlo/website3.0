let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs(0852001960000), 'year', true); //This is set to my birthday
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);
