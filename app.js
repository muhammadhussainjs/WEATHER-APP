const submit = document.querySelector('#submit1')
const text = document.querySelector('#text')
const div = document.querySelector('#maindiv')
const divv = document.querySelector('#loading')

const array = []
console.log(array);
submit.addEventListener('submit' , async (event) => {
    event.preventDefault()
    divv.style.display = 'block';
    div.innerHTML = ""
    let location = text.value
    console.log(location);
    try{
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ca96de4480d640828f175454231710&q=${location}`)
        console.log(res.data);
        let obj = {
           'country': res.data.location.country,
            'name': res.data.location.name,
            'region': res.data.location.region,
            'tz_id': res.data.location.tz_id,
            'localtime': res.data.location.localtime,
            'cloud': res.data.current.cloud,
            'temp_c': res.data.current.temp_c,
            'temp_f': res.data.current.temp_f,
            'text': res.data.current.condition.text,
            'icon': res.data.current.condition.icon
        }



        array.unshift(obj)
        text.value = ""

        array.map((item) =>{
        div.innerHTML += `<div class="main"><div class="head"><p>COUNTRY: ${item.country}</p>
        <p>NAME: ${item.name}</p>
        <p>REGION: ${item.region}</p>
        <p>TZ_ID: ${item.tz_id}</p></div>
        <div class="head1"> 
        <p>CLOUD: ${item.cloud}</p> 
        <p>CLOUD: ${item.text}</p> 
        <p>LOCALTIME: ${item.localtime}</p> </div>
        <div class="head2"><p>TEMP_F: ${item.temp_f}</p>
        <p>TEMP_C: ${item.temp_c}</p></div>
        <div><img src="${item.icon}" alt="icon" width="120px" height="120px"></div>
</div>`
    console.log(item.icon);})
    }
     
    
    
    
    catch(error) {
        div.innerHTML += `<h2>Data Not Found</h2>`;
        console.log(error);
        console.log('data not found');
     }
     finally {
        console.log(loading);
        divv.style.display = 'none';

    }
    text.value = ""
})

