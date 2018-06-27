document.getElementById('btnEnviarConsulta').addEventListener('click', cargarJson);

function cargarJson() {
	const numeroTarjetaBip = document.getElementById('numeroTarjeta').value
	console.log(numeroTarjetaBip)
	let url = '';
	url += 'http://www.psep.cl/api/Bip.php?&'
	url += `numberBip=${numeroTarjetaBip}`
	fetch(url)
		.then(resp => resp.json())
		.then(data => {
			console.log(data)
		})
		.catch(e => console.log(e))
}