<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	$name = trim(htmlspecialchars($_POST["name"]));
	$phone = trim(htmlspecialchars($_POST["phone"]));
	$date = trim(htmlspecialchars($_POST["date"]));
	$json = array();
	if(!$name) {
		$json['error'] = 'Укажите обращение к Вам';
		echo json_encode($json);
		//header( "HTTP/1.0 400" );
	}elseif(!$phone){
		$json['error'] = 'Введите свой номер телефона';
		echo json_encode($json);		
	}elseif(!$date){
		$json['error'] = 'Необходимо указать предварительную дату';
		echo json_encode($json);
	}else{
		$recepient = "mail@ledinu.ru";
		$sitename = "Ledinu.ru";
		$message = "Имя: $name \nТелефон: $phone \nДата: $date";

		$pagetitle = "Новая заявка с сайта \"$sitename\"";
		mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
		$json['error'] = 0; // oшибoк нe былo
		echo json_encode($json); // вывoдим мaссив oтвeтa
	}
}else{
	header( 'Location: /', true, 307 );
}

?>