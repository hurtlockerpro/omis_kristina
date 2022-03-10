
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let label = document.querySelector('label[for="flexSwitchCheckChecked"]')


let clientID = "e94a06c22c14c9ab3059f89372eb2541"
let units = 'metric'
let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=" + clientID
// console.log(apiUrl);

function generateUrl(units) {
    return apiUrl + '&units=' + units
}

fetch(generateUrl('metric'))
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log("City is: ", data.name);
        console.log("Temp: ", data.main.temp);

        city.innerText = data.name
        temp.innerText = data.main.temp
        label.innerText = 'metric'

    })

    document.getElementById("flexSwitchCheckChecked").addEventListener('change', function(event){
        console.log(event.target.checked);
        if (event.target.checked){
            // celcium
            fetch(generateUrl('metric'))
                .then(response => response.json())
                .then(data => {
                    city.innerText = data.name
                    temp.innerText = data.main.temp
                    label.innerText = 'metric'

                })
        } else {
            // fahrenheit
            fetch(generateUrl('impeial'))
                .then(response => response.json())
                .then(data => {
                    city.innerText = data.name
                    temp.innerText = data.main.temp
                    label.innerText = 'impeial'

                })
            
        }
    })