var data = {name:'Mochi'}

fetch('/searchData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then( res => res.json())
.then( json => console.log(json))