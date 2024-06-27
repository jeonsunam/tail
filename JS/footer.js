const imgBtn = document.querySelectorAll(".imgWrap");

imgBtn.forEach((a) => {
  a.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
