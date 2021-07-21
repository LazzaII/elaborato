<?php
    //credenziali di accesso al DB
    $PALESTRA_FACILE_HOST = "localhost";                                //host in cui risiede il DB
    $PALESTRA_FACILE_DB = "dbelaborato";                                //nome DB
    $PALESTRA_FACILE_USER = "root";                                     //username
    $PALESTRA_FACILE_PASS = "";                                         //password

    //altri parametri di configurazione
    $PALESTRA_FACILE_CICLO_SETTIMANE = 2;                               //ogni quante settimane si ripete il turno DAD?
    $PALESTRA_FACILE_GIORNI_SCOLASTICI = 5;                             //quanti sono i giorni scolastici in una settimana? 
    $PALESTRA_FACILE_ORE_SCOLASTICHE = 8;                               //quante sono le ore di scuola in un giorno (numero massimo)?
    $PALESTRA_FACILE_GIORNI_SCOLASTICI_ELENCO = array(1, 2, 3, 4, 5);   //quali sono i giorni scolastici in una settimana (N - The ISO-8601 numeric representation of a day [1 for Monday, 7 for Sunday])?
    $PALESTRA_FACILE_DAD_ATTIVATA = true;                               //si tiene conto anche della DAD nella costruzione dell'orario? 
    
    $PALESTRA_FACILE_DATA_INIZIO_SCUOLA = DateTime::createFromFormat('Y-m-d', '2021-04-12');    //data d'inizio scuola
    $PALESTRA_FACILE_DATA_FINE_SCUOLA = DateTime::createFromFormat('Y-m-d', '2021-06-11');      //data di fine scuola
?>