conding style for nodejs

### 命名方式：

+ **Class Function：**大寫開頭駝峰式
``` js
function MyClass () {
	var privateVariable;
	this.privilegedMethod = function () {
    	//..
	};
}
```

+ **Function**：小寫開頭駝峰式
``` js
function mainFunction(){
    //do something
};
```
+ **變數**：小寫開頭駝峰式
``` js
var myName = 'smg';
```
+ **常數**：全部大寫，以const宣告
``` js
const PI = 3.1416;
```
+ **mongoose schema**：大寫開頭駝峰式命名
``` js
var UserSchema = Mongoose.Schema({
   name : String,
   age : Number
});
```
+ **mongoose property**：小寫開頭駝峰式命名
``` js
var UserSchema = Mongoose.Schema({
   name : String,
   age : Number
});
```
+ **config 檔案名稱**：後置詞以底線+config方式命名，並統一放在config目錄底下,資料庫連線相關設定檔，統一以database.js命名，全域型的設定檔則統一以config.js命名。若有需要區分開發環境專屬的設定檔，請另外加上前置詞dev_
``` js
//全域設定檔
config/config.js
//正式機資料庫設定檔
config/database.js
//測試機資料庫設定檔
config/dev_database.js
```

```js
//config 格式比照common js 的規範
module.exports = {
    field1: ‘xxxxx’,
    field2: ‘eeee’
};

```
+ **routes 檔案名稱**：以單一複數名詞方式命名，不要使用複數以上的名詞，並統一放在routes目錄底下
``` js
routes/users.js
```
+ **model 檔案名稱**：後置詞以底線+model方式命名，並統一放在models目錄底下。若model有較複雜的演算需求，可以另外拉出view model的檔案，後置詞以底線+vmodel方式命名
``` js
// model
models/user_model.js
```

``` js
// view model
models/user_vmodel.js
```
+ **views 檔案名稱**：統一放在views目錄底下，並以對應的Route名稱另外開設目錄，目錄下的檔案以頁面名稱或區塊名稱方式命名。共用的view則統一放在layout目錄底下，若是主版則以index命名，其他區塊則以區塊名稱命名
```js
//共用主版
views/layout/index.hbs
//共用head
views/layout/head.hbs
//共用footer
views/layout/footer.hbs

//文章內容頁
views/articles/content.hbs

```
+ **library 檔案名稱**：後置詞以底線+lib方式命名，並統一放在lib目錄底下
``` js
lib/helper_lib.js
```
> 函式庫寫法比照common js 的規範，
> 只有可以被共用的function才須另外建立lib js檔，如果是只使用在某一特定Model或Route的function請直接寫在該檔案裡。

+ **其他檔案名稱**：不同名詞間以底線連接方式命名
``` js
sync_articles.js
```

### Formatting

+ Tab縮排使用 2 個空白
+ 使用UNIX-style Newlines (\n)
+ 使用半形分號 「;」
+ 一行最多 80 個字元
+ 總是使用var來宣告變數
+ 總是使用分號「;」來做為結束程序的結尾
+ 字串使用單引號
```js
//正確
var name = 'Jacky';
```

```js
//錯誤
var name = "Jacky";
```
+ 大括弧的起始大括弧要在Statement同一行，以免產生非預期的情況
```js
//正確
if(true){
    console.log('winning');
}
```

```js
//錯誤
if(true)
{
    console.log('losing');
}
```
+ 一次一行宣告變數
```js
//正確
var keys = ['foo', 'bar'];
var values = [23, 24];
```

```js
//錯誤
var keys = ['foo', 'bar'],
    values = [23, 24];
```

### 條件語句
+ 判斷式用 === 而不是 ==
```js
//正確
var a = 0;
if (a === '') {
  console.log('winning');
}
```

```js
//錯誤
var a = 0;
if (a == '') {
  console.log('losing');
}

```
+ 使用單行的三元運算符
```js
//正確
var foo = (a === b) ? 1 : 2;
```

```js
//錯誤
var foo = (a === b)
  ? 1
  : 2;

```
+ 較複雜的判斷式先存在Boolean變數再使用，增加可讀性
```js
//正確
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);
if (isValidPassword) {
  console.log('winning');
}
```

```js
+ 字串相加使用 += instead of concat
```js
//正確
var hello = 'hello,';
console.log(hello += 'kelvin');
```

```js
//錯誤
console.log(hello.concat('kelvin'));

```
+ 廻圈中的判斷值先存在變數再使用，以增加運算效率
```js
//正確
var ary = ['a', 'b', 'c'];
var len = ary.length;
for(var i = 0; i < len; i++){
    console.log(ary[i]);
}
```

```js
//錯誤
var ary = ['a', 'b', 'c'];
for(var i = 0; i < ary.length; i++){
    console.log(ary[i]);
}

```
+ 廻圈中的判斷值若有陣列值先存在變數再使用，以增加運算效率
```js
//正確
var ary = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sub = ary[0];
var len = sub.length;
for(var i = 0; i < len; i++){
    console.log(sub[i]);
}
```

```js
//錯誤
var ary = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(var i = 0; i < ary[0].length; i++){
    console.log(ary[0][i]);
}

```
+ 原生的物件不宜更改prototype
```js
//錯誤
Array.prototype.test = function(param){
    //do somthing
}

```

### 函數
+ function statment 要盡量精簡
+ 提前返回值以減輕運算壓力
```js
//正確
function isPercentage(val) {
    if (val < 0) {
        return false;
    }
    if (val > 100) {
        return false;
    }

    return true;
}
```

```js
//錯誤
function isPercentage(val) {
    var validate;
    if (val >= 0) {
        if (val < 100) {
            validate = true;
        } else {
            validate = false;
        }
    } else {
        validate = false;
    }

    return validate;
}

```
+ 為閉包命名
```js
//正確
req.on('end', function onEnd() {
    console.log('winning');
});
```

```js
//錯誤
req.on('end', function() {
    console.log('losing');
});

```
+ No nested closures
```js
//正確
setTimeout(function() {
    client.connect(afterConnect);
}, 1000);

function afterConnect() {
    console.log('winning');
}
```

```js
//錯誤
setTimeout(function() {
    client.connect(function() {
            console.log('losing');
    });
}, 1000);

```
+ Method chaining 需斷行並縮排以增加閱讀性
```js
//正確
User
    .findOne({ name: 'foo' })
    .populate('bar')
    .exec(function(err, user) {
            return true;
    });
```

```js
//錯誤
User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

```

### 註解
+ 每一支 function 都需要加註解，內容包括函數的用途，參數說明，回傳值說明（有的話），如果有特別的演算法也需註解說明
```js
/**
* 記錄Log
* @param  {string} 訊息字串
*/
function logSomething(str){
 console.log(str);
}

logSomething ( "This is just awesome!" );

```
