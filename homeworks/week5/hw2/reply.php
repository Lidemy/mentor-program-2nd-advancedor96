<?php
   require_once('conn.php');
   if( !isset( $_COOKIE['id'] )){
      header('Location: login.html');
   }
  //  die($_GET['mid']);

  $sql = "SELECT * FROM `advancedor96_messages`LEFT JOIN advancedor96_users ON advancedor96_messages.account=advancedor96_users.account  WHERE mid = '{$_GET['mid']}' " ;
  $result = $conn->query($sql);
  $author = '';
  $content = '';
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $author = $row['account'];
      $content = $row['content'];
      $nickname = $row['nickname'];
    }
  }
  // echo $author.", content:". $content."<br>";
?>

<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>回覆留言</title>
   <link rel="stylesheet" href="./css/bulma.min.css">
</head>
<body>
<section class="section">
   <div class="container">
   <h1 class="title">回覆留言</h1>
   <form action="controller.php" method="POST">

      <div class='card'>
        <div class='card-content'>
          <div class='media'>
            <div class='media-content'>
              <p class='title is-4'><?=$nickname?></p>
              <p class='subtitle is-6'>(<?=$author?>)</p>
            </div>
          </div>
          <div class='content'>
           <?=nl2br($content)?>
          </div>
        </div>
      </div> 
      <br>

      <input type="hidden" name="mid" value="<?=$_GET['mid']?>" />

      <div class="field">
         <label class="label"><?=$_COOKIE['id'].":"?></label>
         <div class="control">
            <textarea autofocus name="content" cols="100" rows="10" class="textarea content"></textarea>
         </div>
      </div>


      <input type="hidden" name="type" value="replyMsg" />
      <button class="button is-link">送出</button>
   </form>

</div>
</section>
</body>
</html>
