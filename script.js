/* menu bar code */

const menuBarIcon = document.querySelector(".icon-main");
const menuBar = document.querySelector(".menu-bar");
menuBarIcon.addEventListener("click", () => {
  menuBar.classList.toggle("active");
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#header-page-content",
    start: "10% 0",
    end: "top -20%",
    scrub: true,
  },
});

tl.to("header", {
  width: "100%",
  height: "120px",
  backgroundColor: "black",
  color: "white",
  duration: 1,
});

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".infinite-slider-container",
    start: "top 70%",
    end: "90% 30%",
    scrub: true,
  },
});

tl1.to("video", {
  filter: "brightness(0)",
});

function followDiv() {
  const followBlurDiv = document.querySelector(".follow-div");
  const dotDiv = document.querySelector(".follow-dot-div");

  document.addEventListener("mousemove", (e) => {
    // Move and animate followBlurDiv
    gsap.to(followBlurDiv, {
      duration: 1,
      left: e.x - 200 + "px",
      top: e.y - 200 + "px", // Use 'top' instead of 'y' for positioning
      ease: "power2.out",
    });

    // Move and animate dotDiv
    gsap.to(dotDiv, {
      duration: 1,
      left: e.x - 10 + "px",
      top: e.y - 10 + "px", // Use 'top' instead of 'y' for positioning
      ease: "power2.out",
    });
  });
}

followDiv();

function cardAnimation() {
  const card = document.querySelectorAll(".card");

  // Loop through each card and animate them
  card.forEach((c) => {
    gsap.from(c, {
      scale: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: c,
        start: "top 100%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
    });
  });
}

cardAnimation();

function quotesAnimation() {
  const firstQuote = document.querySelectorAll(".first-quote");
  const secQuote = document.querySelector(".sec-quote");

  gsap.from(firstQuote, {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger: {
      trigger: "#quote-section",
      start: "top 80%",
      end: "0 50%",
      scrub: 4,
    },
  });

  gsap.from(secQuote, {
    y: 70,
    x: 70,
    duration: 3,
    scrollTrigger: {
      trigger: "#quote-section",
      start: "top 80%",
      end: "0 50%",
      scrub: 4,
    },
  });
}

quotesAnimation();

function headingAnima() {
  const headingAnima = document.querySelector(
    ".coming-soon-section-container h1"
  );

  gsap.from(headingAnima, {
    y: 100,
    duration: 0.5,
    scrollTrigger: {
      trigger: headingAnima,
      start: "top 98%",
    },
  });
}

headingAnima();

function headerCircleAnimaiton() {
  document
    .getElementsByClassName("circle-div-header")[0]
    .addEventListener("click", function () {
      document
        .getElementById("about-us")
        .scrollIntoView({ behavior: "smooth" });
    });
}

headerCircleAnimaiton();
