const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");

      
      const apiKey = "670a4eefe7015cf2e2462d8f09df31f1";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        async function checkWeather(cityname){
            const response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);
            var data = await response.json();z
            console.log(data);

            if(response.status == 404){
                alert('YOU HAVE ENTERED INVALID CITY NAME');
            }else{
                document.querySelector(".cityname").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity1").innerHTML = data.main.humidity +"%";
            document.querySelector(".windspeed").innerHTML = data.wind.speed +"km/h";
            document.querySelector(".content").style.display = "block";
                
            }

           
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
        