<?php
   require_once('conn.php');
   require_once('model.php');
?>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>留言版-使用 Bulma </title>
   <link rel="stylesheet" href="./css/bulma.min.css">
   <link rel="stylesheet" href="./css/index.css">
   <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
<body>
<section class="section">
   <div class="container">
      <nav class="level">
         <div class="level-left">
            <div class="level-item">
               <a href="create.php">新增留言</a>
            </div>
         </div>
         <div class="level-right">
<?php
   if(isset( $_COOKIE['id']) ){
      echo '<div class="level-item">Hi,'.$_COOKIE['id'].'</div>';
      echo '<div class="level-item"><a href="logout.php">登出</a></div>';
   }else{
      echo '<div class="level-item"><a href="./login.html">登入</a></div>';
      echo '<div class="level-item"><a href="./register.html">註冊</a></div>';
   }
?>
         </div>
      </nav>
   <!-- 列出留言 -->
   <h1 class="title has-text-centered">粗糙的留言版</h1>
   <p class="subtitle has-text-centered">
      使用<strong>Bulma</strong>!
   </p>


<?php
   $quantity_per_page = 10; //每頁10筆文章

   if(isset($_GET['page'])){
      $page = intval($_GET['page']);
   }else{
      $page = 1;
   }
   $start = ($page - 1) * $quantity_per_page;

   $posts = getSomePost($start, $quantity_per_page);

   for($i=0;$i<count($posts);$i++){
      $row = $posts[$i];
      $content = nl2br($row['content']);
      echo "
      <div class='card'>
        <div class='card-content'>
          <div class='media'>
            <div class='media-content'>
              <p class='title is-4'>{$row['nickname']}</p>
              <p class='subtitle is-6'>({$row['account']})</p>
            </div>
          </div>
          <div class='content'>
           {$content}
            <br>
            <time>{$row['created_time']}</time>
          </div>

          <a href='reply.php?mid={$row['mid']}'>回覆</a>
      "; // card 遺留2個div，下面補完
      $mid = $row['mid'];

      $comments = getCommentsBy($mid);
      for($j=0; $j<count($comments); $j++){

         $comment = $comments[$j];

         echo "
         <div class='card'>
            <div class='card-content'>
               <div class='content'>
               {$comment['nickname']}({$comment['account']})<br />
                  {$comment['content']}
                  <time>@{$comment['created_time']}</time>
               </div>
            </div>
         </div>";      
      }
      echo "</div></div>"; // card 的補完
   }

   $num_posts = getNumPosts(); // 取得所有文章數量，以計算最後的頁數
   echo '<div>';
   for($i=1; $i<=ceil($num_posts/$quantity_per_page)  ; $i++){
      echo "<a href='?page={$i}'>{$i}</a> ";
   }
   echo '</div>';

?>
  </div>
</section>
</body>
</html>