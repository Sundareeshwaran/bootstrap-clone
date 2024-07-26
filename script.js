const text = document.querySelector(".input"),
  link = "https://www.google.com/search?q=bootstrap+",
  btn2 = document.querySelector(".btn2"),
  download = document.querySelector("#download"),
  release = document.querySelector("#release"),
  goto = document.querySelector(".goto"),
  login = document.querySelector("#login-btn"),
  popup = document.getElementById("popup");

text.addEventListener("keydown", (event) => {
  const textValue = text.value;
  const url = link + textValue;
  if (event.key === "Enter") {
    window.open(url, "_blank");
    text.value = "";
  }
});

btn2.addEventListener("click", () => {
  window.open(
    "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    "_blank"
  );
});

download.addEventListener("click", () => {
  window.open(
    "https://getbootstrap.com/docs/5.3/getting-started/download/",
    "_blank"
  );
});

release.addEventListener("click", () => {
  window.open("https://getbootstrap.com/docs/versions/", "_blank");
});

goto.addEventListener("click", () => {
  window.open(
    "https://www.herodevs.com/support/nes-bootstrap?utm_source=Bootstrap_site&utm_medium=Banner&utm_campaign=v3and4_eol",
    "_blank"
  );
});

login.addEventListener("click", () => {
  popup.style.top = "10%";
  setTimeout(() => {
    popup.style.top = "-50%";
  }, 2000);
});
