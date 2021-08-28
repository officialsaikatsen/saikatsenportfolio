var addbutton=document.querySelector("#btn");

var updatelsdata=()=>{
var textareadata=document.querySelectorAll("textarea");
var notes=[];
textareadata.forEach((note)=>{return notes.push(note.value);});
localStorage.setItem('notes',JSON.stringify(notes));
}

var addnewnote=(text =" ")=>{var note=document.createElement('div');
note.classList.add('note');
var htmldata='<div class="operation"><button class="edit">'
+'<i class="fa fa-edit"></i></button><button class="delete"><i class="fa fa-trash-o"></i></button></div>'
+ '<div class="main ${text ? "":"hidden"}"></div>'
    +'<textarea class="${text ? "hidden":""}"></textarea>';
    note.insertAdjacentHTML("afterbegin",htmldata);
    console.log(note);
    document.body.appendChild(note);
var editbutton=note.querySelector(".edit");
var delbutton=note.querySelector(".delete");
var maindiv=note.querySelector(".main");
var textArea=note.querySelector("textarea");
delbutton.addEventListener('click',()=>{note.remove();console.log(document.querySelectorAll('.note').length);

updatelsdata();
});
textArea.value=text;
maindiv.innerHTML=text;
editbutton.addEventListener('click',()=>{maindiv.classList.toggle("hidden");
textArea.classList.toggle("hidden");});
textArea.addEventListener('change',(event)=>{
    var value=event.target.value;
    console.log(value);
maindiv.innerHTML=value;
updatelsdata();
});}
var notess=JSON.parse(localStorage.getItem('notes'));
if(notess){notess.forEach((note)=>{addnewnote(note);});}
addbutton.addEventListener('click',()=>{addnewnote();});