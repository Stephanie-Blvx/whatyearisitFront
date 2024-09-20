fetch('whatyearisit-115tsyt35-stephanie-blvxs-projects.vercel.app/year')
	.then(response => response.json())
	.then(data => {
        console.log(data)
        document.querySelector('#year').innerHTML += `
				<p> ${data.now} </p>`})