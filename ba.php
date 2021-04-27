<?php
    $conn = mysqli_connect("localhost","root","","busibudassignment");
    $query = "SELECT * FROM refs";
    $query_run = mysqli_query($conn,$query);
    $result_array = [];
    foreach($query_run as $row){
        array_push($result_array, $row);
    }
    header("Content-type: application/json");
    echo json_encode($result_array);
?>
