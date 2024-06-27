const modalContainer = document.querySelector(".modalContainer");
const yes = document.querySelector(".yesBtn");
const no = document.querySelector(".noBtn");

const g = JSON.parse(sessionStorage.getItem("y"));

if (g) {
  console.log("1");
} else {
  window.setTimeout(() => {
    modalContainer.classList.add("active");
  }, 2000);

  yes.addEventListener("click", () => {
    modalContainer.classList.remove("active");
    sessionStorage.setItem("y", JSON.stringify("yes"));
  });

  no.addEventListener("click", () => {
    alert("잘가라~");
    location.href = "https://www.google.co.kr/";
  });
}
