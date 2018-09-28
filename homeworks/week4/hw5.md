## 1.什麼是 DOM？
為 Document Object Model 的簡稱，把 HTML 的結構用物件的方式顯示出來。  
簡單來理解，就是打開 Chrome dev tool 時的 Element ：
![](https://i.imgur.com/vwSSk3e.png)  


## 2.什麼是 Ajax？
非同步的、發給伺服器的請求

## 3.HTTP method 有哪幾個？有什麼不一樣？

`GET`  
GET 方法請求展示指定資源。使用 GET 的請求只應用於取得資料。  
`HEAD`  
HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。  
`POST`  
POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。  
`PUT`  
PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。  
`DELETE`  
DELETE 方法會刪除指定資源.  
`CONNECT`  
CONNECT 方法會和指定資源標明的伺服器之間，建立隧道（tunnel）。  
`OPTIONS`  
OPTIONS 方法描述指定資源的溝通方法（communication option）。  
`TRACE`  
TRACE 方法會與指定資源標明的伺服器之間，執行迴路返回測試（loop-back test）。  
`PATCH`  
PATCH 方法套用指定資源的部份修改。  


## 4.GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？
* 在Google搜尋「aaaa」後，會在結果的網址上發現「q=aaaa」這種透過網址傳送資料的方式，為 GET。

* 填完Google表單後按下送出，資料會透過POST ，放在HTTP Request 的  body 裡面傳，這就是 POST 方法。

## 5.什麼是 RESTful API？
Representational State Transfer，簡稱REST，它是一種網路架構風格，他並不是一種標準。

而 RESTful 可以這樣子想像: 美麗 (Beauty) 的事物可以稱為 Beautiful; 設計為 REST 的系統就可以稱為 RESTful

以 API 而言，假設我們正在撰寫一組待辦事項的 API，
可能會有以下方式來作為 API 的 interface:

獲取使用者資料 /getAllUsers
獲取使用者資料 /getUser/1
新增使用者資料 /createUser
更新使用者資料 /updateUser/1
刪除使用者資料 /deleteUser/1

若是以 REST 風格來開發 RESTful API 的話:

獲取使用者資料 /GET /users
獲取使用者資料 /GET /user/1
新增使用者資料 /POST /user
更新使用者資料 /PUT /user/1
刪除使用者資料 /DELETE /user/1

兩者差異是在於 RESTful API 充分地使用了 HTTP protocol (GET/POST/PUT/DELETE)


## 6.JSON 是什麼？

JSON（JavaScript Object Notation），為一輕量級的資料交換語言。
具體的格式如下：

名稱／值（pair）：名稱和值之間使用：隔開，一般的形式是：
`{name:value}`
一個名稱是一個字串； 一個值(value)可以是一個字串(string)，一個數值(number)，一個物件(object)，一個布林值(bool)，一個有序列表(array)，或者一個null值。


## 7.JSONP 是什麼？
JSONP（JSON with Padding）是資料格式JSON的一種「使用模式」，可以讓網頁從別的網域要資料。
## 8.要如何存取跨網域的 API？

使用 JSONP 或是 CORS(跨來源資訊共享) ，或在新的Webpack 裡使用 ProxyTable 也可解決 CORS 的問題。

