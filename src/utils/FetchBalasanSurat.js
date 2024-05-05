const url = 'https://monitoringpersuratan-production.up.railway.app/api'
const GetBalasanSurat = async() => {
    const response = await fetch(url+'/show-reply',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

const DeleteBalasanSurat = async(id) => {
    const response = await fetch(url+'/delete-reply/'+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    const json = await response.json();
    return json
}

export {GetBalasanSurat,DeleteBalasanSurat}