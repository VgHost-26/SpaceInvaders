<?php
    $zawartosc = file_get_contents("gra/wyniki.txt");
    if(!$zawartosc){
        echo "<p>wystapil blad podczas zapisu wyniku</p>";
        echo "<a class='link' href='index.html'>> Sprobuj ponownie <</a>";
        exit();
    }
    else{
        $wartosci=[];
        $wyniki=[];
        $nazwy=[];
        $daty=[];
        $wartosci=explode("\n",$zawartosc);
        for($i = 0; $i < sizeof($wartosci); $i++){
            $wartosci[$i]=trim($wartosci[$i]);

            $wyniki[$i] = substr($wartosci[$i], strpos($wartosci[$i], "<") +1, (strpos($wartosci[$i], ">") - strpos($wartosci[$i], "<")-1 ));
            $nazwy[$i] =  substr($wartosci[$i], 0, strpos($wartosci[$i], "<"));
            $daty[$i] =   substr($wartosci[$i],  strpos($wartosci[$i], ">")+1);
           // echo $nazwy[$i].":".$wyniki[$i]." ".$daty[$i]."<br>";
        }
    }
?>