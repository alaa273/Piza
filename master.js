// set option-box
let maincolors = localStorage.getItem(".option-box");
if (maincolors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem(".option-box")
  );
  //Remove  active class from ALL Class list item
  document.querySelectorAll(".colors-list li ").forEach((element) => {
    element.classList.remove("active");
    //Add active class on data-color===localstorge item
    if (element.dataset.color === maincolors) {
      //Add active class
      element.classList.add("active");
    }
  });
}
// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};
//switch color
const colorsli = document.querySelectorAll(".colors-list li");
//loop on All list items
colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set color on localstorage
    let setcolor = localStorage.setItem(".option-box", e.target.dataset.color);

    //remove active class from All childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");

      //add avtive class on self
      e.target.classList.add("active");
    });
  });
});
// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener("click", (e) => {

    

 e.target.parentElement.querySelectorAll(".active").forEach(element => {

   element.classList.remove("active");

  });
e.target.classList.add("active")
});
});



//  Get class
let landingpage = document.querySelector(".landing");
// Get Array of image
let imagesArray = [
  "images/pizza1.jpg",
  "images/pizza2.jpg",
  "images/pizza3.jpg",
  "images/pizza4.jpg",
  "images/pizza5.jpg",
];

setInterval(() => {
  //get time
  //Get Random  Number
  let RandomNumber = Math.floor(Math.random() * imagesArray.length);
  //change background img(url)
  landingpage.style.backgroundImage =
    `url("` + imagesArray[RandomNumber] + `")`;
}, 10000);


