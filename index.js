const blob = document.getElementById("blob");
document_shown = false

window.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.style.top = clientY;
  blob.style.left = clientX;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1500, fill: "forwards" });

  if (document_shown) blob.style.visibility = 'visible'
}

window.oncontextmenu = event => {
  event.preventDefault()
}

$(document).ready(function () {
  const title = document.getElementById("title")
  const subtitle = document.getElementById("subtitle")
  $("body").hide().fadeIn(1500);
  setTimeout(function () {
    document_shown = true
  }, 1501)
});