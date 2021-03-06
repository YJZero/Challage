const clockTitle = document.querySelector(".js-clock");

function getDay() {
  //D-day 날짜 가져오기
  const getDate = new Date("December 25, 2022, 0:00:00");

  //현재 날짜 객체 생성

  const now = new Date();

  //D-day 에서 현재 시간을 뺀 값을 밀리초로 얻는다.

  const dataSub = getDate.getTime() - now.getTime();

  //Math.floor로 정수값을 가져온다.

  const day = String(Math.floor(dataSub / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((dataSub % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((dataSub % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((dataSub % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${day}일 ${hours} 시간 ${minutes} 분 ${seconds} 초 남았습니다.`;
}

function dDaycall() {
  getDay();
  setInterval(getDay, 1000);
}

dDaycall();