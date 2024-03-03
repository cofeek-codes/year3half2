<?php
// Задача 1 Как добавить или отнять дату?

echo "<b>Результат работы Задачи 1</b> <br>";
$date = date_create('2025-12-31');
date_modify($date, '-3 day');
echo date_format($date, 'd.m.Y') . "<br><br>";
