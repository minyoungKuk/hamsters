import { openPopup, closePopup, confirmAction } from "./popup.js";

window.onload = () => {
  const reviewList = document.querySelector(".review-list");
  const clickedMovieId = getMovieIdFromUrl();

  // 리뷰 추가
  const reviewForm = document.querySelector(".review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
    const review = document.getElementById("reviewInput").value;

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
    if (!isNicknameUnique(nickname, clickedMovieId)) {
      openPopup(
        "경고",
        "이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요."
      );
      return;
    }

    const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewData.push({ nickname, password, review, movieId: clickedMovieId });
    localStorage.setItem("reviews", JSON.stringify(reviewData));

    // 현재 영화 리뷰만 표시
    renderReviews(clickedMovieId);
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

  // 페이지 로드 후 하드코딩된 리뷰 리스트와 동적으로 가져온 리뷰 리스트를 모두 보여줍니다.
  renderReviews(clickedMovieId);
};

function getMovieIdFromUrl() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get("movieId");
}

function renderReviews(movieId) {
  const reviewList = document.querySelector(".review-list");
  reviewList.innerHTML = ""; // 기존에 보여줬던 하드코딩된 리뷰 리스트를 초기화합니다.

  // 하드코딩된 리뷰 리스트를 추가합니다.
  const hardcodedReviews = [
    {
      name: "삥뽕이",
      contents: "재밌으니까 꼭 보세요!",
    },
    {
      name: "화가난헐크",
      contents: "너무너무너무 무서워서 잠도 못잤습니다 그래도 잼나네욤",
    },
    {
      name: "최대글자6개",
      contents: "연기력이 너무 좋아요!!",
    },
  ];

  hardcodedReviews.forEach((review) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="name">${review.name}</span>
      <span class="contents">${review.contents}</span>
      <span class="delete-btn"></span>
    `;
    reviewList.appendChild(listItem);
  });

  // 로컬 스토리지에서 동적으로 가져온 리뷰 리스트를 추가합니다.
  const reviewData = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewData.forEach((review) => {
    if (review.movieId === movieId) {
      appendReviewItem(review);
    }
  });
}

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
