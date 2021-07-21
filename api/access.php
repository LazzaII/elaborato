<?php

    /*
    -----------------------------------------------------------------------------------
    statistiche.php restituisce sotto forma di json i dati della richiesta sugli accessi in palestra.
    -----------------------------------------------------------------------------------
    */

    //carica parametri
    require_once "./php-include/palestrafacile-config.inc.php";
    //carica classe per utilizzare DB
    require_once __DIR__ . "/class/Database.php";

    try {
        $db = new Database($PALESTRA_FACILE_HOST, $PALESTRA_FACILE_DB, $PALESTRA_FACILE_USER, $PALESTRA_FACILE_PASS);
        
        $statsResult = $db->query("SELECT gym_access.id, gym_access.access_day, gym_access.access_hour,
                                          gym_access.exit_day, gym_access.exit_hour, teacher.last_name,
                                          teacher.first_name, teacher.id AS id_t
                                   FROM gym_access 
                                   JOIN teacher ON teacher.id = gym_access.teacher 
                                   ORDER BY gym_access.id", 'S');        
        
        $compactAccesses = [];

        foreach ($statsResult AS $index => $value) {
            $compactAccesses[$index]['id'] = $value['id'];
            $compactAccesses[$index]['access'] = $value['access_day'] . ' ' . $value['access_hour'];
            $compactAccesses[$index]['exit'] = $value['exit_day'] . ' ' . $value['exit_hour'];
            $compactAccesses[$index]['teacher'] = $value['last_name'] . ' ' . $value['first_name'];
            $compactAccesses[$index]['id_t'] = $value['id_t'];
        }
        
        echo json_encode($compactAccesses);
    } catch (\Throwable $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    } finally {
        $db->closeConnection();
    }
?>