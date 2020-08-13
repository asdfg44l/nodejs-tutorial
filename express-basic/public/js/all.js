var send = document.getElementById('send');
var content = document.getElementById('content');
var message = document.getElementById('search-msg');

send.addEventListener('click', function(e) {
    e.preventDefault()
    var str = content.value;
    PostForm(str)
    // var xhr = new XMLHttpRequest();
    // xhr.open('post', '/searchAJAX');
    // xhr.setRequestHeader("Content-type",
    // "application/json");

    // var data = JSON.stringify({
    //     "content": str,
    //     "list": [1,2,3] 
    // })
    // xhr.send(data);
    // xhr.onload = function() {
    //     console.log(xhr.responseText)
    // }
})

function PostForm(str) {
    var data = { "content": str };
    fetch('/searchAJAX', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json()
    }).then( data => {
        message.textContent = data.title;
    }).catch( err => {
        console.log('錯誤: ', err)
    })
}