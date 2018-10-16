<?php
   require_once('conn.php');
   function createMsg($account, $content){
      // 筆記：PHP的變數只要宣布，作用域就是在 script 裡。script 裡的函數無法存取到在 script 的變數。
      // 要的話就要自己在函數裡加入 global $xxx; 才能取用外部變數。
      // http://php.net/manual/en/language.variables.scope.php
      // https://www.w3schools.com/php/php_variables.asp
      global $conn;
      $sql = "INSERT INTO advancedor96_messages (`account`, `content`) VALUES ('{$account}', '{$content}')";
      return $result = $conn->query($sql);
   }
   function login($account, $pwd){
      global $conn;
      $hashed_pwd = hash('sha256', $pwd);
      $sql = "SELECT * FROM `advancedor96_users` WHERE account = '{$_POST['account']}' and pwd = '{$hashed_pwd}'";
      $result = $conn->query($sql);

      return ($result->num_rows > 0);
   }
   function register($account, $nickname, $pwd){
      global $conn;
      $new_pwd = hash('sha256', $pwd);
   
      $sql = "INSERT INTO advancedor96_users (account, pwd, nickname) VALUES ('{$account}', '{$new_pwd}', '{$nickname}')";
      return ($conn->query($sql) === TRUE );
   }
  function replyMsg($replyMid, $account, $content){
    global $conn;
    $sql = "INSERT INTO advancedor96_sub_msg (`mid`, `account`, `content`) VALUES ('{$replyMid}', '{$account}', '{$content}')";
    return $result = $conn->query($sql);
  }
  function getNumPosts(){
    global $conn;
    $sql = "SELECT * FROM `advancedor96_messages`";
    $result = $conn->query($sql);
    $num_posts = $result->num_rows; // 所有文章數量
    return $num_posts;
  }
  function getSomePost($start, $num){
    global $conn;
    $read_posts = "SELECT * FROM `advancedor96_messages` LEFT JOIN advancedor96_users ON advancedor96_messages.account=advancedor96_users.account  ORDER BY created_time DESC LIMIT {$start}, {$num}";
    $read_posts_result = $conn->query($read_posts);

    $result = array();
    if($read_posts_result->num_rows > 0){
      while($row = $read_posts_result->fetch_assoc()) {
        array_push($result, $row);
      }
    }
    return $result;
  }
  function getCommentsBy($mid){
    global $conn;
    $getCommentSql = "SELECT * FROM `advancedor96_sub_msg` LEFT JOIN advancedor96_users ON advancedor96_sub_msg.account=advancedor96_users.account  WHERE mid={$mid} ORDER BY created_time DESC ";
    $getComment = $conn->query($getCommentSql);
    $comments = array();
    if($getComment->num_rows > 0){
      while($row = $getComment->fetch_assoc()) {
        array_push($comments, $row);
      }
    }
    return $comments;
  }

?>
