const popupOverlay = document.querySelector(".popup-overlay");

const openPopup = (movie) => {
  popupOverlay.style.display = "flex";
};

const closePopup = () => {
  const popupOverlay = document.querySelector(".popup-overlay");
  popupOverlay.style.display = "none";
};
