<?php
/** function get str Error message > add message to array error, and encode to json format  
 * @param $msg |string
 * @return Erro array |json
 * @throw null
 */
function ErrorHundler($msg){
  $json['error'] = $msg;
  return json_encode($json);
}
/** The function of converting headers to the correct encoding |special for Class CorrectEmail
 * @param $msg |string
 * @param $dataCharset |string
 * @param $sendCharset |string
 * @return right code for send email |string
 * @throw null
 */
function mime_header_encode($str, $dataCharset, $sendCharset) { 
  if($dataCharset != $sendCharset)
  $str=iconv($dataCharset,$sendCharset.'//IGNORE',$str);
  return ('=?'.$sendCharset.'?B?'.base64_encode($str).'?=');
}
/** Class to send a message in the desired encoding
 * 
 * @param $fromEmail |string
 * @param $name |string
 * @param $toEmail |string
 * @param $toName |string
 * @param $subject of mail |string
 * @param $dataCharset |string
 * @param $sendCharset |string
 * @param $body text for email |string
 * @param $type |string
 * @return mail send function
 * @throw null
 */
class CorrectEmail {
  public $fromEmail;
  public $fromName;
  public $toEmail;
  public $toName;
  public $subject;
  public $dataCharset='UTF-8';
  public $sendCharset='windows-1251';
  public $body='';
  public $type='text/plain';

  function send(){
    $newDataCharset=$this->dataCharset;
    $newSendCharset=$this->sendCharset;
    $encTo=mime_header_encode($this->toName,$newDataCharset,$newSendCharset).' <'.$this->toEmail.'>';
    $encSubject=mime_header_encode($this->subject,$newDataCharset,$newSendCharset);
    $encFrom=mime_header_encode($this->fromName,$newDataCharset,$newSendCharset).' <'.$this->fromEmail.'>';
    $encBody=$newDataCharset==$newSendCharset?$this->body:iconv($newDataCharset,$newSendCharset.'//IGNORE',$this->body);
    $headers='';
    $headers.="Mime-Version: 1.0\r\n";
    $headers.="Content-type: ".$this->type."; charset=".$newSendCharset."\r\n";
    $headers.="From: ".$encFrom."\r\n";
    return mail($encTo,$encSubject,$encBody,$headers);
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
  
/** get JSON from base data file 
 * 
 * @param content from json file $json
 * @return content from file
 * @throw 404 if file not found
 */

  try{
    $json = file_get_contents( __DIR__ . DIRECTORY_SEPARATOR . 'data.json' );
    if (!$json) {
      throw new Exception('Failed to open uploaded file');
    }
  }catch (Exception $e){
    header( "HTTP/1.0 404" );
  }
  $dataJs = json_decode($json);
  if( $json != false && !is_null($dataJs)){
    unset($json);
    /* protect */
    $name = trim(htmlspecialchars($_POST["name"]));
    $phone = trim(htmlspecialchars($_POST["phone"]));
    $date = trim(htmlspecialchars($_POST["date"]));
    $time = trim(htmlspecialchars($_POST["time"]));

    $json = array();
/* choose correct time for Satarday by Json */
    if ( (strftime("%w", strtotime($date) )) != 6){
      $correctTimeEnd = $dataJs->EndTime;
      $correctTimeStart = $dataJs->StartTime;
    }else{
      $correctTimeEnd = $dataJs->EndTimeSatarday;
      $correctTimeStart = $dataJs->StartTimeSatarday;
    }
/* Rule for correct input */
    if(!$name) {
      echo ErrorHundler($dataJs->ErrorNameEmpty);
      die();
    }elseif(is_numeric($name)){
      echo ErrorHundler($dataJs->ErrorNameNumeric);
      die();
    }elseif(strlen($name) < 3){
      echo ErrorHundler($dataJs->ErrorNameShort);
      die();
    }elseif(strlen($name) > 60){
      echo ErrorHundler($dataJs->ErrorNameLong);
      die();
    }elseif(!preg_match("/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/u", $name)){
      echo ErrorHundler($dataJs->ErrorNameCorrect);
      die();  
    }elseif(!$phone){
      echo ErrorHundler($dataJs->ErrorTelEmpty);
      die();
    }elseif(!preg_match("/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{7,10}$/", $phone)){
      echo ErrorHundler($dataJs->ErrorTelCorrect);
      die();      
    }elseif(!$date){
      echo ErrorHundler($dataJs->ErrorDateEmpty);
      die();
    }elseif( (strftime("%Y-%m-%d", strtotime($date) ) ) > date('Y-m-d', strtotime ($dataJs->EndFutureDate) ) ){
      echo ErrorHundler($dataJs->ErrorDateFuture);
      die();
    }elseif(!preg_match("/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/", $date)){
      echo ErrorHundler($dataJs->ErrorDateCorrect);
      die();
    }elseif(preg_match("/^([0]{1}[0]{1})-([0-9]{2})-([0-9]{4})$/", $date)){
      echo ErrorHundler($dataJs->ErrorDateCorrect);
      die();
    }elseif( (strftime("%Y-%m-%d", strtotime($date) ) ) < date('Y-m-d') ){
      echo ErrorHundler($dataJs->ErrorDatePast);
      die();
    }elseif( (strftime("%w", strtotime($date) )) == 0){
      echo ErrorHundler($dataJs->ErrorDateSunday);
      die();
    }elseif(!$time){
      echo ErrorHundler($dataJs->ErrorTimeEmpty);
      die();
    }elseif(!preg_match("/^([0-9]{2}):([0]{2})$/", $time)){
      echo ErrorHundler($dataJs->ErrorTimeCorrect);
      die();
    }elseif( $time > ($correctTimeEnd.':00') ){
      echo ErrorHundler($dataJs->ErrorTimeLate);
      die();
    }elseif( $time < $correctTimeStart ){
      echo ErrorHundler($dataJs->ErrorTimeEarly);
      die();
    }else{
/* Rule for check busy date and time */

      $arrayJSONtime = ($dataJs->BookedOutTime->$time);
      foreach ($arrayJSONtime as $k => $v) {
        if($v == $date){
          echo ErrorHundler($dataJs->ErrorTimeBusy);
          die();
        }
      }

/* Booked Out days */

      $addJson = ($dataJs->BookedOutDates); // get array from object
      foreach($addJson as $k => $v) {
        if($v == $date) {
          echo ErrorHundler($dataJs->ErrorDateBusy);
          die();
        }
      }

/* seccsessful results */
      $email = $dataJs->email;
      $subject = $dataJs->subject;
      $message = "Имя: $name \n";
      $message .= "Телефон: $phone \n";
      $message .= "Время записи: $time \n";
      $message .= "Предварительная дата записа: $date";
      $emailgo= new CorrectEmail;
      $emailgo->fromEmail= $dataJs->fromEmail;
      $emailgo->fromName= $name;
      $emailgo->toEmail= $email;
      $emailgo->toName= $dataJs->toName;
      $emailgo->subject= $subject;
      $emailgo->body= $message;
      $emailgo->send();

/* Booked Out times */
      
      $arrayJSONtime[] = $date;
      $dataJs->BookedOutTime->$time = $arrayJSONtime;

/* NULL vars for iterations */
      //$amount = 0;
      $amountCheck = 0;
/* object iteration */
      foreach($dataJs->BookedOutTime as $item=>$value) {
        foreach($value as $k) {
          if ($k == $date){
            $amountCheck++; // find Such Date 
          }
        }
        //$amount++; // find lenght of available time object
      }
      if ( (strftime("%w", strtotime($date) )) != 6){
        $amount = 4;
      }else{
        $amount = 9;
      }

      if($amount == $amountCheck){
        $addJson[] = $date; // array_push to add input date
        $dataJs->BookedOutDates = $addJson; // rewrite new array to object
        //$amount = 0;
        $amountCheck = 0;
      }
/* Write Client Tel - Name - Date - Time */
      $addJson = $dataJs->clients;
      $addJson[] = $name ." - " . $phone . " - " . $date . " - " . $time;
      $dataJs->clients = $addJson;

      $dataJs  = json_encode($dataJs);
      file_put_contents( __DIR__ . DIRECTORY_SEPARATOR . 'data.json', $dataJs);
/*
      $recepient = "mail@ledinu.ru";
      $sitename = "Ledinu.ru";
      $message = "Имя: $name \nТелефон: $phone \nДата: $date";
      $pagetitle = "Новая заявка с сайта \"$sitename\"";
      mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
*/
      $json['error'] = 0; // array error  is empty
      unset($dataJs);
      echo json_encode($json);
    }
  }else{
    header( "HTTP/1.0 400" );
  }
}else{
  header( 'Location: /', true, 307 );
}

?>
