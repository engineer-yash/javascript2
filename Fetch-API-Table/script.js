fetch("https://fakestoreapi.com/products") // fetching api
.then((Response)=>{
    return Response.json();//converting into json format
}).then((Objectdata)=>{
    console.log(Objectdata[0].title);//Optional - just to check data is coming or not
    let tableData = "";//creating empty variable to store data

    //mapping each data into table from array
    Objectdata.map((values)=>{ 

     //adding data into table
      tableData += `<tr>
      <th>${values.id}</th>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}\$</td>
      <td><img src="${values.image}"></td>
    </tr>`;
    })
    document.getElementById("tableBody").innerHTML = tableData;
})
