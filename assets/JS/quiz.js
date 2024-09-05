let all = []
document.addEventListener('DOMContentLoaded', function () {
    
    fetch("https://opentdb.com/api.php?amount=3&category=22&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(datas => {
            
                all.push(datas['results']['0']);
                all.push(datas['results']['1']);
                all.push(datas['results']['2']);
                all.push(datas['results']['3']);
                all.push(datas['results']['4']);
                return all
            
        })
    })
    console.log(all)

    // let quest = []
    // function question(int){
        
    //     quest.push(all[int]['question'])
    //     quest.push(all[int]['correct_answer'])
    //     quest.push(all[int]['incorrect_answers'][0])
    //     quest.push(all[int]['incorrect_answers'][1])
    //     quest.push(all[int]['incorrect_answers'][2])
    //     quest.push(all[int]['incorrect_answers'][3])
    //     return quest
    // }
    // let quet = quest
    // console.log(question(1))
 
    let start = document.getElementById("start");
    let next = document.getElementById("next");
    let logo = document.getElementById("logo");
    let guess = document.getElementById("bttn");
    
    let text2 = document.getElementById("text2");
    let refresh = document.getElementById("refresh");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let text5 = document.getElementById("text5");
    let text6 = document.getElementById("text6");
    let SCORE = document.getElementById("score");

    let text7 = document.getElementById("text7");
    let text8 = document.getElementById("text8");
    let text9 = document.getElementById("text9");
    let text10 = document.getElementById("text10");

    let text11 = document.getElementById("text11");
    let text12 = document.getElementById("text12");
    let text13 = document.getElementById("text13");
    let text14 = document.getElementById("text14");

    let bttn1 = []
    bttn1.push(text7, text8, text9, text10)
    console.log(bttn1)
    let bttn2 = []
    bttn2.push(text11, text12, text13, text14)

    function getRandomItem(arr) {

        return randomIndex = Math.floor(Math.random() * arr.length);
    }
    
    console.log(getRandomItem(bttn2));

    let answers = document.getElementById("buttons");
    
    for(var i = 0; i < answers.length; i++){
    var target = Math.floor(Math.random() * answers .length -1) + 1;
    var target2 = Math.floor(Math.random() * answers .length -1) +1;
    answers.eq(target).before(answers.eq(target2));
}

    start.addEventListener('click', () => {

        let v = 0
        
        start.classList.add("hidden");
        text2.classList.remove("hidden");
        text3.classList.remove("hidden");
        text5.classList.remove("hidden");
        text6.classList.remove("hidden");

        text.innerText = all[0]['question']
        text2.innerText = all[0]['correct_answer']
        text3.innerText = all[0]['incorrect_answers'][0]
        text5.innerText = all[0]['incorrect_answers'][1]
        text6.innerText = all[0]['incorrect_answers'][2]
        

        text2.addEventListener('click', () => {

            let BTTN1 = getRandomItem(bttn1)

        text2.classList.add("hidden");
        text3.classList.add("hidden");
        text5.classList.add("hidden");
        text6.classList.add("hidden");
        text7.classList.remove("hidden");
        text8.classList.remove("hidden");
        text9.classList.remove("hidden");
        text10.classList.remove("hidden");
            v = v + 1
            text.innerText = all[1]['question']
            text7.innerText = all[1]['correct_answer']
            text8.innerText = all[1]['incorrect_answers'][0]
            text9.innerText = all[1]['incorrect_answers'][1]
            text10.innerText = all[1]['incorrect_answers'][2] 

            text7.addEventListener('click', () => {

            text7.classList.add("hidden");
            text8.classList.add("hidden");
            text9.classList.add("hidden");
            text10.classList.add("hidden");
            text11.classList.remove("hidden");
            text12.classList.remove("hidden");
            text13.classList.remove("hidden");
            text14.classList.remove("hidden");
                v = v + 1
                text.innerText = all[2]['question']
                text11.innerText = all[2]['correct_answer']
                text12.innerText = all[2]['incorrect_answers'][0]
                text13.innerText = all[2]['incorrect_answers'][1]
                text14.innerText = all[2]['incorrect_answers'][2] 
    
                text11.addEventListener('click', () => {    
                text11.classList.add("hidden");
                text12.classList.add("hidden");
                text13.classList.add("hidden");
                text14.classList.add("hidden");
                v = v + 1
                text.innerText = "BRAVO tu as " + v + " points!"

                })
            })
            text12.addEventListener('click', () => {
            
                text.innerText = "NOOOOOOOOOOON"
        })
        text13.addEventListener('click', () => {
            
            text.innerText = "NOOOOOOOOOOON"
    })
    text14.addEventListener('click', () => {
            
        text.innerText = "NOOOOOOOOOOON"
    })    
        })
        text8.addEventListener('click', () => {
        
            text.innerText = "NOOOOOOOOOOON"
    })
    text9.addEventListener('click', () => {
        
        text.innerText = "NOOOOOOOOOOON"
})
text10.addEventListener('click', () => {
        
    text.innerText = "NOOOOOOOOOOON"
})

    })

    text3.addEventListener('click', () => {
        
        text.innerText = "NOOOOOOOOOOON"
})

text5.addEventListener('click', () => {
        
    text.innerText = "NOOOOOOOOOOON"
})

text6.addEventListener('click', () => {
        
    text.innerText = "NOOOOOOOOOOON"
})


