<!DOCTYPE html5>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.6">
    <title>Space Invaders</title>

    <link rel="stylesheet" href="style/style.css">
    <script>
        
        function spr(){
            var obj = document.getElementById("nazwa");
            var alrt = document.getElementById("alertWindow");
            var submit = document.getElementById("submit");
            
            if((obj.value.search(";")!= -1) || (obj.value.search("<")!= -1) || (obj.value.search(">")!= -1) ){
                 
                obj.classList.add("zleDane");
                alrt.style.display="block";
                submit.setAttribute("disabled","disabled");
                 //alert("zle dane");
                 return true;
            }
            else{
                obj.classList.remove("zleDane");  
                alrt.style.display="none";
                submit.removeAttribute("disabled");
//alert("dobre dane");
                return false;
            }
        }
        function zleDane(obj){
           
        }
        
    </script>
</head>

<body>
   <?php 
    if(!isset($_COOKIE["wynik"])){
        header("location: index.html");
    }
    
    ?>
    <div id="zapiszWynik" class="contener">
        <form class="form" action="zapisano.php" method="post">
            <p>Twój wynik to: <span><?php if(isset($_COOKIE["wynik"])) echo $_COOKIE["wynik"]; ?></span></p>
            <label>Podaj swoja nazwe: <input onkeyup="spr()" id="nazwa" name="nazwa" class="input" type="text" ></label>
            <input id="submit" name="submit" class="submit" type="submit" value="zapisz" >
        </form>
        
        <div class="alert" id="alertWindow">Nazwa nie może nawierać następujących znaków: " ;  &#60; &#62; ". </div>
        
        <script>
           
            
        
        </script>
   </div>
</body></html>
