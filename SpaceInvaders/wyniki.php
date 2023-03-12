<html>
<head>
	
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.6"> 
    <title>Space Invaders</title>
	
	<link rel="stylesheet"  href="style/style.css" />

</head>

<body>
   <div class="contener"> 
<!--
       <div class="place">
            <div class="number">1</div>
            <div class="info">
               <span>Nazwa</span>
               <span>Wynik</span>
            </div>
           
        </div>
-->
        
        <?php
            include "values.php";
                
            if(sizeof($wyniki) <= 2){
                echo "<div>Brak wynikow</div>";
            }
        
            $j=1;
            for($i = 0; $i < sizeof($wartosci) -2 ; $i++){
                if($i>=10){
                    break;
                }
                else{
                    echo "<div class='place'>
                            <div class='number'>".$j."</div>
                            <div class='info'>
                               <span>$nazwy[$i]</span>
                               <span>$wyniki[$i]</span>

                            </div>

                        </div> ";
                    $j++;
                }
            }
            
       
       
            
        ?>
        <div class="powrot">
            <a href="index.html"><img src="style/grafiki/back4.png" alt="Wróc do menu"></a>
        </div>
    </div>
    
    
    
</body>
</html>