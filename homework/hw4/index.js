const dDay = document.querySelector(".remaintime");

function timeStampCal() {
  const date = new Date();
  let year = date.getFullYear();
  const Xmas = new Date(year, 11, 25, 0, 0, 0);

  if (Xmas > date) {
    const remainTimeStamp = Xmas - date;
    return remainTimeStamp;
  } else {
    let year = date.getFullYear() + 1;
    const Xmas = new Date(year, 11, 25, 0, 0, 0);
    const remainTimeStamp = Xmas - date;
    return remainTimeStamp;
  }
}

function remainXmas() {
  const remainTimeStamp = timeStampCal();
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
  const remainderSec = remainderMin % 60000;

  const remainSec = String(parseInt(remainderSec / 1000, 10)).padStart(2, "0");

  dDay.innerText = `${remainDay}d ${remainHour}h ${remainMin}m ${remainSec}s`;
}

remainXmas();
setInterval(remainXmas, 1000);
