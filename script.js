function ApiCall() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText).value;
      console.log(data);
      document.getElementById("joke").innerHTML = data;
    } else {
      document.getElementById("joke").innerHTML = "Something Went Wrong";
    }
  };
  xhr.send();
}

document.querySelector("button").addEventListener("click", ApiCall);
