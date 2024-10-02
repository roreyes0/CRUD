const apiUrl = 'https://sheet.best/api/sheets/cf50f18e-1d49-4424-8254-81d201d257df';

//captura formulario 
const form = document.getElementById('curdForm');
const dataTable = document.getElementById('dataTable');

//consumir API READ

const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data)
    } catch (error) {
        console.error('Error al obtener los datos',error);
    }
}

const renderTable = (data) =>{ 
        console.log(data);
        dataTable.innerHTML = '';
        data.forEach(item=> {
           const row = `<tr class= "border-b">
           <td class="">${item.name}</td>
           <td class="">${item.LastName}></td>
           <td class="">${item.Phone}></td>
           <td class=""><img src="${item.img}" alt=""></td>
           </tr>`;
           dataTable.insertAdjacentHTML('beforeend',row);
        });
}

getData();