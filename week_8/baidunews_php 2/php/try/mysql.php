<?php
$con = mysql_connect("localhost","root","123456");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

// some code

?>