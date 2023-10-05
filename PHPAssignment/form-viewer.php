<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        h1{
            text-align: center;
        }

        tr:nth-child(even){
            background-color: #eee;
        }
        table, th, td{
            border: 2px solid;
            border-collapse: collapse;
            text-align: center;
            width: 70%;
        }

        table{
            margin: auto;
        }
        
    </style>
</head>
<body>
    <h1>Method: Get</h1>
    <table>
        <th>Key</th>
        <th>Value</th>
    <?php
        error_reporting(0);

        if ($_SERVER["REQUEST_METHOD"] == "GET") {

            $array = array( "Drawing" => $_GET['drawing'], "Dancing" => $_GET['dancing'], "Singing" => $_GET['singing'], "Painting" => $_GET['painting'],
                            "Color" => $_GET['color'], 
                            "Physical Activity" => $_GET['PA'], 
                            "Breakfast or Lunch or Dinner" => $_GET['b/l/d']
                        );

            foreach($array as $key => $value){
                if($value){
                    if(is_array($value)){
                       echo 
                            "<tr>
                            <td>$key</td>
                            <td>";
                       foreach ($value as $selected) {
                           echo "$selected, ";
                       }
                        echo 
                        "</td></tr>";
                    } else {
                        echo
                            "<tr>
                            <td>$key</td>
                            <td>$value</td>
                            </tr>";
                    }
                }
            }
        }

    ?>
    </table>
</body>
</html>