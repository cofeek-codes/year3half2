<?php

/*Задача 3 Напишите сценарий PHP для расчета текущего возраста
человека. */

echo "<b>Результат работы Задачи 3</b> <br>";
echo date("Y") - date('Y', strtotime('2002-06-08'));