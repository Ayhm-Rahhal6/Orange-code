<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    setcookie("theme", $_POST["theme"], time() + (86400 * 30), "/");
}
$theme = isset($_COOKIE["theme"]) ? $_COOKIE["theme"] : "light";
?>
<!DOCTYPE html>
<html>
<body style="background-color: <?php echo $theme == 'dark' ? 'black' : 'white'; ?>; color: <?php echo $theme == 'dark' ? 'white' : 'black'; ?>;">
    <form method="post">
        <select name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <button type="submit">save</button>
    </form>
</body>
</html>
