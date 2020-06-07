function FetchData() {
    var xhr = new XMLHttpRequest()
    xhr.open('post', '/users/GetPdf');
    xhr.setRequestHeader("Content-Type", "application/pdf")
    xhr.send()
    xhr.onload = function() {
        if(this.status === 200) {
            showFile(this.response)
        }
    }
}
function showFile(blob){
    // var tab = window.open();
    // It is necessary to create a new blob object with mime-type explicitly set
    // otherwise only Chrome works like it should
    var newBlob = new Blob([blob], {type: "application/pdf"})
    console.log(blob)
    console.log(newBlob)
    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var fileURL = URL.createObjectURL(newBlob)
        let obj = document.getElementById('obj')
        let emb = document.getElementById('emb')
        obj.data = fileURL;
        emb.src = fileURL;
        URL.revokeObjectURL(fileURL)
        // window.navigator.msSaveOrOpenBlob(newBlob);
        return;
    } 
    // var fileURL = URL.createObjectURL(newBlob)
    // var iframe= document.createElement("iframe");
    // tab.document.body.appendChild(iframe);  
    // iframe.src = fileURL;
    // iframe.setAttribute("style","width:100%;height:100%");
    // URL.revokeObjectURL(fileURL)
}
FetchData()