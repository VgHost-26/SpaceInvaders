window.onbeforeunload = function(){
  return true;
};

function pozycja(){
  
    if(event.clientX-przesuniecie>=0 && event.clientX-przesuniecie<=480){
        statek.style.left=event.clientX-przesuniecie+"px";
    }
    else if(event.clientX-przesuniecie<=0){
        statek.style.left=0+"px";
    }
    else if(event.clientX-przesuniecie>=480){
        statek.style.left=480+"px";
    }
    return event.clientX-przesuniecie;
}

function resize(){
    
    szerokosc_okna = window.innerWidth;
    przesuniecie = (szerokosc_okna/2) - 250;
    pole.style.transform="translate("+przesuniecie+"px,100px)";
    
    if(szerokosc_okna<1000){
        info.style.transform= "translate("+(przesuniecie - 5) +"px,105px)";
        info.style.width=500+"px";
        info.style.margin="5px";
    }
    else{
        info.style.transform= "translate("+ (przesuniecie + 505) + "px,-410px)";
        info.style.width=250+"px";
    }
   
}


/*function test(){
    pocisk1 = new Pocisk();
    var pole = document.getElementById("pole");
    var pocisk = document.createElement("div");
    //var pocisk2 = document.createElement("div");
    
    pocisk.setAttribute("class","pocisk");
    //pocisk2.setAttribute("class","pocisk");
    
    pole.appendChild(pocisk);
    //pole.appendChild(pocisk2);
    
    pocisk.style.left=pocisk1.pozX+7+"px";
   // pocisk2.style.left=50+"px";
    
    var l = setInterval(lec,1);
    
    if(pocisk1.pozY<=5){
       
        
    }
    
    function lec(){
        if(pocisk1.pozY<=5){
            pole.removeChild(pocisk);
            clearInterval(l);
           

        }
        else{
            
            pocisk1.pozY-=2;
            pocisk.style.top=pocisk1.pozY+"px";
    }
}
    

    
    
    //alert(pocisk1.pozX+" "+pocisk1.pozY);
    
   // if(delete pocisk1){
    //    alert("usunieto");
       
   // }
   // alert(pocisk1.pozX+" "+pocisk1.pozY+".");
}*/


            /* ---- deklaracje: ---*/
    var statek = document.getElementById("statek");
    var pole = document.getElementById("pole");
    var poleI = document.getElementById("invaders");
    var invaders =document.getElementsByClassName("invader");
    //var invaders = Array.prototype.slice.call(invadersTMP); 
    var szerokosc_okna = window.innerWidth;
    var przesuniecie = (szerokosc_okna/2) - 250;
   // var pociski = [];
    var pocisk;
    var pociski_Inv = [55];
    var losy = [55]; 
    var zycia = 3; 
    var trafieni = 0; 
    var leci_Inv = [55];
    var pauza = false;
    var predkosc = 5;
    var runda = 1;
    var punkty = 0; 
    var mnoznik = 1;
    var seria = 0
    var szerokosc = parseInt(pole.style.width.substring(0 , pole.style.width.length-2));
    var leci=true;
    var bufor =true;

    const settings = window.localStorage.getItem("settings");

    pole.style.transform="translate("+przesuniecie+"px,100px)";
    if(szerokosc_okna<1000){
        info.style.transform= "translate("+przesuniecie+"px,100px)";
        info.style.width=500+"px";
    }
    else{
        info.style.transform= "translate("+ (przesuniecie + 500) + "px,-410px)";
        info.style.width=250+"px";
    }
    
    for(var i=0;i<55;i++){
        leci_Inv[i]=false;
        losy[i]=i;
//        pociski_Inv[i] = document.createElement("div");
//        pociski_Inv[i].setAttribute("class","pocisk_Inv");
        
    }
    //invaders[54];
    //alert(invaders.length+" "+invaders.pop()+" "+invaders.length);
   // alert(invaders[40].style.position);
    /*for(var i=0;i<55;i++){
        pomin[i]=0;
    }*/
     

    zycie.value=zycia;
    //invaders[1].style.backgroundColor="red";
    //alert("halo"+invaders[1].style.backgroundColor);
    //alert("deklaracja");
window.onload = invNaPozycje();
    function invNaPozycje(){
    for(var i=0;i<55;i++){
        invaders[i].style.left = (i*35)+55+"px";
        invaders[i].style.top ="10px";
        invaders[i].style.display="inline";
        invaders[i].style.visibility="hidden";
        if(i>10&&i<=21){
            invaders[i].style.top ="50px";
            invaders[i].style.left = ((i-11)*35)+55+"px";
        }
        if(i>21&&i<=32){
            invaders[i].style.top ="90px";
            invaders[i].style.left = ((i-22)*35)+55+"px";
        }
        if(i>32&&i<=43){
            invaders[i].style.top ="130px";
            invaders[i].style.left = ((i-33)*35)+55+"px";
        }
        if(i>43&&i<=55){
            invaders[i].style.top ="170px";
            invaders[i].style.left = ((i-44)*35)+55+"px";
        }
        
        
            //invaders[i].style.left = (i*65)+"px";
            //invaders[i].style.top = i*10;
            
        
        
    }
    inicjacja();
}
        /*--------------------------------------------------*/
    function back(){
        
       // window.location.href="index.html";
        window.location.href="zapisz.php";
    }
    function nastepnaRunda(){
        //alert("next round");
        runda++;
        bufor=true;
        pociski_Inv = [55];
        for(var i=0;i<55;i++){
            leci_Inv[i]=false;
            losy[i]=i;
           // pociski_Inv[i] = document.createElement("div");
          //  pociski_Inv[i].setAttribute("class","pocisk_Inv");
        }
        pole.removeAttribute("onmousedown");
        pole.setAttribute("onmousedown","strzal()");                     
        pole.removeChild(win_alert);
        
        if(leci){
            pole.removeChild(pocisk);
        }
        
        //pociski = [];
        
        trafieni = 0;
        leci=true;
        pauza = false;
        END=false;
                
        invNaPozycje();
        
    }
    
//    window.BeforeLoadEvent = function setSettings(){
//        document.addEventListener("onkeydown",sprKey);
//    }
    function sprKey(){
        alert(event.keyCode);
    }

    function inicjacja(){
        var i=0;
        rundaI.value=runda;
        pole.removeAttribute("class");
        //leci=true;
        ps=setInterval(pojawSie,50)
        function pojawSie(){
            if(!pauza){
                if(i>=55){
                    clearInterval(ps);
                    bufor=false;
                    ruch();
                    leci=false;
                    clearInterval(start);
                    start = setInterval(strzal_Inv,(500));
                    
                }
                else{
                    invaders[i].style.visibility="visible";
                    i++;
                }
            }
        }
     
        
    }

    var END=false;
    function koniec(){
        if(trafieni==55){
           // alert("wygrana");
            wygrana();
           // document.cookie=punkty;
            return true;
        }
        else if(spr2() || zycia<=0){
           // alert("przegrana");
            przegrana();
            //document.cookie=punkty;
            return true;
        }
        else return false;
        
    }

// --------Pauza
    var pauza_alert = document.createElement("div");
    pauza_alert.setAttribute("class","alert");
    pauza_alert.innerHTML="Pauza";
    var set =false;

    function pauzaF(){
        
        if(!koniec() || !END){
            if(pauza==true){
                pole.appendChild(pauza_alert);
                set=true;

            }
            else if(set==true && pauza==false){
                pole.removeChild(pauza_alert);
            }
        }
    }
//---------

    var win_alert = document.createElement("div");
    win_alert.setAttribute("class","alert");
    win_alert.innerHTML="<h2>Wygrana!</h2><h5>Kliknij by kontynuowac</h5>";

    function wygrana(){
       // alert("win");
        if(!END){
            
            pole.appendChild(win_alert);
            pole.setAttribute("onmousedown","nastepnaRunda()");
            //nastepnaRunda();
            END=true;
        }
        //invNaPozycje();
    }
    function przegrana(){
        //alert("lost");
        if(!END){
            window.onbeforeunload = null;
            pole.setAttribute("class","trafienie");
            wybuch();
            var lost_alert = document.createElement("div");
            lost_alert.setAttribute("class","alert");
            lost_alert.innerHTML="<h2>Przegrana</h2><h5>KLiknij by wrocic do menu</h5>";
            pole.appendChild(lost_alert);
            pole.setAttribute("onmousedown","back()");
            END=true;
            document.cookie="wynik="+punkty;
        }
        
    }

    function wybuch(){
        statekImg.setAttribute("src","gra/grafiki/explosion.gif");
        statek.style.width="40px";
        statek.style.height="40px";
        setTimeout(zniknij,1000);
        function zniknij(){
            statek.style.display="none";
        }
    }
    function ruch(){
        var r=setInterval(ruch2, 105 - runda * 5);
        //alert("start");
        var ile=9;
        var ile2=1;
        function ruch2(){
            //input4.value=invaders[53].style.display;
            if(koniec()){
                clearInterval(r);
            }
            if(pauza==false){
                if(spr2()==true){  // na dol
                    clearInterval(r);
                    //alert("przegrana");
                }
                else if(ile%20==0){
                    for(var i=0;i<55;i++){ 
                        if(invaders[i].style.display=="none"){
                            ile2++
                        }
                        else{
                            invaders[i].style.top = parseInt(invaders[i].style.top.substring(0 , invaders[i].style.top.length -2)) + 10 +"px";
                            ile2++;
                        }
                    }
                }
                else if(ile2%2==0){ //w prawo
                   for(var i=0;i<55;i++){
                       invaders[i].style.left = parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2)) - predkosc +"px"; 
                       //invaders[i].style.top= 
                   } 
                }
                else{
                    for(var i=0;i<55;i++){ // w lewo
                        invaders[i].style.left = parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2)) + predkosc +"px"; 
                       //invaders[i].style.top= 
                    }
                }


                ile++;
            }
        }
    }
    function spr2(){  //pozycja onvaderów vs pozycja gracza
        
        for(var i=0;i<55;i++){
            
            if(parseInt(invaders[i].style.top.substring(0 , invaders[i].style.top.length -2)) + 25 >= 450 ){
               return true;
            }
            
        }
        return false;
    }
// sprawdzanie trafienia
    /*function spr(kt){

        for(var i=0; i<55; i++){
            //input2.value="i="+i;
            /*if(pomin[i]==1){
                //alert(pomin[i]+" "+i);
                continue;
            }
            else 
            if(parseInt(pociski[kt].style.left.substring(0 , pociski[kt].style.left.length -2)) >= parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2 )) && parseInt(pociski[kt].style.left.substring(0, pociski[kt].style.left.length -2)) <= parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2))+30 && parseInt(pociski[kt].style.top.substring(0, pociski[kt].style.top.length -2)) <= parseInt(invaders[i].style.top.substring(0, invaders[i].style.top.length - 2))+25 &&  parseInt(pociski[kt].style.top.substring(0, pociski[kt].style.top.length -2)) >= parseInt(invaders[i].style.top.substring(0, invaders[i].style.top.length - 2))){
                //alert(pomin[i]+" "+i+"!");
                return i;
            }

        }
        return -1;

    }*/

    function spr(){

        for(var i=0; i<55; i++){
            //input2.value="i="+i;
            /*if(pomin[i]==1){
                //alert(pomin[i]+" "+i);
                continue;
            }
            else */
            if(parseInt(pocisk.style.left.substring(0 , pocisk.style.left.length -2)) >= parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2 )) && parseInt(pocisk.style.left.substring(0, pocisk.style.left.length -2)) <= parseInt(invaders[i].style.left.substring(0 , invaders[i].style.left.length -2))+30 && parseInt(pocisk.style.top.substring(0, pocisk.style.top.length -2)) <= parseInt(invaders[i].style.top.substring(0, invaders[i].style.top.length - 2))+25 &&  parseInt(pocisk.style.top.substring(0, pocisk.style.top.length -2)) >= parseInt(invaders[i].style.top.substring(0, invaders[i].style.top.length - 2))){
                //alert(pomin[i]+" "+i+"!");
                return i;
            }

        }
        return -1;

    }


    function strzal(){
        if(!koniec() || pauza==true){
            if(leci==false){
                leci=true;
                //pociski.push(document.createElement("div"));
                pocisk=document.createElement("div");
                //var ile=pociski.length-1;
                //pociski[ile].setAttribute("class","pocisk");
                pocisk.setAttribute("class","pocisk");
                //pole.appendChild(pociski[ile]);
                pole.appendChild(pocisk);

                //pociski[ile].style.left=pozycja()+7+"px";
                pocisk.style.left=pozycja()+7+"px";
                var y = 450;
                var l = setInterval(lec,1);

                function lec(){
                    // spr(ile); //testy
                   
                    if(koniec()){
                        clearInterval(l);
                    }
                    else if(pauza==false){
                         if(y<=5){
                            //alert(spr(ile));

                            clearInterval(l);
                           //pole.removeChild(pociski[ile]);
                            pole.removeChild(pocisk);
                            leci=false;  
                            mnoznik = 1;
                            seria=0;

                        }
                        else if(spr()!= -1){     //trafienie przeciwnika
                             var Vspr = spr();

                            clearInterval(l);
                            leci=false;
                            invaders[Vspr].style.display="none"; 
                            invaders[Vspr].style.left="600px"; //wyrzucanie poza pole
                            
                            
                            //-----TEST
                            //alert(Vspr+" "+losy[losy.indexOf(Vspr)])
                            if(losy[losy.indexOf(Vspr)]==losy.length-1){
                               // alert("last "+losy[losy.length-1]);
                                losy.pop();
                               // alert("last "+losy[losy.length-1]);
                            }
                            else{
                               // losy[Vspr]=losy.pop();
                                losy[losy.indexOf(Vspr)]=losy.pop();
                            }//alert(losy[Vspr]);
                            
                            //------
                            //pole.removeChild(pociski[ile]);
                            pole.removeChild(pocisk);
                            trafieni++;
                            
                            seria++;
                            punkty+=(10*mnoznik);
                            if(seria%5==0){
                                mnoznik++;
                            }
                           
                           
                           // predkosc+=0.1;
                            
                            traf.value=trafieni;
                            zostalo.value=55-trafieni;
                            punktyI.value = punkty;
                            //poleI.removeChild(invaders[temp]); // usuwanie kłuci sie ze sprawdzaniem w funkcji spr()
                           // pomin[temp]=1;
                           // reset();


                        }
                        else{
                            //alert(y);
                            y-=2;

                            //pociski[ile].style.top=y+"px";
                            pocisk.style.top=y+"px";
                        }
                    }
                }
            }
        }
    }
   // var testCount=0;
   // var testCount2=0;
    /*function reset(){
        clearInterval(start);
        start = setInterval(strzal_Inv,(55/*-trafieni)*10);
    }*/
    var start ;
    function strzal_Inv(){
        if(!koniec() && !pauza && !bufor){
            var rand = Math.floor(Math.random()*(55 - trafieni ));
            
           // test.value=rand+" "+losy[rand]+" "+losy.length;
            var r = losy[rand];
           // test2.value=r + " " + losy[rand]+" "+losy.length;
            
           // testCount2++;
           // test3.value=testCount+" "+testCount2;
            
            if(!leci_Inv[r]){
               // test4.value=r + " " + losy[rand]+" "+losy.length;
                leci_Inv[r]=true;
                 
                
            
                if(invaders[r].style.display!="none"){
                    //pociski_Inv.push(document.createElement("div"));
                    pociski_Inv[r]=document.createElement("div");
                    //var ile=pociski_Inv.length-1;
                    pociski_Inv[r].setAttribute("class","pocisk_Inv");
                    //pole.appendChild(pociski_Inv[ile]);
                    pole.appendChild(pociski_Inv[r]);
                   // testCount++;
                    //test3.value=testCount;
                   // alert(r);

                    var y = parseInt(invaders[r].style.top.substring(0, invaders[r].style.top.length -2));
                    var x = parseInt(invaders[r].style.left.substring(0, invaders[r].style.left.length -2));
                    
                    //pociski_Inv[ile].style.left=x+10+"px";
                   // pociski_Inv[ile].style.top=y+"px";

                    pociski_Inv[r].style.left=x+10+"px";
                    pociski_Inv[r].style.top=y+"px";

                    var l = setInterval(lec, 5);
                    
                    function lec(){

                                if(koniec()){
                                    leci_Inv[r]=false;
                                    clearInterval(l);
                                    pole.removeChild(pociski_Inv[r]);
                                    pociski_Inv[r]=null;
                                }
                                else if(pauza==false){
                                        if(y>=500){
                                            leci_Inv[r]=false;
                                            clearInterval(l);
                                            //alert("koniec lotu");
                                           // pole.removeChild(pociski_Inv[ile]);  
                                            pole.removeChild(pociski_Inv[r]);
                                            pociski_Inv[r]=null;
                                            //leci_Inv[i]=false;

                                        }
                                        else if(x >= parseInt(statek.style.left.substring(0, statek.style.left.length -2))-15 && x <= parseInt(statek.style.left.substring(0, statek.style.left.length -2))+10  && y>=450-10 && y<=450+10){     //trafienie gracza
                                            leci_Inv[r]=false;
                                            clearInterval(l);
                                             
                                           // alert("trafiony");
                                            //pole.removeChild(pociski_Inv[ile]);
                                            pole.removeChild(pociski_Inv[r]);
                                            pociski_Inv[r]=null;
                                           
                                            zycia--;
                                            mnoznik = 1;
                                            seria=0;
                                            zycie.value=zycia;
                                            pole.setAttribute("class","trafienie");
                                            
                                            if(zycia>0){
                                               
                                                var zmien = setTimeout(color,500);
                                            
                                                function color(){
                                                    if(zycia>0){
                                                        pole.removeAttribute("class");

                                                    }
                                                    clearTimeout(zmien);
                                                }
                                            }
                                            

                                        }
                                        else{
                                            //alert("leci");
                                            y+=2;

                                            pociski_Inv[r].style.top=y+"px";
                                        }
                                }

                    }
                }
            }
            
        }
    }



