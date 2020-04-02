document.getElementById('themeButton').addEventListener('click', changeTheme);
document.getElementById('hueButton').addEventListener('click', changeHue);

const themes = ['dark', 'light'];
const hues = ['normal', 'shift', 'polar', 'solar'];

function changeTheme ()
{
	if(localStorage.getItem('theme') == themes[0])
	{
		localStorage.setItem('theme', themes[1]);
		document.body.classList.replace(themes[0], themes[1]);
		document.getElementById('themeText').innerHTML = themes[0];
		if(document.getElementById('hueText').innerHTML != hues[0])
		{
			document.getElementById('hueText').innerHTML = hues[3];
		}
	} else
	{
		localStorage.setItem('theme', themes[0]);
		document.body.classList.replace(themes[1], themes[0]);
		document.getElementById('themeText').innerHTML = themes[1];
		if(document.getElementById('hueText').innerHTML != hues[0])
		{
			document.getElementById('hueText').innerHTML = hues[2];
		}
	}
}

function changeHue ()
{
	if(localStorage.getItem('hue') == hues[0])
	{
		localStorage.setItem('hue', hues[1]);
		document.body.classList.replace(hues[0], hues[1]);
		document.getElementById('hueText').innerHTML = hues[0];
	} else
	{
		localStorage.setItem('hue', hues[0]);
		document.body.classList.replace(hues[1], hues[0]);
		if(localStorage.getItem('theme') == themes[0])
		{
			document.getElementById('hueText').innerHTML = hues[2];
		} else
		{
			document.getElementById('hueText').innerHTML = hues[3];
		}
	}
}

// Load or define theme setting in localStorage
if(localStorage.getItem('theme'))
{
	document.body.classList.add(localStorage.getItem('theme'));
	document.getElementById('themeText').innerHTML = (localStorage.getItem('theme') == themes[0]) ? themes[1] : themes[0];
} else
{
	localStorage.setItem('theme', themes[0]);
	document.body.classList.add(localStorage.getItem('theme'));
	document.getElementById('themeText').innerHTML = (localStorage.getItem('theme') == themes[0]) ? themes[1] : themes[0];
}

// Load or define hue setting in localStorage
if(localStorage.getItem('hue'))
{
	document.body.classList.add(localStorage.getItem('hue'));
	document.getElementById('hueText').innerHTML = (localStorage.getItem('theme') == themes[0]) ? hues[2] : hues[3];
} else
{
	localStorage.setItem('hue', hues[0]);
	document.body.classList.add(localStorage.getItem('hue'));
	document.getElementById('hueText').innerHTML = (localStorage.getItem('theme') == themes[0]) ? hues[2] : hues[3];
}

window.onload = () =>
{
	setTimeout(() =>
	{
		document.body.classList.remove('loading');
	}, 0);
}