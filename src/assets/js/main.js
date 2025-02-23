// Modal 열기
function openPopup(modalId) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

// Modal 닫기 (X 버튼 클릭 시)
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let modal = this.closest(".modal"); // 현재 버튼이 속한 모달 찾기
    if (modal) {
      closePopup(modal.id);
    }
  });
});

// Modal 닫기 함수
function closePopup(modalId) {
  let modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}
