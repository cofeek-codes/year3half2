<!DOCTYPE html>
<html>

<head>
    <title>Отсчет до дня рождения</title>
</head>

<body>

    <form action="countdown.php" method="post">
        <label for="day">День:</label><br>
        <input type="number" id="day" name="day" min="1" max="31" required><br>
        <label for="month">Месяц:</label><br>
        <input type="number" id="month" name="month" min="1" max="12" required><br>
        <label for="year">Год:</label><br>
        <input type="number" id="year" name="year" min="1900" max="2099" required><br>
        <button type="submit" name="act"> Рассчитать </button>
    </form>

</body>

</html>

<?php
// Проверяем, были ли переданы данные формы
if ($_GET['act']) {
    $day = $_POST['day'];
    $month = $_POST['month'];
    $year = $_POST['year'];

    // Формируем дату рождения
    $birthdate = new DateTime("$year-$month-$day");
    // Получаем текущую дату и время
    $now = new DateTime();

    // Вычисляем разницу между датой рождения и текущим временем
    $interval = $birthdate->diff($now);

    // Проверяем, прошел ли уже день рождения
    if ($interval->invert == 1) {
        echo "День рождения уже прошел. <br>";
        $interval->days = 365 - $interval->days;
    }

    // Выводим результат
    echo "До дня рождения осталось: " . $interval->days . " дней, " . $interval->h . " часов, " . $interval->i . " минут и " . $interval->s . " секунд.";
}
?>