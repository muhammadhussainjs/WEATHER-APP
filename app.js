const submit = document.querySelector('#submit')
const text = document.querySelector('#text')
const div = document.querySelector('#maindiv')

submit.addEventListener('submit' , (event) => {
    event.preventDefault()
    div.innerHTML = ""
    let location = text.value
    console.log(location);
    axios.get(`https://api.weatherapi.com/v1/current.json?key=ca96de4480d640828f175454231710&q=${location}`)
    .then((res) =>{
        console.log(res.data);
        div.innerHTML += `<h2>COUNTRY: ${res.data.location.country}</h2>
        <h2>REGION: ${res.data.location.region}</h2> 
        <h2>NAME: ${res.data.location.name}</h2>
        <h2>TZ_ID: ${res.data.location.tz_id}</h2> 
        <h2>LOCAL_TIME: ${res.data.location.localtime}</h2>
        <h2>CLOUD: ${res.data.current.cloud}</h2> 
        <h2>TEMP_F: ${res.data.current.temp_f}</h2>
        <h2>TEMP_C: ${res.data.current.temp_c}</h2>`
    })
    .catch((error) => {
        console.log(error);
        console.log('data not found');
    })
    text.value = ""
})

