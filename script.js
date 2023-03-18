window.onload = function () {
    Swal.fire({
      title: "Selam !",
      text: "Hava Durumu uygulamama Hoş Geldiniz. Şehir ismi girerek başlayın.",
      width: 600,
      padding: "3em",
      color: "#716add",
    });
  };
  
  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "21a997f60b1074c5db7d64639ed092f3";
  
  const setQuery = (e) => {
    if (e.key === "Enter") getResult(searchBar.value);
  };
  
  const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResult);
  };
  
  const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name} , ${result.sys.country}`;
  
    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`;
  
    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;
  
    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}°c - ${Math.round(
      result.main.temp_max
    )}°c`;
  };
  
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keypress", setQuery);
  
  const button = document.querySelector("#button");
  const input = document.querySelector("#searchBar");
  
  button.addEventListener("click", function (event) {
    event.preventDefault();
    input.dispatchEvent(new KeyboardEvent("keypress", { key: "Enter" }));
  });
  
  button.addEventListener("click", changeClass);
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      changeClass();
    }
  });
  
  function changeClass() {
    var element = document.querySelector(".search_btn");
    element.classList.add("search_btn_active");
  
    var contentDiv = document.querySelector(".content");
    contentDiv.style.display = "flex";
  }
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("body_dark");
  
    var cities = document.querySelectorAll(".city");
    cities.forEach(function (city) {
      city.classList.toggle("city_dark");
    });
  
    var temps = document.querySelectorAll(".temp");
    temps.forEach(function (temp) {
      temp.classList.toggle("temp_dark");
    });
  
    var searchbars = document.querySelectorAll(".searchbar");
    searchbars.forEach(function (searchbar) {
      searchbar.classList.toggle("searchbar_dark");
    });
  
    var minmaxs = document.querySelectorAll(".minmax");
    minmaxs.forEach(function (minmax) {
      minmax.classList.toggle("minmax_dark");
    });
  }
  