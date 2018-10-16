<?php
   // require_once('conn.php');
   require_once('model.php');


   if( isset($_POST['type']) && $_POST['type'] === 'createMsg'){
      $result = createMsg($_COOKIE['id'], $_POST['content']);
      if($result){
         echo "<script>
         window.location.href='index.php';
         </script>";
         die();
      }else{
         echo "<script>
         alert('動作失敗');
         window.history.back();
         </script>";
         die();

      }
   }else if(isset($_POST['type']) && $_POST['type'] === 'login'){
      if(!isset( $_POST['account'])  || ! isset($_POST['pwd'])  ){
         echo "<script>
            alert('欄位為空');
            window.history.back();
         </script>";
         die();
      }
      if( login($_POST['account'], $_POST['pwd']) ){
         setcookie('id', $_POST['account'], time()+3600*24);
         echo "<script>
            window.location.href='index.php';
         </script>";
         die();
      }else{
         echo "<script>
            alert('帳號或密碼錯誤');
            window.history.back();
         </script>";
         die();
      }
   }else if(isset($_POST['type']) && $_POST['type'] === 'register'){
      if(  empty($_POST['account'])  ||  empty($_POST['pwd'])  ||  empty($_POST['pwd2']) ){
         echo "<script>alert('有欄位未填');window.history.back();</script>";
         die();
      }
      if( $_POST['pwd'] !== $_POST['pwd2']){
         echo "<script>alert('兩次密碼不一致');window.history.back();</script>";
         die();
      }
      if(register($_POST['account'], $_POST['nickname'], $_POST['pwd'])){
         echo "<script>alert('註冊成功，請使用新帳號登入');window.location.href='index.php';</script>";
         die();
      }else{
         echo "<script>alert('註冊失敗');window.location.href='index.php';</script>";
         die();
      }
   }else if(isset($_POST['type']) && $_POST['type'] === 'replyMsg'){
     $mid = $_POST['mid'];
     $account = $_COOKIE['id'];
     $content = $_POST['content'];
     if(replyMsg( $mid, $account, $content) ){
      echo "<script>window.location.href='index.php';</script>";
      die();
     }else{
      echo "<script>alert('回覆失敗');window.location.href='index.php';</script>";
      die();
     }

   }

?>
