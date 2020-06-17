const request = new XMLHttpRequest();
const out = document.getElementById("output");
const bigOutput = document.getElementById("bigOutput");

function getData(){
    request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");

    request.onload = function(){
    
    let databack = this.responseText;
        console.log(databack);
        
        //let newPara = document.createElement("p");
        
        out.innerText = this.responseText;    
    }
    request.send();
}


function fetchData(){
    fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    //.then(res2 => console.log(res2))
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => out.innerText = JSON.stringify(json, undefined, 4))
    .catch(err => console.log(err))
}

function axiosData(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res => out.innerText = JSON.stringify(res.data, undefined, 4))
    .catch(err => console.log(err))
}

function axiosDataElemtnts(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res =>{
        
    })
    .catch(err => console.log(err))
    

}




