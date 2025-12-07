const socket=io("ws://localhost:3000");


const form=document.querySelector("form");
const p=document.querySelector("p");
const input=document.querySelector("input");

function sendMessage(e){
    e.preventDefault();
    const input=document.querySelector("input");
    if(input.value){
        socket.emit("message",input.value)
        input.value="";
    }
}

form.addEventListener("submit",sendMessage);

socket.on("message",(data)=>{
    console.log("Message from server ",data)
    const ul =document.querySelector("ul");
    const li=document.createElement("li");
    li.textContent=data;
    ul.appendChild(li);
})

input.addEventListener("keypress",()=>{
    socket.emit("activity",`${socket.id}`);
})
let timer;
socket.on("activity",(data)=>{
    clearTimeout(timer)
    
    p.innerText=`${data.substring(0,5)} is typing ...`;
    timer=setTimeout(()=>{
        p.innerText=""
    },3000)

})