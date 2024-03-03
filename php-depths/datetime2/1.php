<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>

<body>
	<style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100vw;
			height: 100vh;
		}

		header {
			position: absolute;
			top: 5%;
		}

		main {
			position: absolute;
			bottom: 50%;
			top: 50%;
		}

		footer {
			position: absolute;
			bottom: 5%;
		}
	</style>
	<header>Header</header>
	<main>Main</main>
	<footer>&copy; Copyright cofeek-codes 2021-<?php echo date('Y'); ?> </footer>

</body>

</html>