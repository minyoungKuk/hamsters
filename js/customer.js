let accordionBtn = document.querySelectorAll(".accordionTitle");
let allTexts = document.querySelectorAll(".customer-text");
let accIcon = document.querySelectorAll(".accIcon");

document.querySelector(".accordion").addEventListener("click", toggleAccordion);

function toggleAccordion(e) {
  const targetItem = e.target.closest(".item");
  const targetTitle = targetItem.querySelector(".accordionTitle");
  const targetText = targetItem.querySelector(".text");
  console.log("targetTitle", targetTitle);
  console.log("targetText", targetText);

  /**
   * targetText가 보이고 있으면 targetText 미노출
   * targetText가 미노출이면 노출시켜줘야함
   * show
   */

  if (targetText.classList.contains("show")) {
    targetText.classList.remove("show");
  } else {
    targetText.classList.add("show");
  }
}
