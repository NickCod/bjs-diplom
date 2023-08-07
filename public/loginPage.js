const userForm = new userForm();

// Метод для обработки авторизации пользователя
userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      console.log('Пользователь успешно авторизован:', response.user);
      location.reload();
    } else {
      console.log('Ошибка авторизации:', response.error);
      showError(response.error);
    }
  });
};

// Метод для обработки регистрации пользователя
userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    if (response.success) {
      console.log('Пользователь успешно зарегистрирован:', response.user);
      location.reload();
    } else {
      console.log('Ошибка регистрации:', response.error);
      showError(response.error);
    }
  });
};

// Функция для вывода ошибок
function showError(errorMessage) {
  const errorDiv = document.querySelector('.ui.message.negative');
  errorDiv.style.display = 'block';
  errorDiv.textContent = errorMessage;
}