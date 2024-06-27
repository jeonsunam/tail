const wrap = document.querySelectorAll(".imgWrapper.hidden");
const wrapper = document.querySelector(".imgWrapper.show");
const wrapper1 = document.querySelector(".imgWrapper.show1");
const wrapper2 = document.querySelector(".imgWrapper.show2");
const wrapper3 = document.querySelector(".imgWrapper.show3");
const wrapper4 = document.querySelector(".imgWrapper.show4");
const wrapper5 = document.querySelector(".imgWrapper.show5");
const wrapper6 = document.querySelector(".imgWrapper.show6");
const more = document.querySelector(".more");
console.log(wrapper);

function checkScroll() {
  const scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY > 250) {
    wrapper.classList.add("up");
  }
  if (scrollY > 950) {
    wrapper1.classList.add("up1");
  }
  if (scrollY > 1700) {
    wrapper2.classList.add("up2");
  }
  if (scrollY > 3081) {
    wrapper4.classList.add("up4");
  }
  if (scrollY > 3799) {
    wrapper5.classList.add("up5");
  }
  if (scrollY > 4518) {
    wrapper6.classList.add("up6");
  }
}

window.addEventListener("scroll", checkScroll);

// 초기 호출
checkScroll();

wrap.forEach((w) => {
  more.addEventListener("click", () => {
    w.classList.remove("hidden");
    more.classList.add("ok");
    wrapper3.classList.add("up3");
  });
});

// 207 925 1644 2362 3081 3799 4518
