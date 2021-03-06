## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

__`<header>`__ 主要是用來放置網站的刊頭，固定會重覆出現的導覽、LOGO、站名等內容。  

__`<footer>`__ 尾部，包括頁尾，像是法律資訊或是作者訊息等等，不過`<header>`及`<footer>`都不是唯一的，在網頁中的同一個區域可以重覆使用。  

__`<article>`__ 代表文章，意指一篇完整而可獨立抽出來閱讀的文章。  

__`<section>`__ 代表章節，表示相關但是不同的段落，段落tag裡也可以包`<article>`, `<article>`裡也可以包`<section>`。純粹是語義上的表達方式不同。

## 請問什麼是盒模型（box modal）

瀏覽器把所有元素都看成是一個矩形盒子模型，而CSS決定這些盒子的大小(width和height)、位置(position)、邊框(border)、內距(padding)、外距(margin)。

![圖解](https://www.topalovich.com/wp-content/uploads/2017/09/Box_Model.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

`display: inline` 是行內元素，元素的寬度與高度會隨著內容而改改，自動調整成一樣大小。  

`display: block` 是區塊元素，它不管內容的寬度多少，它的寬度總是會盡量撐滿整個左右。上下高度則是依據內容而定。
  每一個 block 元素總是從『起頭』開始排列，它不會接在別人的右邊。  

`display: inline-block` 是兩者的融合，可以指定寬度和高度，也可以隨著瀏覽器預設的排版方式而排，由左到右，由上到下。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position 預為是 `static`。  
只要 `position` 被設為另外3種之一，該元素就被設為「可定位元素」。   
四個屬性發揮作用： `left`、`top`、`bottom`、`right`。

![圖解](https://internetingishard.com/html-and-css/advanced-positioning/css-positioning-schemes-790d5b.png)

`static` 定位為預設，瀏覽器會用自然的方式排列元素(由左到右、由上到下)  

`relative` 定位為相對。原本該佔的位置，保留不動。如果有加入 上下左右 的屬性，則會跟著移動。但注意：原本該佔的位置保留不變。

`absolute` 為絕對定位。會從該元素開始往上(父層)找，一直找到可定位(非static)的元素，再依據那個可定位的元素做定位(上下左右)。如果往上找父層元素都找不到時，則會停在 `body` 這個元素上，以 body 元素做為定位基準。  

`fixed` 為固定，他會將元素直接定在網頁畫面上，即使瀏覽器捲軸移動，該元素也不會移動一絲一毫。