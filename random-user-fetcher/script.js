(function init() {
  getElements();
  getUser();
})();

function getUser() {
  allContent.innerHTML = `<h1 class="title">Loading<h1>`;
  fetch("https://randomuser.me/api/")
    .then(function (res) {
      if (!res.ok) {
        throw Error("404");
      }
      return res;
    })
    .then((res) => res.json())
    .then((res) => updateProfile(res))
    .catch((error) => {
      console.log(error);
    });
}

function updateProfile(res) {
  allContent.innerHTML = beforeLoadContent;
  getElements();
  let data = res.results[0];
  fullname.innerText = `${data.name.title}, ${data.name.first} ${data.name.last};`;
  username.innerText = data.login.username;
  email.innerText = data.email;
  city.innerText = data.location.city;
  photo.src = data.picture.large;
}

function getElements() {
  fullname = document.getElementById("fullname");
  username = document.getElementById("username");
  email = document.getElementById("email");
  city = document.getElementById("city");
  photo = document.getElementById("avatar");
  next = document.getElementById("btn");
  next.addEventListener("click", getUser);
  allContent = document.querySelector(".user-profile");
  beforeLoadContent = allContent.innerHTML;
}
