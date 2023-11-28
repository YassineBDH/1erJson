fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    console.log(data)
    const ima = document.querySelector('.ima')
    ima.src = data.message
})