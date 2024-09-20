fetch('https://backend-seven-vert-93.vercel.app/year')
	.then(response => response.json())
	.then(data => {
        console.log(data)
        document.querySelector('#year').innerHTML += `
				<p> ${data.now} </p>`})