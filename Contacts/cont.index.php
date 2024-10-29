<?php
$title="Контакты";
require_once "block/header.php";


require_once "block/footer.php";


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form_data";


// Подключение к базе данных
$conn = new mysqli($servername, $username, $password);


// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
echo ("Connect");

// Получение данных из формы
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// SQL-запрос для вставки данных в таблицу
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Заявка успешно отправлена!";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения
$conn->close();