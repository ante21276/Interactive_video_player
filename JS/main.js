const video = document.querySelector("video");
let span = document.querySelectorAll("span");

video.addEventListener("timeupdate", () => {
  let current = video.currentTime;

  for(let i= 0; i<span.length; i++) {

    if (parseInt(span[i].getAttribute("data-time")) === Math.floor(current)) {
      span[i].style.color = "orange";
      if (span[i].previousElementSibling) {
        span[i].previousElementSibling.style.color = "black";
      }
    }
    video.addEventListener('ended', () => {
      span[i].style.color = "black";
    });
  }
});

addEventListener("click", (e) => {
  if(e.target.tagName === "SPAN") {
    video.currentTime = parseInt(e.target.getAttribute("data-time"));
  }
});
