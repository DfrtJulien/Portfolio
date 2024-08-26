const PASSIONP = document.querySelector('#passion');
console.log(PASSIONP);

let i = 0;


const SHOWPASSION = function(passion){
    var passion = ["Passioné d'Histoire", "Passioné de jeux vidéo", "Developpeur web"];
    if(i == passion.length){
        i = 0;
    } else {
        PASSIONP.innerHTML = `<strong>${passion[i]}</strong>`;
        i++;
    }
}

setInterval(SHOWPASSION, 1000);