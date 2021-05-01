<?php
    if (isset($_POST['getData'])) {
        $conn = new mysqli('localhost','root','','busibudassignment');
        $start = $conn->real_escape_string($_POST['start']);
        $limit = $conn->real_escape_string($_POST['limit']);
        $sqlrow = $conn->query("SELECT * from refs");
        $totalrows=$sqlrow->num_rows;
        $sql = $conn->query("SELECT * from refs LIMIT $start,$limit");
        $currentrows=$sql->num_rows;
        $sqlpre = $conn->query("SELECT * from refs LIMIT 0,5");
        $prerows=$sqlpre->num_rows;
        if($prerows>0){
            $preloaded=[];
            while($data=$sqlpre->fetch_array()){
                array_push($preloaded, $data['sno'],$data['refname'], $data['customers'],
                $data['orderscpns'],$data['totalrevenue'],$data['audience']);
            }
            exit(json_encode($preloaded));
        }
        if($currentrows>0){
            $response=[];
            while($data=$sql->fetch_array()){
                array_push($response, $data['sno'],$data['refname'], $data['customers'],
                $data['orderscpns'],$data['totalrevenue'],$data['audience']);
                if($data['sno']==$totalrows){
                    array_push($response,'last');
                }
            }
            exit(json_encode($response));
        }
    }
?>
