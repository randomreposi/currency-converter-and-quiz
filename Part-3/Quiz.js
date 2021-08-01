var points = 0;
var numOfQues=null;
var questionNumber=0;
var questionNum = document.getElementById('questionnum');
var ques=document.getElementById('question');
var anss=[
    document.getElementById('ans1'),
    document.getElementById('ans2'),
    document.getElementById('ans3'),
]
var point = document.getElementById('points');
var corrected = document.getElementById('correct');
questions=[
    'Which of these is the largest landlocked country in the world?',
    'What country has the largest Muslim population?',
    'What European country is divided into departments?',
    'Which of these countries is said to be shaped like an elephant’s head?',
    'In what country might one hear the song "Waltzing Matilda" frequently played?',
    'What is the name of the long, narrow country on South America’s Pacific coast?',
    'Which of these countries is considered the world’s oldest republic?',
    'Which is the world’s smallest fully independent nation?',
    'Which country participated at the Olympic Games in 1924 for the first time and won the gold medal in football (soccer)?',
    'Which country was called “the pearl of Africa” by Sir Winston Churchill?',
    'Which country in eastern Europe was formerly known as White Russia?',
    'Which country did the communist movement, Khmer Rouge, rule?',
    'In which country are the aflāj, an ancient system of water channels that have been designated a UNESCO World Heritage site, found?',
    'Which country was formerly known as French Somaliland and the French Territory of the Afars and Issas?',
    'Which African country is known as the "land of a thousand hills"?',
]
choices=[
    'a) Paraguay','b) Bolivia','c) Kazakhstan',
    'a) Libya','b) Iraq','c) Indonesia',
    'a) France','b) Germany','c) Sweden',
    'a) Zaire','b) Thailand','c) Australia',
    'a) Australia','b) Brazil','c) Paraguay',
    'a) Argentina','b) Ecuador','c) Chile',
    'a) Iceland','b) San Marino','c) Monaco',
    'a) Vanuatu','b) Kiribati','c) Vatican City',
    'a) Croatia','b) Uruguay','c) Liberia',
    'a) Uganda','b) Netherlands','c) Mozambique',
    'a) Belarus','b) Saint Lucia','c) North Macedonia',
    'a) Bulgaria','b) Cambodia','c) Sudan',
    'a) Jordan','b) Kuwait','c) Oman',
    'a) Mauritania','b) Djibouti','c) Malta',
    'a) Czech Republic','b) Rwanda','c) Georgia',
]
correct=[
    3,3,1,2,1,3,2,3,2,1,1,2,3,2,2,
]
while(numOfQues==null||numOfQues<1||numOfQues>15){
    numOfQues= prompt('How many Questions do you want to answer?\nPlease select a number between 1 and 15');
}
questionNum.innerHTML=`${questionNumber+1} out of ${numOfQues} Questions`;
document.getElementById('header').innerHTML='Points: ';
point.innerHTML='0';
ques.innerHTML=questions[0];
for(i=0;i<3;i++){
    anss[i].className="";
    anss[i].innerHTML=choices[i];
}
function answer(a){
    if(a==correct[questionNumber]){
        corrected.innerHTML='Congratulations! That is the correct answer!';
        points++;
    }
    else{
        corrected.innerHTML='Incorrect! The correct answer is '+choices[(questionNumber*3)+(correct[questionNumber]-1)];
    }
    point.innerHTML=points;
    questionNum.innerHTML=`${questionNumber+1} out of ${numOfQues} Questions`;
    questionNumber++;
    if(questionNumber<numOfQues){
        ques.innerHTML=questions[questionNumber];
        for(i=0;i<3;i++){
            anss[i].innerHTML=choices[(questionNumber*3)+i];
        }
    }
    else{
        ques.innerHTML=`You have answered all the Questions. You have acquired ${points} points.`
        anss[0].className="no";
        anss[1].className="no";
        anss[2].className="no";
    }
}