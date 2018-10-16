資料表名稱：advancedor96_messages

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  mid  |    integer(6)      | 留言 id，Primary key     |
|  account  |varchar(20) | 發言人帳號     |
| content   | text | 留言內容  |
| created_time   | datetime | 留言時間  |

資料表名稱：advancedor96_sub_msg

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  sub_id  |    int(11)      | 子留言 id，Primary key     |
|  mid  |    int(11)      | 父留言 id     |
|  account  |varchar(20) | 發言人帳號     |
| content   | text | 留言內容  |
| created_time   | datetime | 留言時間  |

資料表名稱：advancedor96_users

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  uid  |    integer(6)      | 使用者id，Primary key     |
|  account  |varchar(20) | 使用者帳號     |
| pwd   | text | 使用者密碼，使用sha256做雜湊函數  |
| nickname   | varchar(64) | 暱稱  |

