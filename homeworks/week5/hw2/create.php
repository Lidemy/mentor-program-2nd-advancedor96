<?php
   if( !isset( $_COOKIE['id'] )){
      header('Location: login.html');
   }
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>登入</title>
   <link rel="stylesheet" href="./css/bulma.min.css">
</head>
<body>
<section class="section">
   <div class="container">
   <h1 class="title">新增留言</h1>
   <form action="controller.php" method="POST">

      <div class="field">
         <label class="label"><?=$_COOKIE['id'].":"?></label>
         <div class="control">
            <textarea autofocus name="content" cols="100" rows="10" class="textarea content"></textarea>
         </div>
      </div>

      <input type="hidden" name="type" value="createMsg" />
      <button class="button is-link">送出</button>
   </form>
</div>
</section>
</body>
</html>