<?php

    class Database 
    {
        private $connection;
        private $host;
        private $db;
        private $user;
        private $password;

        public function __construct($host, $db, $user, $password)
        {
            $this->host = $host;
            $this->db = $db;
            $this->user = $user;
            $this->password = $password;
            
            try 
            {
                $this->connection = new PDO("mysql:host=$host;dbname=$db", $user, $password);
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->connection->exec('SET NAMES utf8');
            }
            catch(PDOException $e)
            {
                echo "Connection failed: " . $e->getMessage();
            }
        }

        //---funzione per chiudere la connessione---

        public function closeConnection()
        {
            $connection = null;
        }

        //--------------Getters---------------

        public function getConnection()
        {
            return $this->connection;
        }

        public function getHost()
        {
            return $this->host;
        }

        public function getDB()
        {
            return $this->db;
        }

        public function getUser()
        {
            return $this->user;
        }

        public function getPassword()
        {
            return $this->password;
        }

        //------funzioni per operare sul DB-------

        public function query($sql, $type, $data = null)
        {
            $statement = $this->connection->prepare($sql);
            $statement->execute($data);
            if($type == 'S')
            {
                $result = $statement->fetchAll(PDO::FETCH_ASSOC);
                return $result;
            }
        }
    }
?>