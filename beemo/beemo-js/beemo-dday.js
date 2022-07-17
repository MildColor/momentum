const calContainer = document.querySelector(".dday");
const dDayForm = document.querySelector("#caldday");
const calBtn = document.querySelector(".calbtn");
const dateInput = document.querySelector("#calendar");
const remainTime = document.querySelector(".remaintime");

function calHandler(event) {
  event.preventDefault();
  const dDay = new Date(dateInput.value);
  const date = new Date();
  const remainTimeStamp = dDay - date;

  const remainDay = String(parseInt(remainTimeStamp / 86400000, 10)).padStart(
    2,
    "0"
  );
  const remainderHour = remainTimeStamp % 86400000;

  const remainHour = String(parseInt(remainderHour / 3600000, 10)).padStart(
    2,
    "0"
  );
  const remainderMin = remainderHour % 3600000;

  const remainMin = String(parseInt(remainderMin / 60000, 10)).padStart(2, "0");

  remainTime.innerText = `D-Day ${remainDay}d ${remainHour}h ${remainMin}m `;

  calContainer.classList.add("hidden");
  remainTime.classList.remove("hidden");
}

dDayForm.addEventListener("submit", calHandler);
