document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const skillBacks = document.querySelectorAll(".skill_back");

  // skill 모바일 여닫기(클릭 시 아래로 펼쳐지게)
  skillBacks.forEach((skillBack) => {
    skillBack.addEventListener("click", () => {
      const detail = skillBack.querySelector(".sk_detail");
      const isOpen = detail.classList.contains("show");

      document.querySelectorAll(".sk_detail").forEach((d) => {
        if (d !== detail) {
          d.style.maxHeight = "0px";
          d.classList.remove("show");
        }
      });

      if (!isOpen) {
        detail.classList.add("show");
        detail.style.maxHeight = detail.scrollHeight + "px";
      } else {
        detail.style.maxHeight = "0px";
        setTimeout(() => {
          detail.classList.remove("show");
        }, 300);
      }
    });
  });

  // Project 스크롤 시 카드뷰 보이게
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px 0px",
    }
  );

  cards.forEach((card) => observer.observe(card));
});

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
