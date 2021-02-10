let result = [];
let result1 = [];
function gettingAjax(url , func){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
        // result = {...JSON.parse(this.responseText)};
        // console.log(result);
        func(this); 
    }
}
req.open("Get" , url , false);
req.send();
}
function resRecorder(xhttp){
    result = [...JSON.parse(xhttp.responseText)];
}

function resRecorder1(xhttp){
    result1 = [...JSON.parse(xhttp.responseText)];
}

gettingAjax("https://api.jsonbin.io/b/5fedd606fd076e704db052ac" , resRecorder);
gettingAjax("https://api.jsonbin.io/b/5fedd646a7377d703920ddf0" , resRecorder1);

let mergedObj = [];


mergedObj = result.map((item) =>( {... result1.find((item1) => item.uid === item1.uid) , ...item}));
let table = document.createElement("table");
let tableHeader = [];
let tableRow = [];
let tableData = [];
let dataTags = [];
for(let index = 0; index < Object.keys(mergedObj[0]).length ; index++){
        tableHeader.push(document.createElement("th"));
        tableHeader[index].innerHTML = Object.keys(mergedObj[0])[index];
}
for(let index = 0;index < mergedObj.length ; index++ ){
    tableRow.push(document.createElement("tr"));
    tableData.push(Object.values(mergedObj[index]));
    for (let i = 0; i < tableData[index].length ; i++){
        let dataElement = document.createElement("td");
        dataElement.innerHTML = tableData[index][i]; 
        dataTags.push(dataElement);
    }
    tableRow.forEach((element) =>{
        for(let index = 0; index < dataTags.length ; index++){
            element.appendChild(dataTags[index]);
        }
    } 
        );
    dataTags = [];
}
tableHeader.forEach((element) => table.appendChild(element));
tableRow.forEach((element) => table.appendChild(element));
let body = document.getElementById("body");
body.appendChild(table);

