/* DOM elements */
const coursesCards = document.querySelectorAll(".course-card");
const coursesImages = document.querySelectorAll("course-img img");
const coursesTitles = document.querySelectorAll(".course-title");
const coursesAuthors = document.querySelectorAll(".course-authors");
const coursesRatings = document.querySelectorAll(".course-rating");
const coursesRaters = document.querySelectorAll(".raters");
const coursesOldPrice = document.querySelectorAll(".old-price");
const coursesNewPrice = document.querySelectorAll(".new-price");
const bestSeller = document.createElement("div");
bestSeller.classList.add("best-seller");
bestSeller.textContent = "Best Seller";
const searchBtn = document.querySelector(".navbar-search-btn");
const searchInput = document.querySelector(".navbar-search");

const getCoursesInfo = async () => {
  let response = await fetch("http://localhost:3000/courses");
  let json = await response.json();
  return json;
};

getCoursesInfo().then((coursesInfo) => {
  for (let i = 0; i < coursesInfo.length; ++i) {
    coursesTitles[i].textContent = coursesInfo[i].title;
    coursesAuthors[i].textContent = coursesInfo[i].author;
    coursesNewPrice[i].textContent = `E£${coursesInfo[i].newPrice}`;
    coursesOldPrice[i].textContent = `E£${coursesInfo[i].oldPrice}`;
    coursesRaters[i].textContent = `(${coursesInfo[i].noOfRaters})`;
    coursesRatings[i].textContent = coursesInfo[i].rate;
    // coursesImages[i].src = coursesInfo[i].image;
    // if (coursesInfo[i].bestSeller) coursesCards[i].appendChild(bestSeller);
  }
});

const handleSearch = (e) => {
  e.preventDefault();
  const keyword = searchInput.value;
  const len = coursesTitles.length;
  let count = 0;
  for (let x of coursesTitles) {
    const courseTitles = x.textContent;
    if (!courseTitles.includes(keyword)) {
      x.parentElement.style.display = "none";
      count++;
    }
  }
  if (count === len || keyword === "") {
    for (let x of coursesTitles) x.parentElement.style.display = "block";
  }
};

searchBtn.addEventListener("click", handleSearch);
