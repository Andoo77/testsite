const slider = document.querySelector(".slider");
const projectList = document.querySelector("#project-list");
const projects = document.querySelectorAll("#project-list li");
const imgContainer = document.querySelector("#img-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
const slideWidth = "33.33%";
let slideCount = projects.length;
let translateValue = 0;

nextBtn.addEventListener("click", () => {
  if (slideIndex >= slideCount - 3) return;
  slideIndex++;
  translateValue -= parseFloat(slideWidth);
  projectList.style.transform = `translateX(${translateValue}%)`;
});

prevBtn.addEventListener("click", () => {
  if (slideIndex <= 0) return;
  slideIndex--;
  translateValue += parseFloat(slideWidth);
  projectList.style.transform = `translateX(${translateValue}%)`;
});


  // Get all links with class 'nav-link'
  const navLinks = document.querySelectorAll('.nav-link');

  // Loop through all the links to add click event listener
	navLinks.forEach(link => {
	  link.addEventListener('click', event => {
		event.preventDefault();
		const sectionID = link.getAttribute('href');
		const sectionPosition = document.querySelector(sectionID).offsetTop;

		// Only add offset when scrolling to project section
		if (sectionID === "#projects") {
		  window.scrollTo({
			top: sectionPosition - 50, // Subtract 100px from sectionPosition
			behavior: 'smooth'
		  });
		} else {
		  window.scrollTo({
			top: sectionPosition,
			behavior: 'smooth'
		  });
		}
	  });
	});