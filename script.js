let isFront = true;

document.getElementById("container").addEventListener("click", () => {
  const front = document.getElementById("front");
  const back = document.getElementById("back");

  if (isFront) {
    front.style.opacity = "0";
    back.style.opacity = "1";
  } else {
    front.style.opacity = "1";
    back.style.opacity = "0";
  }

  isFront = !isFront;
});
