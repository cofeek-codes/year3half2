<?php

$fullData = [
    'abc',
    'def',
    'owdowf',
    'hello',
    'world',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];

if ($_GET['search'] != null && $_GET['search'] != '') {
    $data = array_filter($fullData, fn ($k) => $k == $_GET['search']);
} else {
    $data = $fullData;
}

header('Content-Type: application/json');
echo json_encode($data, JSON_UNESCAPED_UNICODE);
