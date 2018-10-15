## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar 是可變長度單位，範圍是 0 ~ 65535 個字元。
使用時需要先指定 varchar 的長度。

例如長度設5, varchar(5)：

'ex' => 'ex' 3 byptes # 多 1 byte 是存長度
'expe' => 'expe' 5 byptes
'exper' => 'exper' 6 byptes
'expert' => 'exper' 6 byptes # 多 1 byte 不是存 t, 而是存長度

text 為純文字長度，範圍是 0~65535 個字元。
使用時不需要預先指定 text 長度。

效率來說基本是 varchar > text

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

cookie 是 server 放在 client 端的小資料(5kb)。瀏覽器在送出 HTTP request 的時候，會把 cookie 的內容附在 header 中帶上來。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

資料表名稱：advancedor96_users

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  uid  |    integer(6)      | 使用者id，Primary key     |
|  account  |varchar(20) | 使用者帳號     |
| pwd   | text | 使用者密碼，使用sha256做雜湊函數  |
| nickname   | varchar(64) | 暱稱  |

我的primary key 是另外設一個 id 來存。所以會發生 帳號重複的事情，沒有考慮到。

