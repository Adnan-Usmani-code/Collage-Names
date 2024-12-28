let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let  country=document.querySelector("input").value;
    console.log(country);
    let colArr=await getcollages(country);
    //console.log(colArr);
    show(colArr);
    //getcollages(country);
});

function show(colArr){
    let list=document.querySelector("#list");
    for (col of colArr){
        //console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcollages(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("err:",e);
        return [];
    }
    
    
}