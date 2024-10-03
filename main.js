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
            <td class="py-2 px-4">${item.name}</td>
            <td class="py-2 px-4">${item.LastName}></td>
            <td class="py-2 px-4">${item.Phone}></td>
            <td class="py-2 px-4"><img class="w-16 h-16 object-cover rounded" src="${item.img}" alt=""></td>
            <td>
                <button class="bg-yellow-500 text-while px-2 py-1 rounded" onclick="">Editar</button>
                <button class="bg-red-500 text-while px-2 py-1 rounded" onclick="">Eliminar</button>
            </td>
            </tr>`   ;
           dataTable.insertAdjacentHTML('beforeend',row);
        });
}

getData();