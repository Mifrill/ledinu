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
 * @param $data_charset |string
 * @param $send_charset |string
 * @return right code for send email |string
 * @throw null
 */
function mime_header_encode($str, $data_charset, $send_charset) { 
	if($data_charset != $send_charset)
	$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
	return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
}
/** Class to send a message in the desired encoding
 * 
 * @param $from_email |string
 * @param $name |string
 * @param $to_mail |string
 * @param $to_name |string
 * @param $subject of mail |string
 * @param $data_charset |string
 * @param $send_charset |string
 * @param $body text for email |string
 * @param $type |string
 * @return mail send function
 * @throw null
 */
class CorrectEmail {
	public $from_email;
	public $from_name;
	public $to_email;
	public $to_name;
	public $subject;
	public $data_charset='UTF-8';
	public $send_charset='windows-1251';
	public $body='';
	public $type='text/plain';

	function send(){
		$dc=$this->data_charset;
		$sc=$this->send_charset;
		$enc_to=mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
		$enc_subject=mime_header_encode($this->subject,$dc,$sc);
		$enc_from=mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
		$enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
		$headers='';
		$headers.="Mime-Version: 1.0\r\n";
		$headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
		$headers.="From: ".$enc_from."\r\n";
		return mail($enc_to,$enc_subject,$enc_body,$headers);
	}
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
	
/** get JSON from base data file 
 * 
 * @param content from json file $j
 * @return content from file
 * @throw 404 if file not found
 */

	try{
		$j = file_get_contents( __DIR__ . DIRECTORY_SEPARATOR . 'data.json' );
		if (!$j) {
			throw new Exception('Failed to open uploaded file');
		}
	}catch (Exception $e){
		header( "HTTP/1.0 404" );
	}
	$dataJs = json_decode($j);
	if( $j != false && !is_null($dataJs)){
		unset($j);
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
		}elseif(new DateTime($date) > (new DateTime)->modify($dataJs->EndFutureDate)){
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
			$emailgo->from_email= $dataJs->from_email;
			$emailgo->from_name= $name;
			$emailgo->to_email= $email;
			$emailgo->to_name= $dataJs->to_name;
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