<html>
<head>
	
	<title>Space Invaders</title>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.6">
	<link rel="stylesheet"  href="style/style.css" />

</head>

<body>
   <div class="contener">
    <?php
       
        if(isset($_COOKIE["wynik"])){
            if(!empty($_POST["nazwa"]) && !empty(trim($_POST["nazwa"]))){
                
                $wynik=$_COOKIE["wynik"];
                $data= date("Y-m-d");
                $godzina = date("H:i");
                $nazwa =  strtoupper($_POST["nazwa"]);
                
                
                
                include "values.php";
                $new=true;
                $new2=0;
                //aktualizuje wynik jesli gracz podal tą samą nazwe
                for($i=0; $i<sizeof($wartosci) -2; $i++){
                    if($nazwy[$i]==$nazwa && $wynik >= $wyniki[$i]){
                        $wyniki[$i]=$wynik;
                        $new=false;
                        
                    }
                    else if($nazwy[$i]==$nazwa && $wynik < $wyniki[$i]){
                        $new=false;
                    }
                }
                if($new==true){
                    array_push($wyniki, $wynik);
                    array_push($daty, $data);
                    array_push($nazwy, $nazwa);
                
                }
                //echo "<hr>";

                for($i = 0; $i < sizeof($wyniki) -1; $i++){
                    for($j = 0; $j < sizeof($wyniki) -1; $j++){

                        if($wyniki[$j]<$wyniki[$j+1]){

                            $tmp1=$wyniki[$j];
                            $tmp2=$nazwy[$j];
                            $tmp3=$daty[$j];

                            $wyniki[$j]=$wyniki[$j+1];
                            $nazwy[$j]=$nazwy[$j+1];
                            $daty[$j]=$daty[$j+1];

                            $wyniki[$j+1]=$tmp1;
                            $nazwy[$j+1]=$tmp2;
                            $daty[$j+1]=$tmp3;

                        }
                    }
                }
                
                $value="";
                for($i = 0; $i < sizeof($wyniki) - 1; $i++){
                    $value.= $nazwy[$i]."<".$wyniki[$i].">";
                    $value.= $daty[$i];
                    $value.= "\r\n";
                    //echo $nazwy[$i].": ".$wyniki[$i]." [".$daty[$i]."]<br>";
                }



                if($plik=@fopen("gra/wyniki.txt",w)){
                    
                    setcookie("wynik","", time() - 3600);
                    echo $nazwa.": ".$wynik." [".$data."]<br>";
                    fwrite($plik,$value);
                    echo "<p>zapisano wynik</p>";
                    echo "<a class='link' href='index.html'>> Menu <</a> <br>";
                    echo "<a class='link' href='wyniki.php'>> Wyniki <</a>";
                    
                }
                else{
                    echo "<p>wystapil blad podczas zapisu wyniku</p>";
                    echo "<a class='link' href='zapisz.php'>> Sprobuj ponownie <</a>";
                }
                
            }
            else{
                echo "<p>Nie podano nazwy</p>";
                echo "<a class='link' href='zapisz.php'>> uzupelnij dane <</a>";
            }
        }
        else{
            echo "<p>wystapil blad podczas zapisu wyniku</p>";
            echo "<a class='link' href='zapisz.php'>> Sprobuj ponownie <</a>";
        }


    ?>
    </div>

</body>
</html>