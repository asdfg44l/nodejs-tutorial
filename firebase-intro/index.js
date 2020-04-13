const database = firebase.database();


// ref() 搜尋資料庫路徑, 若不帶入值則預設為根目錄
// set() 新增資料

// firebase 全部都是 JSON 物件格式, 直接加入陣列結果會不如預期

var data = {
    dog1: {
        name: 'mochi',
        age: 8
    },
    dog2: {
        name: 'Yiling',
        age: 8
    }
}

// 在根目錄下新增 data
database.ref().set(data)

// 變更 dog1 的 age

// 選取路徑至 dog1, 再變更資料
database.ref('dog1/age').set(6)

// 使用 once 取得資料
var dog1 = database.ref('dog1'); //先取得路徑
var title = document.getElementById('title') // 取得 DOM

dog1.once('value', (snapshot) => {
    let age = snapshot.val().age;
    console.log(age)
    title.textContent = `Dog1 is ${age} years old`
})