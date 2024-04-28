function magazino(){
            var valoreInput = document.getElementById("nome").value;
            localStorage.setItem("valoreSalvato", valoreInput);
            var nome_utente= document.getElementById("NOME").innerHTML=
            document.getElementById("nome").value;

}
function ora_giornaliera(){
    let time = document.getElementById("current-time")
    setInterval(() =>{
    let d= new Date();
    let ora=d.getHours();
    if(ora>=0 && ora<12){
        let buongiorno="Buon Giorno"
        document.getElementById("Saluto").innerHTML=buongiorno;
        document.getElementById("Saluto").style.color="Yellow";
    }
    if(ora>12 && ora<16){
        let buonpomeriggio="Buon Pomeriggio"
        document.getElementById("Saluto").innerHTML=buonpomeriggio;
        document.getElementById("Saluto").style.color="Orange";
    }
    if(ora>16){
        let buonasera="Buona Sera"
       document.getElementById("Saluto").innerHTML=buonasera
       document.getElementById("Saluto").style.color="rgb(162,145,255)";
    }
    time.innerHTML= d.toLocaleTimeString()},1000)
}
function regole(){

    alert("Il gioco consiste nel far indovinare ad Indovinator un personaggio famoso tra quelli sottoelencati")
}
function personaggi(){
    alert("1) Alber Einstein.2)Napoleone Bonaparte.3)Mozart.4)Gesü Di Nazaret5)Maometto.6)Cristoforo Colombo.7)Nicola Tesla.8)Beethoven9)ElonMask10)Archimede.11)Madre Teresa.12)Cleopatra.13)Elisabetta I.14)Greta Thumberg.15)Laurel Hubbard.16)Margaret Thatcher.17)Oppenheimer.18)Giovanna d'Arco.19)Marilyn Monroe.20)Marie Curie")
}