var start = document.getElementById("start")
var conti = document.getElementById("continue")

start.addEventListener('click', () => {

    start.classList.add("hidden")
    conti.classList.remove("hidden")

    let i = 0

        console.log(i);

        conti.addEventListener('click', () => { 

            i++;
            console.log(i) 
            if(i == 5){
                console.log("GG ON ARRETE TOUT")
                i = 0
            }
        });
    
        

       



});