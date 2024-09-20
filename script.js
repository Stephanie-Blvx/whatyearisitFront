fetch('https://vercel.com/stephanie-blvxs-projects/backend/V5v5gncrXWq9QuKLAfASaUJum6Fv/year')
	.then(response => response.json())
	.then(data => {
        console.log(data)
        document.querySelector('#year').innerHTML += `
				<p> ${data.now} </p>`})