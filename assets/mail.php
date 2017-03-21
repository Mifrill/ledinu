<?php
/* function get str Error message > add message to array error, and encode to json format */
function ErrorHundler($msg){
	$json['error'] = $msg;
	return json_encode($json);
}
/* The function of converting headers to the correct encoding */
function mime_header_encode($str, $data_charset, $send_charset) { 
	if($data_charset != $send_charset)
	$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
	return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
}
/* Class to send a message in the desired encoding */
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
	$name = trim(htmlspecialchars($_POST["name"]));
	$phone = trim(htmlspecialchars($_POST["phone"]));
	$date = trim(htmlspecialchars($_POST["date"]));
	$time = trim(htmlspecialchars($_POST["time"]));
	$json = array();
	if(!$name) {
		echo ErrorHundler('Укажите обращение к Вам');
		die();
		//header( "HTTP/1.0 400" );
	}elseif(is_numeric($name)){
		echo ErrorHundler('Не позывной в армии, а Имя');
		die();
	}elseif(strlen($name) < 3){
		echo ErrorHundler('Имя слишком короткое');
		die();
	}elseif(strlen($name) > 60){
		echo ErrorHundler('Ну у Вас и имя, надо было вообще все звания указать');
		die();
	}elseif(!preg_match("/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/u", $name)){
		echo ErrorHundler('Интересное у Вас имя');
		die();	
	}elseif(!$phone){
		echo ErrorHundler('Введите свой номер телефона');
		die();
	}elseif(!preg_match("/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{7,10}$/", $phone)){
		echo ErrorHundler('Некорректный формат номера');
		die();			
	}elseif(!$date){
		echo ErrorHundler('Необходимо указать предварительную дату');
		die();
	}elseif(!preg_match("/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/", $date)){
		echo ErrorHundler('Неверный формат даты');
		die();
	}elseif(!$time){
		echo ErrorHundler('Необходимо указать свободное время');
		die();
	}elseif(!preg_match("/^([0-9]{2}):([0-9]{2})$/", $time)){
		echo ErrorHundler('Неверный формат времени');
		die();
	}else{


		$email = "ledinu@mail.ru";
		$subject = 'Новая заявка с сайта Ledinu.ru';
		$message = "Имя: $name \nТелефон: $phone \nВремя записи: $time \nПредварительная дата записа: $date";
		$emailgo= new CorrectEmail;
		$emailgo->from_email= 'mail@ledinu.ru';
		$emailgo->from_name= $name;
		$emailgo->to_email= $email;
		$emailgo->to_name= 'Наталье Юрьевне';
		$emailgo->subject= $subject;
		$emailgo->body= $message;
		$emailgo->send();
		
/*
		$recepient = "mail@ledinu.ru";
		$sitename = "Ledinu.ru";
		$message = "Имя: $name \nТелефон: $phone \nДата: $date";
		$pagetitle = "Новая заявка с сайта \"$sitename\"";
		mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
*/
	
		$json['error'] = 0; // array error  is empty
		echo json_encode($json);
	}
}else{
	header( 'Location: /', true, 307 );
}

?>