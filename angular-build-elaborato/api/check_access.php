<?php
    session_start();
    
    //carica parametri
    require_once "./php-include/palestrafacile-config.inc.php";
    //carica classe per utilizzare DB
    require_once __DIR__ . "/class/Database.php";

    $expID = explode(',', $_GET['badge_id']);
    $badge_id =  $expID[0]; //Prende il numero di badge dal get

    //$badge_id = $_GET['badge_id'];
    try {
        $db = new Database($PALESTRA_FACILE_HOST, $PALESTRA_FACILE_DB, $PALESTRA_FACILE_USER, $PALESTRA_FACILE_PASS);

        //STEP 1
        //Controllo se il badge è associato ad un professore
        //Caso positivo: fa il ckeck dell'uscita
        //Caso negativo: manda alla pagina di accesso negato
        $check_badge = $db->query('SELECT id, last_name, first_name 
                                   FROM teacher
                                   WHERE teacher.badge_id = :badge_id', 'S',
                                   ['badge_id' => $badge_id]);
		
        //-----CASO NEGATIVO STEP 1-----
        // quindi viene rimandato alla pagina di accesso neagato
        if(empty($check_badge)) header('Location: ../pages/access_refused.html'); 
        else{
            //-----CASO POSITVO STEP 1-----
            //STEP 2
            //Controllo se esiste già un accesso e quindi lo swipe del badge è una uscita.
            //Caso positivo: fa l'insert della data e ora di uscita e rimanda alla pagina dell'uscita
            //Caso negativo: inserisce un nuovo ingresso e rimanda alla pagina di accesso
            $check_exit = $db->query('SELECT gym_access.id
                                      FROM gym_access
                                      JOIN teacher ON teacher.id = gym_access.teacher
                                      WHERE gym_access.exit_day = "Ancora" AND gym_access.exit_hour = "in palestra" AND teacher.badge_id = :badge_id', 'S',
                                      ['badge_id' => $badge_id]); 
            
            //-----CASO POSITIVO STEP 2-----
            if(!empty($check_exit)) {
                $day = date("Y-m-d");
                $hour = date("H:i:s"); 
                $db->query('UPDATE gym_access 
                            SET exit_day = :dday, exit_hour = :hour 
                            WHERE id = :id', 'U',
                            [
                              'dday' => $day,
                              'hour' => $hour,
                              'id' => $check_exit[0]['id']
                            ]);
                            
                $_SESSION['teacher_name'] = $check_badge[0]['last_name'] . ' ' . $check_badge[0]['first_name'];
                header('Location: ../pages/exit.php');
            }else {
                //-----CASO NEGATIVO STEP 2-----
                $day = date("Y-m-d");
                $hour = date("H:i:s");
                $db->query('INSERT INTO gym_access (teacher, access_day, access_hour) 
                            VALUES (:t_id, :dday, :hour)', 'I',
                            [
                              't_id' => $check_badge[0]['id'],
                              'dday' => $day,
                              'hour' => $hour
                            ]);
           
                $_SESSION['teacher_name'] = $check_badge[0]['last_name'] . ' ' . $check_badge[0]['first_name'];
				header('Location: ../pages/access.php');
            }
        }
    } catch (\Throwable $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    } finally {
        $db->closeConnection();
    }
?>