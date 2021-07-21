<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Uscita effettuata</title>
</head>
<body>
    <div class="alert alert-secondary m-2" role="alert">
        <h2 class="alert-heading">Uscita eseguita</h2>
        <hr>
        <p>Arrivederci <?php session_start(); echo $_SESSION['teacher_name']; ?></p>
    </div>
</body>
</html>