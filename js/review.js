window.onload = () => {
  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewList = document.querySelector(".review-list");

  if (reviewData) {
    reviewData.forEach((review) => {
      appendReviewItem(review);
    });
  }

  // 리뷰 삭제 버튼 이벤트 추가
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nickname = button.dataset.nickname;
      openDeletePopup(nickname); // 삭제 팝업 열기
    });
  });

  // 리뷰 추가 이벤트 리스너
  const reviewForm = document.querySelector(".review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
    const review = document.getElementById("reviewInput").value;

    // 유효성 검사 - 닉네임 2글자 이상!
    if (nickname.length < 2) {
      openPopup();
      popupTitle.innerHTML = "경고";
      popupMessage.innerHTML = `
      닉네임은 2자 이상으로 설정해주세요.
      `;
      popupChkPw.classList.add("hidden");
      confirmButton.addEventListener("click", closePopup);
      return;
    }

    // 유효성 검사 - 리뷰 내용은 100자 미만!
    if (review.length > 100) {
      openPopup();
      popupTitle.innerHTML = "경고";
      popupMessage.innerHTML = `
      리뷰는 100글자 미만으로 작성해주세요.
      `;
      popupChkPw.classList.add("hidden");
      confirmButton.addEventListener("click", closePopup);
      return;
    }

    // 유효성 검사 - 닉네임 중복 금지~
    if (!isNicknameUnique(nickname)) {
      openPopup();
      popupTitle.innerHTML = "경고";
      popupMessage.innerHTML = `
      이미 존재하는 아이디입니다. <br />
      다른 아이디를 사용해주세요.
      `;
      popupChkPw.classList.add("hidden");
      // confirmButton.addEventListener("click", closePopup);
      return;
    }

    let reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewData.push({ nickname, password, review });
    localStorage.setItem("reviews", JSON.stringify(reviewData));

    appendReviewItem({ nickname, review });

    // 초기화
    reviewForm.reset();
  });
};

const appendReviewItem = (review) => {
  const reviewList = document.querySelector(".review-list");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="name">${review.nickname}</span>
    <span class="contents">${review.review}</span>
    <button class="btn delete-btn" data-nickname="${review.nickname}">삭제</button>
  `;
  reviewList.appendChild(listItem);

  const deleteButton = listItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    const nickname = deleteButton.dataset.nickname;
    openDeletePopup(nickname);
  });
};

// 삭제 팝업 열기
const openDeletePopup = (nickname) => {
  popupTitle.innerHTML = "리뷰를 삭제하시겠습니까?";
  popupMessage.innerHTML = `
    비밀번호를 입력하고 확인 버튼을 클릭하세요.
  `;
  popupChkPw.dataset.nickname = nickname;
  popupChkPw.value = "";

  openPopup();
  popupChkPw.classList.remove("hidden");

  // 이전에 추가된 confirmButton 클릭 이벤트 리스너 제거
  // confirmButton.removeEventListener("click", confirmAction);

  confirmButton.addEventListener("click", () => confirmAction());
};

// 같은 닉네임 있는지 체크
const isNicknameUnique = (nickname) => {
  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  return !reviewData.some((review) => review.nickname === nickname);
};
