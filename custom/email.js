const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputData = new FormData(event.target);
  // console.log();
  $.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/squall@codecreate.co',
    dataType: 'json',
    accepts: 'application/json',
    data: Object.fromEntries(inputData.entries()),
    success: console.log,
    error: console.error
  });
});