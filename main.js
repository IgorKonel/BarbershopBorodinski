// Popover Cart
let popover = document.querySelector('.popover')
let popoverDisplay = 'popover-open'
let popoverOpenButton = document.querySelector('.navigation-button-cart')
let popoverCloseButton = document.querySelector('.popover-close-button')




popoverOpenButton.onclick = function() {
    console.log('Кнопка корзины и открытия popover нажата!');
    // display: block для активации анимации
    console.log(popover)
    popover.style.display = 'block';

    // Запускаем анимацию поповера
    setTimeout(() => {
        popover.classList.add('popover-open'); // Добавляем класс для анимации
    }, 10); // Небольшая задержка для обработки display

    // Ждем 1 секунду (длительность анимации поповера), чтобы затем запустить анимацию содержимого
    setTimeout(() => {
        popover.querySelector('.popover-content').classList.add('show'); // Запускаем анимацию содержимого
    }, 500); // 500 мс, соответствующие длительности анимации

    console.log('Поповер открыт!')
};

popoverCloseButton.onclick = function() {
    console.log('Кнопка корзины на popover нажата!');

    // Убираем класс для анимации исчезновения
    popover.classList.remove('popover-open');

    // Обработчик завершения перехода для popover
    popover.addEventListener('transitionend', function(event) {
        // Проверяем, завершилась ли анимация opacity
        if (!popover.classList.contains('popover-open')) {
            popover.style.display = 'none'; // Скрываем popover после завершения анимации
            popover.querySelector('.popover-content').classList.remove('show'); // Убираем класс для анимации содержимого
        }
    }); // Удаляем обработчик после первого срабатывания
    console.log('Поповер скрыт!')
};

// ---- Modal Window  ----
let loginContainer = document.querySelector('.modal-container')
let loginContent = document.querySelector('.modal')
let openLoginButton = document.querySelector('.navigation-button-user')
let closeLoginButton = document.querySelector('.modal-close-button')

openLoginButton.onclick = function() {
    console.log('Кнопка для входа в аккаунт нажата!');
    loginContainer.classList.add('open-modal')
}

closeLoginButton.onclick = function() {
    console.log('Кнопка для выхода из аккаунт нажата!');
    loginContainer.classList.remove('open-modal');
}
