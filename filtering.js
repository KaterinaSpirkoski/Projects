// Cards Filtering Script
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);

hideAllChecks();

function filterMarketing() {
  hideAllCards();
  hideAllChecks();
  changeBgColor();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "flex";
      const checkbox = document.getElementById("checkIcon");
      checkbox.style.display = "inline-block";
      const divMarketing = document.getElementById("divMarketing");
      divMarketing.style.backgroundColor = "red";
      divMarketing.style.color = "black";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

function filterCoding() {
  hideAllCards();
  hideAllChecks();
  changeBgColor();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "flex";
      const checkbox = document.getElementById("checkIconCoding");
      checkbox.style.display = "inline-block";
      const divCoding = document.getElementById("divCoding");
      divCoding.style.backgroundColor = "red";
      divCoding.style.color = "black";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();
  hideAllChecks();
  changeBgColor();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "flex";
      const checkbox = document.getElementById("checkIconDesign");
      checkbox.style.display = "inline-block";
      const divDesign = document.getElementById("divDesign");
      divDesign.style.backgroundColor = "red";
      divDesign.style.color = "black";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".filterCard");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".filterCard");

  allCards.forEach((card) => {
    card.style.display = "flex";
  });
}

function hideAllChecks() {
  var checks = document.querySelectorAll(".checkIcon");

  checks.forEach((check) => {
    check.style.display = "none";
  });
}

function changeBgColor() {
  var checkDivs = document.querySelectorAll(".div-input");

  checkDivs.forEach((checkDiv) => {
    checkDiv.style.background = "none";
    checkDiv.style.color = "white";
  });
}
//
