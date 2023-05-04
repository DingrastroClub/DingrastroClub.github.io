const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach((likeBtn) => {
  const likeIcon = likeBtn.querySelector(".icon");
  const likeCount = likeBtn.querySelector(".count");
  let count = 0;

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
    count = likeBtn.classList.contains("liked") ? count + 1 : count - 1;
    likeCount.textContent = count;
  });

  likeBtn.addEventListener("mouseleave", () => {
    likeIcon.classList.remove("liked");
  });
});
