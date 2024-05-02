const popupOverlay = document.querySelector("#popupOverlay");
const popupTitle = document.querySelector(".popup-title");
const popupMessage = document.querySelector(".popup-message");
const confirmButton = document.querySelector(".confirm-btn");
const popupClose = document.querySelector(".popup-close");
const popupChkPw = document.querySelector(".popup-chk-pw");

confirmButton.addEventListener("click", () => confirmAction());

popupClose.addEventListener("click", () => closePopup());

const openPopup = () => {
  popupOverlay.style.display = "flex";
  popupMessage.style.color = "black";
};

const closePopup = () => {
  popupOverlay.style.display = "none";
  confirmButton.removeEventListener("click", confirmAction);
};

const confirmAction = () => {
  const password = popupChkPw.value; // 여기에서 수정
  const nickname = popupChkPw.dataset.nickname; // 여기에서 수정

  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  const targetReview = reviewData.find(
    (review) => review.nickname === nickname
  );

  if (!targetReview) {
    popupTitle.innerHTML = "리뷰를 찾을 수 없음";
    popupMessage.textContent = "해당 리뷰를 찾을 수 없습니다.";
    openPopup();
    return;
  }

  const targetPw = targetReview.password;
  console.log(targetPw, password);
  if (password === targetPw) {
    const updateReviewData = reviewData.filter(
      (review) => review.nickname !== nickname
    );
    localStorage.setItem("reviews", JSON.stringify(updateReviewData));
    closePopup();
    location.reload();
    console.log(popupChkPw); // popupChkPw확인 나중에 삭제
  } else {
    popupMessage.style.color = "red";
    popupMessage.textContent = "비밀번호가 일치하지 않습니다.";
    popupChkPw.focus();
    console.log(popupChkPw); // popupChkPw확인 나중에 삭제
  }
};
