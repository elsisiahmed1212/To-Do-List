 var inp = document.getElementById('text-do');
 var lis = document.querySelector('.list');

function add(){

    if (inp.value == ''){
        alert('the input is empty');
    }
    else{
        var make = document.createElement('li');
        make.innerHTML = inp.value;
        lis.appendChild(make);
        var span = document.createElement('span');
        span.innerHTML = '\u00d7';
        make.appendChild(span)
    }
    inp.value= "";
    savedata();
}
lis.addEventListener('click',function(e){

    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('chek');
        savedata();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem('data',lis.innerHTML);
}
function showdatafromlocalstoreg(){
    lis.innerHTML = localStorage.getItem('data');
}
showdatafromlocalstoreg();