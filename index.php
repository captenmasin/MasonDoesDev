<?php
$currentRoute = str_replace("/", "", $_SERVER['REQUEST_URI']);

if ($currentRoute === 'contact') {
    require_once 'contact.php';
} else{
    require_once 'home.php';
}
?>
