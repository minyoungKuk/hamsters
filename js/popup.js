const popupOverlay = document.querySelector("#popupOverlay");
const popupTitle = document.querySelector(".popup-title");
const popupMessage = document.querySelector(".popup-message");
const deleteButton = document.querySelector(".delete-btn");
const confirmButton = document.querySelector(".confirm-btn");
const popupClose = document.querySelector(".popup-close");

// 삭제 팝업
deleteButton.addEventListener("click", () =>
  confirmDelete(popupTitle, popupMessage)
);

// 비밀번호 체크
confirmButton.addEventListener("click", () =>
  confirmAction(popupTitle, popupMessage)
);

popupClose.addEventListener("click", () => closePopup());

const openPopup = () => {
  const popupOverlay = document.querySelector("#popupOverlay");
  popupOverlay.style.display = "flex";
  popupMessage.style.color = "black"; // 텍스트를 블랙으로 변경
};

const closePopup = () => {
  const popupOverlay = document.querySelector("#popupOverlay");
  popupOverlay.style.display = "none";
};

// 삭제 팝업
const confirmDelete = (popupTitle, popupMessage) => {
  popupTitle.innerHTML = "리뷰를 삭제하시겠습니까?";
  popupMessage.innerHTML = `
  비밀번호 확인 후 리뷰 삭제가 가능합니다.  <br/>
  비밀 번호를 입력해주세요
  `;

  const popupChkPw = popupOverlay.querySelector(".popup-chk-pw");
  popupChkPw.value = ""; // 비밀번호 입력란 초기화

  openPopup();
};

// 비밀번호 체크
const confirmAction = () => {
  const popupChkPw = document.querySelector(".popup-chk-pw");
  const password = popupChkPw.value;

  if (password === "1234") {
    closePopup();
  } else {
    const popupMessage = document.querySelector(".popup-message");
    popupMessage.style.color = "red";
    popupMessage.textContent = "비밀번호가 일치하지 않습니다.";
    popupChkPw.focus();
  }
};

const showEditForm = () => {
  // 수정 팝업
};
