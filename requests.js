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
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(res => out.innerText = JSON.stringify(res.data, undefined, 4))
    .catch(err => console.log(err))
}

function axiosData2(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res => out.innerText = JSON.stringify(res.data, undefined, 4))
    .catch(err => console.log(err))
}
function axiosDataElements(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(res => {
        res.data.forEach(kings => {
            const dataDiv = document.createElement('div');
            bigOutput.appendChild(dataDiv);

            const name = document.createElement("h2");
            name.innerText = kings.nm;
            dataDiv.appendChild(name);

            const cityT = document.createElement("h3");
            cityT.innerText = kings.cty;
            dataDiv.appendChild(cityT);

            const houseT = document.createElement("h4");
            houseT.innerText = kings.hse;
            dataDiv.appendChild(houseT);

            const yrsT = document.createElement("h4");
            yrsT.innerText = kings.yrs;
            dataDiv.appendChild(yrsT);

            
        })
    })
    .catch(err => console.log(err))
}

function axiosDataElements2(){
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res => {
        res.data.members.forEach(supers => {
            const dataDiv = document.createElement('div');
            bigOutput.appendChild(dataDiv); 
            const name = document.createElement("h2");
            name.innerText = supers.name;
            dataDiv.appendChild(name);

            const age2 = document.createElement("h2");
            age2.innerText = supers.age;
            dataDiv.appendChild(age2);

            const si = document.createElement("h2");
            si.innerText = supers.secretIdentity;
            dataDiv.appendChild(si);

            const pwr = document.createElement("h2");
            pwr.innerText = supers.powers;
            dataDiv.appendChild(pwr);


        })
    })
    .catch(err => console.log(err))
}



