

window.onload = function(){

 
 

    let mole = document.createElement('div');
    mole.classList.add('mole');

    let displayScore = document.getElementById('score');
    let score = 110;


    function sendTheMole(){
            mole.remove();
            
           let randomNumWithGlobalScope = (Math.floor(Math.random() * 2000)) + 500;

           if(randomNumWithGlobalScope > 1800){
            let x = setTimeout(sendTheMole, randomNumWithGlobalScope) 
               return;
           }
            // right now the mole simply appears in a different box once every second
            // instead, let's make it so the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            
            let boxes = document.getElementsByClassName('col');
            let randomBox = boxes[Math.floor(Math.random() * boxes.length)];
            
            randomBox.append(mole);
            if (score <= 0) {
                document.querySelector('h1').innerText = "You lose!";
                clearInterval(x);}
                else if (score >= 200) {
                    
                    document.querySelector('h1').innerText = "You win!";
                    clearInterval(x);
                }
            

            score = score - 10;
            displayScore.innerText = score;

            

        
            setTimeout(sendTheMole, randomNumWithGlobalScope) 
    }





    sendTheMole();


    
    
 
    console.log(document.getElementById('game-board'))



mole.onclick = function(){
    document.getElementsByClassName('h1')
   mole.remove();
   score = score + 20;
   displayScore.innerText = score;
   
  
}













}// end window onload