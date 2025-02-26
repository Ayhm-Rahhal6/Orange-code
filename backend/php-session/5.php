<?php
session_start();
$timeout = 60; // 5 دقائق
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity']) > $timeout) {
    session_unset();
    session_destroy();
    header("Location: 4.php");
    exit();
}
$_SESSION['last_activity'] = time();
?>
