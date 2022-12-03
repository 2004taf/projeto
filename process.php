<html>
<head></head>
<body>

    Dados enviados:
    <br />
    <br />
    Nome: <?php
                global $user;
                $user = $_POST['user'];
                echo ucfirst($user) ?> 
    <br />
    Password: <?php
                    global $pass;
                    $pass = $_POST['pass'];
                    echo $pass ?> 
    <br />
    Data de nascimento: <?php
                            global $date;
                            $date = $_POST['date'];
                            echo $date ?>
</body>
</html>