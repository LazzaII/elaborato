# ITIS MEUCCI

---

## *Versione italiana*

---

## PalestraFacile per la scuola ITIS MEUCCI

> Questo programma serve a generare in maniera automatica l'orario per la palestra interna della scuola.

---

### Sommario

* [Informazioni Generali](#informazioni-generali)
* [Tecnologie utilizzate](#tecnologie-utilizzate)
* [Setup](#setup)
* [Database](#database)

---

### Informazioni Generali

> Il progetto è stato commissionato dal prof. Mauro Guasti per facilitare i professori nell'assegnazione dei turni della palestra interna, in maniera automatica e bilanciata.

### Tecnologie utilizzate

Per la realizzazione del back-end ci siamo serviti di

* php

Per la realizzazione del front-end ci siamo serviti di

* html
* css
* javascript

Come framework per lo styling del front-end abbiamo utilizzato

* Bootstrap v5.0

Per la gestione dei dati

* PDO
* MySQL

### Setup

>Informazioni da conoscere per comprendere il progetto.

Le sottostanti variabli si trovano nel file di configurazione [`/api/php-include/palestrafacile-config.inc.php`](https://github.com/Samu902/palestrafacile/blob/main/api/php-include/palestrafacile-config.inc.php).

```php
    $PALESTRA_FACILE_CICLO_SETTIMANE = 2; 
    $PALESTRA_FACILE_GIORNI_SCOLASTICI = 5;                    
    $PALESTRA_FACILE_ORE_SCOLASTICHE = 8;
    $PALESTRA_FACILE_GIORNI_SCOLASTICI_ELENCO = array(1, 2, 3, 4, 5);
    $PALESTRA_FACILE_DAD_ATTIVATA = true;
    $PALESTRA_FACILE_DATA_INIZIO_SCUOLA = DateTime::createFromFormat('Y-m-d', '2020-09-14');  
    $PALESTRA_FACILE_DATA_FINE_SCUOLA = DateTime::createFromFormat('Y-m-d', '2021-06-11');
```

Questi parametri servono per configurare con facilità l'algoritmo:

`$PALESTRA_FACILE_CICLO_SETTIMANE` è una variabile che rappresenta ogni quante settimane si alterna l'alternanza dad/presenza.

`$PALESTRA_FACILE_GIORNI_SCOLASTICI` è una variabile che rappresenta quanti giorni le classi sono a scuola.

`$PALESTRA_FACILE_ORE_SCOLASTICHE` è una variabile che rappresenta quante ore le classi sono a scuola (in orario normale, senza COVID-19, le ore sono 7).

`$PALESTRA_FACILE_GIORNI_SCOLASTICI_ELENCO` è un array che contiene il numero relativo ai giorni (ex. 1 = Lunedì, 2 = Martedì) viene utilizzato per controllare i giorni in cui una classe è a scuola quindi per evitare calcoli inutili per il i giorni di riposo (ex Domenica).  

`$PALESTRA_FACILE_DAD_ATTIVATA` è una variabile che viene utilizzata per attivare/disattivare la porzione di codice sottostante ([`/api/algo.php`](https://github.com/Samu902/palestrafacile/blob/main/api/algo.php)).

```php
    if($classi[searchForValueInChildArray($orarioCorrente["classe"], "classe", $classi)]["presenza"][$indiceTurno] == 0)
        continue;
```

Questo codice viene utilizzato per il controllo se la classe è in dad o in presenza, quindi in caso ci sia l'alternanza dad/presenza la variabile `$PALESTRA_FACILE_DAD_ATTIVATA` deve essere settata a `true` in caso contrario a `false`.

`$PALESTRA_FACILE_DATA_INIZIO_SCUOLA` è una variabile che viene utilizzata per indicare il giorno di inizio del calcolo dell'algoritmo.

`$PALESTRA_FACILE_DATA_FINE_SCUOLA` è una variabile che viene utilizzata per indicare il giorno di fine del calcolo dell'algoritmo.

### Database

>Le informazioni sottostanti servono per la comprensione del database.

La struttura del nostro database:

![Database image](/images/db-screen.png?raw=true)

la tabella `professori` contiene le informazioni relative ai professori di educazioni fisica, quali cognome e ID.

la tabella `classi` contiene le informazioni relative alle classi quali nome, l'ID del professore che isegna educazione fisica e la turnazione della presenza/dad.

la tabella `orario_ed_fisica` contiene le informazioni relative ai giorni e alle ore delle lezioni di educazione fisica quali giorno, ora e classe.

la tabella `risultato_turno` contiene le informazioni relative all'orario generato attraverso l'algoritmo(il suo contenuto è calcolato dal programma e non va inserito a mano).

---

## *English version*

---

## PalestraFacile for ITIS MEUCCI school

> This program is used to automatically generate the timetable for the school's internal gym.

---

### Summary

* [General Information](#general-information)
* [Used technologies](#used-technologies)
* [Setup](#setup-)
* [Database](#database-)

---

### General informations

> The project was commissioned by prof. Mauro Guasti to facilitate the teachers in assigning the shifts of the internal gym, in an automatic and balanced way.

### Used technologies

For the realization of the back-end we used

* php

For the realization of the front-end we used

* html
* css
* javascript

As a front-end styling framework we used

* Bootstrap v5.0

For data management

* PDO
* MySQL

### Setup-

> Information to know to understand the project.

The underlying variables can be found in the configuration file [`/api/php-include/palestrafacile-config.inc.php`](https://github.com/Samu902/palestrafacile/blob/main/api/php-include/palestrafacile-config.inc.php).

```php
    $PALESTRA_FACILE_CICLO_SETTIMANE = 2; 
    $PALESTRA_FACILE_GIORNI_SCOLASTICI = 5;                    
    $PALESTRA_FACILE_ORE_SCOLASTICHE = 8;
    $PALESTRA_FACILE_GIORNI_SCOLASTICI_ELENCO = array(1, 2, 3, 4, 5);
    $PALESTRA_FACILE_DAD_ATTIVATA = true;
    $PALESTRA_FACILE_DATA_INIZIO_SCUOLA = DateTime::createFromFormat('Y-m-d', '2020-09-14');  
    $PALESTRA_FACILE_DATA_FINE_SCUOLA = DateTime::createFromFormat('Y-m-d', '2021-06-11');
```

These parameters are used to easily configure the algorithm:

`$PALESTRA_FACILE_CICLO_SETTIMANE` is a variable that represents how many weeks the alternation between dad and presence alternates.

`$PALESTRA_FACILE_GIORNI_SCOLASTICI` is a variable that represents how many days the classes are at school.

`$PALESTRA_FACILE_ORE_SCOLASTICHE` is a variable that represents how many hours the classes are at school (in normal hours, without COVID-19, the hours are 7).

`$PALESTRA_FACILE_GIORNI_SCOLASTICI_ELENCO` is an array that contains the number relating to the days (ex. 1 = Monday, 2 = Tuesday) is used to check the days in which a class is at school therefore to avoid unnecessary calculations for the days of rest ( ex Sunday).

`$ PALESTRA_FACILE_DAD_ATTIVATA` is a variable that is used to activate / deactivate the underlying portion of code ([`/api/algo.php`](https://github.com/Samu902/palestrafacile/blob/main/api/algo.php)).

```php
    if ($classi[searchForValueInChildArray ($orarioCorrente["classe"], "classe", $classi)]["presenza"][$indiceTurno] == 0)
        continue;
```

This code is used to check if the class is in dad or in presence, so in case of dad / presence alternation the variable `$PALESTRA_FACILE_DAD_ATTIVATA` must be set to `true` otherwise to `false`.

`$PALESTRA_FACILE_DATA_INIZIO_SCUOLA` is a variable that is used to indicate the start day of the algorithm calculation.

`$PALESTRA_FACILE_DATA_FINE_SCUOLA` is a variable that is used to indicate the end day of the algorithm calculation.

### Database-

> The information below is for understanding the database.

The structure of our database:

![Database Image](/images/db-screen.png?raw=true)

`professori` is a table that contains infos about PE teachers, such as last name and ID.

`classi` is a table that contains infos about classes, such as name, PE teacher's ID and the presence/dad turnation.

`orario_ed_fisica` is a table that contains infos about PE lessons, such as day, hour and class.

`risultato_turno` is a table that contains infos about the algorithm-generated timetable (its content is generated by this program and mustn't be modified by hand).

---
