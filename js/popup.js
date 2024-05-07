export const openPopup = (title, message, isPasswordPopup = false) => {
  const popupOverlay = document.getElementById("popupOverlay");
  const popupTitle = popupOverlay.querySelector(".popup-title");
  const popupMessage = popupOverlay.querySelector(".popup-message");
  const popupChkPw = popupOverlay.querySelector(".popup-chk-pw");
  const confirmButton = popupOverlay.querySelector(".confirm-btn");

  popupOverlay.style.display = "none";
  popupTitle.textContent = title;
  popupMessage.textContent = message;

  if (isPasswordPopup) {
    popupChkPw.style.display = "block";
    confirmButton.removeEventListener("click", confirmAction);
    confirmButton.removeEventListener("click", closePopup);
    confirmButton.addEventListener("click", confirmAction);
  } else {
    popupChkPw.style.display = "none";
    confirmButton.removeEventListener("click", closePopup);
    confirmButton.removeEventListener("click", confirmAction);
    confirmButton.addEventListener("click", closePopup);
  }

  popupOverlay.style.display = "flex";
  popupMessage.style.color = "black";
};

export const closePopup = () => {
  const popupOverlay = document.getElementById("popupOverlay");
  const confirmButton = popupOverlay.querySelector(".confirm-btn");

  popupOverlay.style.display = "none";
};

export const confirmAction = () => {
  const popupOverlay = document.getElementById("popupOverlay");
  const popupTitle = popupOverlay.querySelector(".popup-title");
  const popupMessage = popupOverlay.querySelector(".popup-message");
  const popupChkPw = popupOverlay.querySelector(".popup-chk-pw");
  const confirmButton = popupOverlay.querySelector(".confirm-btn");

  const password = popupChkPw.value;
  const inputNickname = popupChkPw.dataset.nickname;

  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  const targetReview = reviewData.find(
    (review) => review.nickname === inputNickname
  );

  if (!targetReview) {
    popupTitle.innerHTML = "리뷰를 찾을 수 없음";
    popupMessage.textContent = "해당 리뷰를 찾을 수 없습니다.";
    openPopup();
    return;
  }

  const targetPw = targetReview.password;
  if (password === targetPw) {
    const updatedReviewData = reviewData.filter(
      (review) => review.nickname !== inputNickname
    );
    localStorage.setItem("reviews", JSON.stringify(updatedReviewData));
    closePopup();
    location.reload();
  } else {
    popupMessage.style.color = "red";
    popupMessage.textContent = "비밀번호가 일치하지 않습니다.";
    popupChkPw.focus();
  }
};

// 팝업 닫기 버튼 이벤트 처리
const popupCloseButton = document.querySelector(".popup-close");
if (popupCloseButton) {
  popupCloseButton.addEventListener("click", () => {
    closePopup();
  });
}
