function get_update(){
    tit = document.getElementById('titleForTODO').value;
    desc = document.getElementById('descriptionForTODO').value;

    if(localStorage.getItem('itemsJson')==null){
        iJsonArray = [];
        iJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(iJsonArray));
    }

    else{
        iJsonArraySTR = localStorage.getItem('itemsJson');
        iJsonArray = JSON.parse(iJsonArraySTR);
        iJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson', JSON.stringify(iJsonArray));
    }
    update();
}

 function update()
{
    if(localStorage.getItem('itemsJson')==null){
        iJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(iJsonArray));
    }

    else{
        iJsonArraySTR = localStorage.getItem('itemsJson');
        iJsonArray = JSON.parse(iJsonArraySTR);
    }

    //populate the table
    let table_body = document.getElementById('table_body');
    let str = "";
    iJsonArray.forEach((element,index) => {
        str += `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary btn_2" onclick="del(${index})">Delete</button></td>
      </tr>`;
    });
    table_body.innerHTML = str;
};

add = document.getElementById("adding");
add.addEventListener("click", get_update);
update();

function del(itemindex){
    console.log("deleted", itemindex);
    iJsonArraySTR = localStorage.getItem('itemsJson');
    iJsonArray = JSON.parse(iJsonArraySTR);
    //Delete itemindex element from the array
    iJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(iJsonArray));
    update();
};


function clearing(){
    if(confirm("Do you really want to clear ??")){
        console.log("clearing the storage");
        localStorage.clear();
        update();
    }
    
};