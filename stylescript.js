function abcde(){document.body.classList.toggle("dark");}

function myfunction(){var ab=document.getElementById('menu');
ab.classList.toggle('show');
document.querySelector('span').classList.toggle("active");

}
/*.main*/
var i=0;
var a=["Web Developer","Designer","Competitive Programmer","FreeLancer"];
var search=document.getElementById("job");
setInterval(()=>{
    
    
   
    if(a.length==i){i=0;}
    search.innerHTML=a[i];
    i=i+1;
    },2000);
    let rock;let count=0;
    function check(choice){
    let com_choice=Math.floor(Math.random()*3);
    let you_choice={'rock':{'rock':'Draw','paper':'Lose','scissors':'Win'},
    
    'paper':{'rock':'Win','paper':'Draw','scissors':'Lose'},
    
    'scissors':{'rock':'Lose','paper':'Win','scissors':'Draw'}
    
    };
    let my=document.getElementById('you');
    my.innerHTML='You choose : '+choice.toUpperCase();
    my.style.color='blue';
    let com=document.getElementById('computer');
    let comar=['rock','paper','scissors'];
    com.innerHTML='Computer choose : '+comar[com_choice].toUpperCase();
    com.style.color='rgb(255, 0, 191)';
    let cchoice=comar[com_choice];
    let result=document.getElementById('result');
    if(you_choice[choice][cchoice]=='Win'){
    result.innerHTML='You '+you_choice[choice][cchoice];
    result.style.backgroundColor='green';
    }
    else if(you_choice[choice][cchoice]=='Lose'){
        result.style.backgroundColor='red';
        result.innerHTML='You '+you_choice[choice][cchoice];
    
    }
    else{
        result.style.backgroundColor='yellow';
        result.innerHTML='Match '+you_choice[choice][cchoice];}
    }


    var i=0;var j=0;var k=0;
    window.addEventListener('load',()=>{setInterval(repeat,1000);});
    function repeat(){move();move1();move2();}
    function move(){
        if(i==0){i=1;var element=document.getElementById("bar");
    var width=1;
    var id=setInterval(change,100);
    
    
    function change(){if(width>29){i=0;clearInterval(id);}
    else{width++;element.style.width=width+"%";
    document.getElementById("percent").textContent=width+"%";
    }
    }}}
    
    
    
    function move1(){
        if(j==0){j=1;var element=document.getElementById("bar1");
    var width=1;
    var id=setInterval(change1,100);
    
    
    function change1(){if(width>29){j=0;clearInterval(id);}
    else{width++;element.style.width=width+"%";
    document.getElementById("percent1").textContent=width+"%";
    }
    }}}
    
    
    
    function move2(){
        if(k==0){k=1;var element=document.getElementById("bar2");
    var width=1;
    var id=setInterval(change2,100);
    
    
    function change2(){if(width>39){k=0;clearInterval(id);}
    else{width++;element.style.width=width+"%";
    document.getElementById("percent2").textContent=width+"%";
    }
    }}}

    

  
    



    

