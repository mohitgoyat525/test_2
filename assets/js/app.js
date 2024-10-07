// Accordian
const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordionHeader");
  const content = item.querySelector(".accordionInfo");
  const icon = item.querySelector("img");

  header.addEventListener("click", () => {
    const accordionActive = document.querySelector(".accordionItem.active");

    if (accordionActive && accordionActive !== item) {
      accordionActive.classList.remove("active");
      accordionActive.querySelector(".accordionInfo").classList.add("hidden");
      accordionActive.querySelector("img").classList.remove("rotate-[180deg]");
      accordionActive.querySelector("img").classList.remove("duration-[0.5s]");
      accordionActive.querySelector("img").src = "./assets/images/svg/plus-icon.svg";
    }
    item.classList.toggle("active");
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-[180deg]");
    icon.classList.toggle("duration-[0.5s]");
    icon.src = item.classList.contains("active")
      ? "./assets/images/svg/subtract-icon.svg"
      : "./assets/images/svg/plus-icon.svg";
  });
});
