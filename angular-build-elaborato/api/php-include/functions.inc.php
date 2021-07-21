<?php
    //questa funzione restituisce il valore dell'indice (o chiave) dell'array principale
    //in cui si trova l'array associativo che alla chiave 'keyName' (passata come parametro) ha associato il valore 'needle'
    /**
     * * @param Type $needle il valore da ricercare
     * * @param Type $keyName la chiave in cui ricercare 'needle'
     * * @param Type $parentArray l'array principale che contiene come elementi array associativi (che hanno tra le loro chiavi la chiave 'keyName')
     */
    function searchForValueInChildArray($needle, $keyName, $parentArray)
    {
        foreach ($parentArray as $parentKey => $childArray) 
        {
            if(!array_key_exists($keyName, $childArray))
                continue;

            if($childArray[$keyName] == $needle)
                return $parentKey;
        }
        return null;
    }

    //questa funzione converte un array di checkbox in un pattern formato da 0 e 1 
    //(righe e colonne sono necessarie da passare perché non sempre sono valorizzate tutte le checkbox e quindi non esistono nell'array)
    /**
     * * @param Type $arr l'array da convertire
     * * @param Type $rows le righe dell'array
     * * @param Type $cols le colonne dell'array
     */
    function checkboxArrayToPattern($arr, $rows, $cols)
    {
        $pattern = "";
        for ($i = 0; $i < $rows; $i++)
        { 
            for ($j = 1; $j <= $cols; $j++) 
            {
                //questa checkbox non è settata a vero (on)
                if(!isset($arr[$i][$j]) || strcmp($arr[$i][$j], "on") != 0)
                    $pattern .= "0";
                else
                    $pattern .= "1";
            }
        }
        return $pattern;
    } 
?>