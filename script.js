document.getElementById('themeButton').addEventListener('click', changeTheme);
document.getElementById('hueButton').addEventListener('click', changeHue);

const themes = ['dark', 'light'];
const hues = ['normal', 'spolar'];

function changeTheme ()
{
	console.log('changing theme');
	if(localStorage.getItem('theme') == themes[0])
	{
		localStorage.setItem('theme', themes[1]);
		document.body.classList.replace(themes[0], themes[1]);

	} else
	{
		localStorage.setItem('theme', themes[0]);
		document.body.classList.replace(themes[1], themes[0]);
	}
}
function changeHue ()
{
	console.log('changing hur');

}

if(localStorage.getItem('theme'))
{
	document.body.classList.add(localStorage.getItem('theme'));
} else
{
	localStorage.setItem('theme', 'dark');
	document.body.classList.add(localStorage.getItem('theme'));
}