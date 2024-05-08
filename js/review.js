import { openPopup, closePopup, confirmAction } from "./popup.js";

window.onload = () => {
  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewList = document.querySelector(".review-list");
  const clickedMovieId = localStorage.getItem("clickedMovieId");

  // 리뷰 추가
  const reviewForm = document.querySelector(".review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
    const review = document.getElementById("reviewInput").value;
    const movieId = localStorage.getItem("clickedMovieId");

    // 유효성 검사 - 닉네임 2글자 이상!
    if (nickname.length < 2) {
      openPopup("경고", "닉네임은 2자 이상으로 설정해주세요.");
      return;
    }

    // 유효성 검사 - 리뷰 내용은 100자 미만!
    if (review.length > 100) {
      openPopup("경고", "리뷰는 100글자 미만으로 작성해주세요.");
      return;
    }

    // 유효성 검사 - 닉네임 중복 금지!
    if (!isNicknameUnique(nickname, movieId)) {
      openPopup(
        "경고",
        "이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요."
      );
      return;
    }

    let reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewData.push({ nickname, password, review, movieId });
    localStorage.setItem("reviews", JSON.stringify(reviewData));

    // 현재 영화 리뷰만 표시
    if (movieId === clickedMovieId) {
      appendReviewItem({ nickname, review });
    }

    reviewForm.reset();
  });

  // 리뷰 삭제 버튼
  reviewList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-btn");
    if (deleteButton) {
      const nickname = deleteButton.dataset.nickname;
      openDeletePopup(nickname);
    }
  });

  reviewData.forEach((review) => {
    if (review.movieId === clickedMovieId) {
      appendReviewItem(review);
    }
  });
};

const appendReviewItem = (review) => {
  const reviewList = document.querySelector(".review-list");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="name">${review.nickname}</span>
    <span class="contents">${review.review}</span>
    <span class="delete-btn" data-nickname="${review.nickname}"></span>
  `;
  reviewList.appendChild(listItem);
};

// 삭제 팝업
const openDeletePopup = (inputNickname) => {
  openPopup("리뷰 삭제", "비밀번호를 입력하세요.", true);

  // 팝업 내용 설정
  const popupChkPw = document.querySelector(".popup-chk-pw");
  popupChkPw.dataset.nickname = inputNickname;
  popupChkPw.value = "";
};

// 같은 영화내에서의 같은 닉네임이 있는지 체크
const isNicknameUnique = (nickname, movieId) => {
  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  const filterdReviews = reviewData.filter(
    (review) => review.movieId === movieId
  );
  return !filterdReviews.some((review) => review.nickname === nickname);
};
