const database = firebase.database();

const content = document.getElementById('content');

// ref() 搜尋資料庫路徑, 若不帶入值則預設為根目錄
// set() 新增資料

// firebase 全部都是 JSON 物件格式, 直接加入陣列結果會不如預期

var ref = database.ref();

ref.on('value', snapshot => {
    content.textContent = JSON.stringify(snapshot.val(), null, 3)
})

var people = {
    "mike": {
      "length" : 12.5,
      "weight": 5000,
      "mail": "axs@gmail.com"
    },
    "casper": {
      "length" : 9,
      "weight" : 2500,
      "mail": "axs12@gmail.com"
    },
    "bob": {
      "length" : false,
      "weight" : 2500,
      "mail": "axs31@gmail.com"
    },
    "john": {
      "length" : 9,
      "weight" : 2500,
      "mail": "axs21@gmail.com"
    },
    "josh": {
      "length" : 9,
      "weight" : 2500,
      "mail": "axs11@gmail.com"
    },
    'boss':{
      "length": false,
      "weight": 5000,
      "mail": "axs41@gmail.com"
    },
    'frank':{
      "length": 12,
      "weight": 3000,
      "mail": "axs33@gmail.com"
    }
};

//set
var peopleList = database.ref('people');
database.ref('people').set(people);

peopleList.orderByChild('weight').startAt(2500).limitToFirst(3).once('value', snapshot => {
    snapshot.forEach(function(item){
        console.log(item.key)
        console.log(item.val())
    })
})