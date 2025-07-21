let slider = document.querySelectorAll(".slider");
let active = document.querySelector(".first");
let inactive = document.querySelector(".secound");
let all = document.querySelector(".all");
let cards = document.querySelectorAll(".card");
let texth3 = document.querySelectorAll(".text h3");
let mode = document.querySelector(".mode");
let modeImg = document.querySelector(".mode img");
let header = document.querySelector("header");
let midh1 = document.querySelector(".mid h1");
let body = document.querySelector("body");
//change theme
mode.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    modeImg.src = "assets/images/icon-moon.svg"; // icon for light
  } else {
    modeImg.src = "assets/images/icon-sun.svg"; // icon for dark
  }
});
all.classList.add("red-bg");

slider.forEach((slider) => {
  let card = slider.closest(".card");

  slider.addEventListener("click", () => {
    slider.classList.toggle("active");

    if (slider.classList.contains("active")) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
});

all.addEventListener("click", () => {
  all.classList.add("red-bg");
  active.classList.remove("red-bg");
  inactive.classList.remove("red-bg");
  cards.forEach((e) => {
    e.style.display = "flex";
  });
});

active.addEventListener("click", () => {
  all.classList.remove("red-bg");
  active.classList.add("red-bg");
  inactive.classList.remove("red-bg");
  cards.forEach((e) => {
    if (e.classList.contains("active")) {
      e.style.display = "flex";
    } else {
      e.style.display = "none";
    }
  });
});

inactive.addEventListener("click", () => {
  all.classList.remove("red-bg");
  active.classList.remove("red-bg");
  inactive.classList.add("red-bg");
  cards.forEach((e) => {
    if (e.classList.contains("active")) {
      e.style.display = "none";
    } else {
      e.style.display = "flex";
    }
  });
});

// Fetching JSON data
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let images = document.querySelectorAll(".top img");
    let text = document.querySelectorAll(".text h3");
    let para = document.querySelectorAll(".text p");
    // loop through the images and assign the logo from the JSON data
    images.forEach((img, i) => {
      img.src = data[i].logo;
    });

    text.forEach((ele, i) => {
      ele.innerHTML = data[i].name;
    });

    para.forEach((p, i) => {
      p.innerHTML = data[i].description;
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the JSON:", error);
  });
