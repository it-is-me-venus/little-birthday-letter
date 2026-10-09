const envelopeButton = document.getElementById("envelopeButton");
const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");
const tapHint = document.getElementById("tapHint");
const replayButton = document.getElementById("replayButton");

envelopeButton.addEventListener("click", () => {
  const isOpen = envelope.classList.toggle("open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  tapHint.textContent = isOpen ? "Your little letter is opening… ♡" : "Tap the little envelope ♡";

  if (isOpen) {
    window.setTimeout(() => {
      letterCard.hidden = false;
      tapHint.textContent = "A little letter, just for you ♡";
      letterCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 420);
  } else {
    letterCard.hidden = true;
  }
});

replayButton.addEventListener("click", () => {
  letterCard.hidden = true;
  envelope.classList.remove("open");
  envelopeButton.setAttribute("aria-expanded", "false");
  tapHint.textContent = "Tap the little envelope ♡";
  envelopeButton.scrollIntoView({ behavior: "smooth", block: "center" });
});

const tinyHeartButton =
  document.getElementById("tinyHeartButton");

const heartModal =
  document.getElementById("heartModal");

const closeHeartModal =
  document.getElementById("closeHeartModal");

const heartOkayButton =
  document.getElementById("heartOkayButton");

function openLoveMessage() {
  heartModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLoveMessage() {
  heartModal.hidden = true;
  document.body.style.overflow = "";
}

tinyHeartButton.addEventListener(
  "click",
  openLoveMessage
);

closeHeartModal.addEventListener(
  "click",
  closeLoveMessage
);

heartOkayButton.addEventListener(
  "click",
  closeLoveMessage
);

heartModal.addEventListener("click", function(event) {
  if (event.target === heartModal) {
    closeLoveMessage();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && !heartModal.hidden) {
    closeLoveMessage();
  }
});
