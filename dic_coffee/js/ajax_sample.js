let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById("btn");

function getData() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState === this.DONE && req.status === 200) {
      data = req.response;
    }
  };
  req.open("GET", "ajax.json");
  req.responseType = "json";
  req.send(null);
}

function changeVideo() {
  getData();
  button.addEventListener("click", () => {
    if (data.length > 0) {
      titleArea.innerHTML = data[number].title;
      contentArea.innerHTML = data[number].description;
      videoArea.innerHTML = data[number].url;
      number === 2 ? (number = 0) : number++;
    }
  });
}

window.onload = changeVideo;
