fetch('https://vercel.com/stephanie-blvxs-projects/whatyearisit')
	.then(response => response.json())
	.then(data => {
        console.log(data)
        document.querySelector('#year').innerHTML += `
				<p> ${data.now} </p>`})