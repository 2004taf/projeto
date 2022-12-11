<html>
<head></head>
<body>
    Nome: <?php
                global $user;
                if(isset($_POST['user'])){
                    $user = $_POST['user']; 
                    echo ucfirst($user);
                }
                ?> 
    <br />
    Password: <?php
                    global $pass;
                    if(isset($_POST['user'])){
                        $pass = $_POST['pass'];
                        echo $pass;
                    }
                    ?> 
    <br />
    Data de nascimento: <?php
                            global $date;
                            if(isset($_POST['date'])){
                                $date = $_POST['date'];
                                echo $date;
                            }
                            ?>
    
    <?php echo "<script type='javascript'>alert('Bem-vindo', $user);"; ?>
</body>
</html>

