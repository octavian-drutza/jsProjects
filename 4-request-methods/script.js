let xhrBtn = document.querySelector("#xhr");
let fetchBtn = document.querySelector("#fetch");
let jQueryBtn = document.querySelector("#jquery");
let axiosBtn = document.querySelector("#axios");
let quote = document.querySelector("#quote");

let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

function getWithXhr() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      let formatedText = JSON.parse(request.responseText);
      changeQuote(formatedText);
    }
  };
  request.open("GET", url);
  request.send();
}

function getWithFetch() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      changeQuote(data);
    });
}

function getWithjQuery() {
  $.getJSON(url).done((data) => {
    changeQuote(data);
  });
}

function getWithAxios() {
  axios.get(url).then((res) => {
    changeQuote(res.data[0]);
  });
}

function changeQuote(data) {
  quote.innerText = data;
}

xhrBtn.addEventListener("click", getWithXhr);
fetchBtn.addEventListener("click", getWithFetch);
jQueryBtn.addEventListener("click", getWithjQuery);
axiosBtn.addEventListener("click", getWithAxios);
