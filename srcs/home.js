
let dark = false;
document
  .querySelector("#nav-list li:last-child")
  .addEventListener("click", function () {
    dark = !dark;
    if (dark) {
      document.querySelector("section h1").style.color = "white";
      document.querySelector("section h3").style.color = "white";
      document.querySelector(" header nav h3").style.color = "orange";
      document.body.classList.add("dark-mode");
      document.querySelector(
        "#nav-list li:last-child  i:first-child"
      ).style.display = "none";

      document.querySelector(
        "#nav-list li:last-child  i:last-child"
      ).style.display = "flex";
    } else {
      document.querySelector("section h3").style.color = "";
      document.querySelector("section h1").style.color = "";
      document.querySelector(" header nav h3").style.color = "";
      document.body.classList.remove("dark-mode");
      document.querySelector(
        "#nav-list li:last-child  i:first-child"
      ).style.display = "flex";
      document.querySelector(
        "#nav-list li:last-child  i:last-child"
      ).style.display = "none";
    }
  });
document.querySelector("nav ul li:first-child a").style.color = "orange";

let test = false;
document.querySelector(".checkbtn").addEventListener("click", function () {
  test = !test;
  if (test) {
    document.querySelector("#nav-list").style.display = "flex";
  } else {
    document.querySelector("#nav-list").style.display = "none";
  }
});
function colorLink() {
  var ul = document.getElementById("nav-list");
  var li = ul.querySelectorAll("li");

  for (let a of li) {
    a.querySelector("a").addEventListener("click", function () {
      for (let a of li) {
        a.querySelector("a").style.color = "";
      }
      a.querySelector("a").style.color = "orange";
    });
  }
}
colorLink();
