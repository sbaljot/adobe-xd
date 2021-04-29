<?php
    if (isset($_POST['getData'])) {
        $conn = new mysqli('localhost','root','','busibudassignment');
        $start = $conn->real_escape_string($_POST['start']);
        $limit = $conn->real_escape_string($_POST['limit']);
        $sql = $conn->query("SELECT * from refs LIMIT $start,$limit");
        if($sql->num_rows>0){
            $response=[];
            while($data=$sql->fetch_array()){
                array_push($response, '<tr><td>' . $data['sno'] . '.</td>
                <td>'. $data['refname'] . '</td>
                <td>'. $data['customers'] . '</td>
                <td>'. $data['orderscpns'] . '</td>
                <td>$'. $data['totalrevenue'] . '</td>
                <td>
                    <div class="trev"><span class="fiftypct">'. $data['audience'] . '%&nbsp;&nbsp;&nbsp;<svg
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="15"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                                text-anchor="none" style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#ffffff">
                                    <path
                                        d="M42.43149,50.1839l-18.70913,18.70913l62.27764,62.27764l62.27765,-62.27764l-18.70913,-18.70913l-43.56851,43.56851z">
                                    </path>
                                </g>
                            </g>
                        </svg></span></div>
            </td>
            <td>
                <div class="aw"><span class="edit">Edit</span></div>
            </td></tr>');
            }
            exit(json_encode($response));
        }
        else{exit('reachedmax');}
    }
?>
