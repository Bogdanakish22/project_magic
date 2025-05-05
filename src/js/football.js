window.onload = function () {
  const ball = document.getElementById("ball");
  const field = document.getElementById("field");

  field.addEventListener("click", function (event) {
    const fieldRect = field.getBoundingClientRect();
    const ballSize = ball.offsetWidth;

    const clickX = event.clientX - fieldRect.left - ballSize / 2;
    const clickY = event.clientY - fieldRect.top - ballSize / 2;

    const maxX = field.clientWidth - ballSize;
    const maxY = field.clientHeight - ballSize;

    const newX = Math.max(0, Math.min(clickX, maxX));
    const newY = Math.max(0, Math.min(clickY, maxY));

    ball.style.left = newX + "px";
    ball.style.top = newY + "px";
  });
};
