document.getElementById('themeButton').addEventListener('click', changeTheme);
document.getElementById('hueButton').addEventListener('click', changeHue);

const themes = ['dark', 'light'];
const hues = ['normal', 'shift'];

function changeTheme ()
{
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
	if(localStorage.getItem('hue') == hues[0])
	{
		localStorage.setItem('hue', hues[1]);
		document.body.classList.replace(hues[0], hues[1]);

	} else
	{
		localStorage.setItem('hue', hues[0]);
		document.body.classList.replace(hues[1], hues[0]);
	}
}

// Load or define theme setting in localStorage
if(localStorage.getItem('theme'))
{
	document.body.classList.add(localStorage.getItem('theme'));
} else
{
	localStorage.setItem('theme', themes[0]);
	document.body.classList.add(localStorage.getItem('theme'));
}

// Load or define hue setting in localStorage
if(localStorage.getItem('hue'))
{
	document.body.classList.add(localStorage.getItem('hue'));
} else
{
	localStorage.setItem('hue', hues[0]);
	document.body.classList.add(localStorage.getItem('hue'));
}