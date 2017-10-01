let ori = [{name : "titus", position : "funder"}, {name: "titus", position : "ceo"}, {name: "titusjin", position: "cto"}];

let duplicated = [];
for(let i = 0, leng = ori.length ; i < leng ; i++){
    for(let j = 0 ; j < leng ; j++){
        if(j != i && ori[i].name == ori[j].name){
            duplicated.push(ori[j]);
        }
    }
}

console.log(duplicated);
