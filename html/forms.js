const body = document.body;
const btn = document.querySelector("#btn");
const btnClose = document.querySelector("#btn_close");
const modal = document.querySelector("#modal");

// обработчики клика на кнопки
btn.addEventListener("click", btnHandler);
btnClose.addEventListener("click", btnCloseHandler);

// при нажатии на кнопку Click me
function btnHandler(e) {
  e.preventDefault();
  body.classList.add("lock"); // блокируем скролл веб-страницы
  modal.classList.add("modal--open"); // открываем модальное окно
}

// при нажатии на кнопку Close
function btnCloseHandler(e) {
  e.preventDefault();
  body.classList.remove("lock"); // разблокируем скролл страницы
  modal.classList.remove("modal--open"); // закрываем окно
}

// при нажатии на пустое пространство - закрываем окно
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    body.classList.remove("lock");
    modal.classList.remove("modal--open");
  }
});
// обновление страницы
function refreshPage(){
    window.location.reload();
} 