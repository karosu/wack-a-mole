console.log('hello');

window.onload = function(){




    let mole = document.createElement('div');
    mole.classList.add('mole');

    function sendTheMole(){
        setInterval(()=>{
            // right now the mole simply appears in a different box once every second
            // instead, let's make it so the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            
            let boxes = document.getElementsByClassName('col');
            let randomBox = boxes[Math.floor(Math.random() * boxes.length)];
            
            randomBox.append(mole);
            
        }, 1000)
    }





    sendTheMole();


    
    
 
    console.log(document.getElementById('game-board'))















}// end window onload














