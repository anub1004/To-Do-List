if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
let inputbox = document.querySelector("input");
let list = document.querySelector('.listtask');
let au = document.querySelector('audio');
let dt=document.getElementById('dt');
function add() {
    if (inputbox.value === '' || dt.value ==='') {
        tasknotgive();
        alert("Please Enter Task");
    }
    else {
        taskadd();
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        
           let sdt=document.createElement('P');
           sdt.innerHTML=dt.value;
           sdt.classList.add('dt');
           li.appendChild(sdt);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("close");
        li.appendChild(span);
           
    }
    inputbox.value = "";
    saves();

}
list.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI' ) {
        e.target.classList.toggle("checked");
        saves();

        if (e.target.classList == 'checked') {
            playTaskCompleted();
        }
        
      
    }
    else if (e.target.tagName === 'SPAN') {
        taskdelete();
        e.target.parentElement.remove();
        saves();
    }
}, false);

function saves(){
    localStorage.setItem("data",list.innerHTML);
}
function show(){
    list.innerHTML=localStorage.getItem("data");
}
show();
function playTaskCompleted() {
    let msg = new SpeechSynthesisUtterance("Task Completed");

    msg.lang = 'en-US';
    msg.pitch = 1;
    msg.rate = 1;
    msg.volume = 1;
    window.speechSynthesis.speak(msg);
}
function taskadd() {
    let msg = new SpeechSynthesisUtterance("Task Added");
    window.speechSynthesis.speak(msg);
}
function taskdelete() {
    let msg = new SpeechSynthesisUtterance("Task deleted");
    window.speechSynthesis.speak(msg);
}
function tasknotgive() {
    let msg = new SpeechSynthesisUtterance("Please Enter a Task");
    window.speechSynthesis.speak(msg);
}


setInterval(check, 1000);


function check() {
    let now = new Date();

    let tasks = document.querySelectorAll('.listtask li');

    tasks.forEach(li => {
        let p = li.querySelector('.dt'); 
        if (!p) return;

        let inputDate = new Date(p.innerHTML);
        alt = false;
       
        if (
            now.getFullYear() === inputDate.getFullYear() &&
            now.getMonth() === inputDate.getMonth() &&
            now.getDate() === inputDate.getDate() &&
            now.getHours() === inputDate.getHours() &&
            now.getMinutes() === inputDate.getMinutes()
        ) {
            
            if (!li.classList.contains('notified')) {

         
                let msg = new SpeechSynthesisUtterance(li.firstChild.textContent);
                msg.lang='hi-IN'; 
                setTimeout(() => {
                    if (!alt) {
                        window.speechSynthesis.speak(  msg);
                        alt = true;
                    }
                }, 7000);



                au.play();
        
                li.classList.add('notified');
            }
        }

        else if (
            now.getFullYear() === inputDate.getFullYear() &&
            now.getMonth() === inputDate.getMonth() &&
            now.getDate() === inputDate.getDate() &&
            now.getHours() === inputDate.getHours() &&
            now.getMinutes() > inputDate.getMinutes()
        ) {
            li.remove();
        }
    });
}


