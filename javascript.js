const DEG = 6;
const HR = document.getElementById('hr');
const MN = document.getElementById('mn');
const SC = document.getElementById('sc');

setInterval(() => {

	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * DEG;
	let ss = day.getSeconds() * DEG;

	HR.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	MN.style.transform = `rotateZ(${mm}deg)`;
	SC.style.transform = `rotateZ(${ss}deg)`;

})
