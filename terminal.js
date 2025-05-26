const str = "To get started; type help and press Enter!!";
const body = document.body;

//Container id is stored
const container = document.getElementById('container') 

// All text fields are selected 
const fixedText1 = document.getElementById('fixedText1');
const fixedText2 = document.getElementById('fixedText2');
const fixedText3 = document.getElementById('fixedText3');
const animatedText1 = document.getElementById('animatedText1');
const runningText=document.querySelector('#runningText');

// Text field entered for terminal
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const termText1 = document.getElementById('termText1');
const termText2 = document.getElementById('termText2');
const termText3 = document.getElementById('termText3');
//span tag which text will be change for every function call
let editableText=document.querySelector("#editableTaxt");

//Input field text
const textField = document.getElementById('textField')

//Loading cursor element for display
const cursor = document.getElementById('cursor');

// terminal load text
function loadTerminalText() {
    setTimeout(() => {
        fixedText3.style.visibility="visible";
        text1.innerHTML = " Saini@Ankit's-Victus ";
        text2.innerHTML = " (main) ";
        text3.innerHTML = " ~> ";
        
        // Select text present in the input tag
        // setTimeout(()=>{
            textField.value = "help";
            textField.focus();
            textField.select();
        // },2000)
        
    }, 2000);
}

function cursorAnimation(){
    // Set the cursor's initial visibility
    cursor.style.visibility = 'visible';
    
    // Start blinking the cursor
    let count=0;
    let cursorStop = setInterval(() => {
        cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
        count++;
        if(count==4)
            clearInterval(cursorStop);
    }, 400);
    cursor.style.visibility = 'hidden';
    loadTerminalText();
}

function animText(str1) {
    let i = 0;
    cursor.style.visibility = 'visible';
    let textLoad = setInterval(() => {
        runningText.innerHTML += str1.charAt(i); 
        i++;
        if (i >= str1.length) {
            clearInterval(textLoad);
            cursorAnimation();
        }
    }, 40);
}

function startAnimation(){
    animText(str);
}

// Create random background color
function selectColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return [r,g,b];
}

let color1 = selectColor();
let color2 = selectColor();

const linearGradientPositions = ["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"];
let position = linearGradientPositions[Math.floor(Math.random()*linearGradientPositions.length)];

body.style.background = `linear-gradient(${position}, rgb(${color1[0]} , ${color1[1]} , ${color1[2]}), rgb(${color2[0]} , ${color2[1]} , ${color2[2]}))`;

// Different actions based on different commands
// function 

// async function helpFunction(){
//     fixedText2.style.display = 'none';
//     const langURL = greeting.json;
//     const responseLang = await fetch(langURL);
//     const langReturn = await responseLang.json();

//     let randomNo = Math.floor(Math.random()*langReturn.length);

//     let strContent = `${langReturn[randomNo].hello} (${langReturn[randomNo].language}) Please choose from the following list of available commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, sama, clear, new, man, home`;
//     animatedText1.innerHTML = '';
//     termText1.innerHTML = shashwat@tewari's-Victus';
//     termText2.innerHTML = (main);
//     termText3.innerHTML = ~>;


//     animText(strContent);
// }

// function helpFunction() {
//     fixedText2.style.display = 'none';

//     fetch('greeting.json')
//         .then(responseLang => responseLang.json())
//         .then(langReturn => {
//             const randomNo = Math.floor(Math.random() * langReturn.length);
//             let strContent = ${langReturn[randomNo].hello} (${langReturn[randomNo].language}) Please choose from the following list of available commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, sama, clear, new, man, home;
//             animText(strContent);
//         })
//         .catch(error => {
//             console.error('Error fetching or processing the JSON:', error);
//         });
// }
///////////////////////////
// function nextTerminalText(){
//     text1.innerHTML = " Saini@Ankit's-Victus ";
//     text2.innerHTML = " (main) ";
//     text3.innerHTML = " ~> ";
// }
// function animatedText(str1) {
//     let i = 0;
//     let textLoad = setInterval(() => {
//         animatedText1.innerHTML += str1.charAt(i); 
//         i++;
//         if (i >= str1.length) {
//             clearInterval(textLoad);
//         }
//     }, 40);
// }
// function next(){
//     console.log();
//     nextTerminalText();
// //     // animatedText1.style.display="block";
//     // let helpString="Creating innovative solutions is key to driving progress in any field. By integrating technology and creativity, we can address complex challenges and improve everyday experiences. Collaboration and continuous learning are essential to staying ahead in a rapidly evolving landscape. Harnessing data and insights allows for informed decision-making, while embracing adaptability ensures resilience in the face of change. The future is shaped by those who dare to innovate, challenge the status quo, and envision possibilities beyond the present. Let’s commit to building a brighter, more sustainable future through thoughtful innovation and strategic thinking, making a positive impact on society."
//         // animatedText(helpString);
// }

async function randomHelloFunction(){
    const url="greeting.json";
    let response= await fetch(url);
    let lang=await response.json();
    let randomNumber=Math.floor(Math.random()*lang.length);
    return [lang[randomNumber].hello,lang[randomNumber].language];

}



 async function helpFunction(text){
    editableText.innerHTML=`Command executed ${text}`;
    let langUsed=await randomHelloFunction();
    let helpString=`${langUsed[0]} (${langUsed[1]}) Creating innovative solutions is key to driving progress in any field. impact on society.`
    runningText.innerHTML="";
    animText(helpString);
    
    // next();
    // animatedText1.style.display="block";
    //     let helpString="Creating innovative solutions is key to driving progress in any field. By integrating technology and creativity, we can address complex challenges and improve everyday experiences. Collaboration and continuous learning are essential to staying ahead in a rapidly evolving landscape. Harnessing data and insights allows for informed decision-making, while embracing adaptability ensures resilience in the face of change. The future is shaped by those who dare to innovate, challenge the status quo, and envision possibilities beyond the present. Let’s commit to building a brighter, more sustainable future through thoughtful innovation and strategic thinking, making a positive impact on society."
    //     animatedText(helpString);
}
async function ankitPhoto(text){
    editableText.innerHTML=`Command executed ${text}`;
    let langUsed=await randomHelloFunction();
    let helpString=`${langUsed[0]} (${langUsed[1]}) Here is the photo of ankit saini. MERN proficient and C++ proficient.`;
    runningText.innerHTML="";
    animText(helpString);
    
    // Create an image element
    let img = document.createElement('img');
    img.src = 'WhatsApp Image 2025-02-03 at 10.30.48 PM.jpeg'; 
    img.alt = 'Ankit Saini';
    img.style.width = '200px'; // Adjust the size as needed
    img.style.height = '300px';

    // Append the image to the runningText element
    runningText.appendChild(img);
    
    // next();
    // animatedText1.style.display="block";
    //     let helpString="Creating innovative solutions is key to driving progress in any field. By integrating technology and creativity, we can address complex challenges and improve everyday experiences. Collaboration and continuous learning are essential to staying ahead in a rapidly evolving landscape. Harnessing data and insights allows for informed decision-making, while embracing adaptability ensures resilience in the face of change. The future is shaped by those who dare to innovate, challenge the status quo, and envision possibilities beyond the present. Let’s commit to building a brighter, more sustainable future through thoughtful innovation and strategic thinking, making a positive impact on society."
    //     animatedText(helpString);
}
let resumeFunction=(async (text)=>{
    editableText.innerHTML=`Command executed ${text}`;
    let langUsed=await randomHelloFunction();

    let resumeString=`${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get me resume here:https://drive.google.com/file/d/1pCDqRapk9GGCsM_OwOZR_gSNetbq1qXt/view?usp=drivesdk. Hold on, opening in a new tab. Please check if the pop-ups are not blocked. `
    runningText.innerHTML="";
    animText(resumeString);
    setTimeout(() => {
        window.open('https://drive.google.com/file/d/1BSy-OUcVxI7xzIqID18HLri2m_TLSVQR/view?usp=drivesdk', '_blank');
    }, 7000);
})
//bio function
let bioFunction = (async (text) => {
    editableText.innerHTML =` Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let bioString = `${langUsed[0]} (${langUsed[1]})!I'm Ankit Saini, a final-year B.Tech student specializing in Computer Science. I'm passionate about technology and innovation, and I'm dedicated to honing my skills in software development and problem-solving. `;
    animText(bioString);
});

//linkedIn 
let linkedinFunction = (async (text) => {
    editableText.innerHTML = `Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let linkedinString = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get my linkedin profile here: https://www.linkedin.com/in/ankit-saini-85284a267/. Hold on, opening in a new tab. Please check if the pop-ups are blocked`;
    animText(linkedinString);
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/ankit-saini-85284a267', '_blank');
    }, 7000);
});
// random text function
let randomFunction=(async (text)=>{
    editableText.innerHTML = `Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let random="random.json";
    let random_response=await fetch(random);
    let randomText=await random_response.json();
    let randomNumber=Math.floor(Math.random()*randomText.length);
    let random_string=`${langUsed[0]} (${langUsed[1]})!! ${randomText[randomNumber].response}`;
    animText(random_string);
})
//github link function
let githubFunction = (async (text) => {
    editableText.innerHTML = `Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let githubString = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get my github profile here: https://github.com/shrey-s12.hold on.`;
    animText(githubString);
    setTimeout(() => {
        window.open('https://github.com/ankitsaini85', '_blank');
    }, 6000);
});
//contact me function
let contactFunction = (async (text) => {
    editableText.innerHTML = `Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let contactString = `${langUsed[0]} (${langUsed[1]})! To contact Ankit Saini, you can reach out via email or phone: Email: nareshsaini85879@gmail.com or ankitsaini28052003@gmail.com Phone: 7500057688`;
    animText(contactString);
}
);
// current date function
let dateFunction = (async (text) => {
    editableText.innerHTML =` Command Executed: ${text}`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let currdate = new Date();

    let dateString = `${langUsed[0]} (${langUsed[1]})! The Current Date is : ${currdate.toLocaleString()}`;
    animText(dateString);
});
//error function
let error=["Oops! Something went wrong.",
   " Uh-oh! We hit a snag.",
   " Whoops! An error occurred.",
   " Oh no! There's a glitch.",
   " Yikes! Something's off.",
   " Oopsie! That did not work.",
   " Darn! We encountered an issue.",
    "Oh snap! A problem popped up.",
    "Oops! Looks like we missed something.",
   " Uh-oh! Something's not right."
];

let errorFunction = (async (text) => {
    editableText.innerHTML = `Command Executed: ${text} !!`;
    let langUsed = await randomHelloFunction();
    runningText.innerHTML = "";
    let randomNumber=Math.floor(Math.random()*error.length);
    let errorString =` ${langUsed[0]} (${langUsed[1]})! ${error[randomNumber]} `;
    animText(errorString);
});


///////////////////////////////////////
function checkInputValue(input){
    fixedText2.style.display="none";
    fixedText3.style.visibility="hidden";
    switch(input){
        case 'help':
            helpFunction(input);
            break;
        case 'resume':
            resumeFunction(input);
            break;
        case 'bio':
            bioFunction(input);
            break;
        case 'linkedin':
            linkedinFunction(input);
            break;
        case 'random':
            randomFunction(input);
            break;
        case 'github':
            githubFunction(input);
            break;
        case 'contact':
            contactFunction(input);
            break;
        case 'date':
            dateFunction(input);
            break;
        case 'projects':
        case 'clear':
        case 'new':
        case 'ankit photo':
            ankitPhoto(input);
            break;

        case 'home':
            comingsoonFunction(input);
            break;
        default:
            errorFunction(input);
            break;
    }
}


// Functions for performing various input commands
function inputCommand(e){
    if(e.key == "Enter")
        checkInputValue(textField.value);
}

container.addEventListener('animationend', startAnimation);
textField.addEventListener('keypress', inputCommand);