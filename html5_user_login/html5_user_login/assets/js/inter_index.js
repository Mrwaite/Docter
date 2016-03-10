function showMyClient(name){
    $("#hor-minimalist-client").css("display","block");
	$.ajax
	({
		type:'POST',
		url:'myPatient.jsp?name=' + name,
		success:function(data)
		{
		   var client_data = JSON.parse(data);
		   var client_data_table_tr = "";
		   for(var i in client_data){
                client_data_table_tr += "<tr>\
											<td>"+ client_data[i][0] +"</td>\
											<td>"+ client_data[i][1] +"</td>\
											<td>"+ client_data[i][2] +"</td>\
											<td>"+ client_data[i][3] +"</td>\
											<td>"+ client_data[i][4] +"</td>\
						                </tr>"

		    }
		    $("#hor-minimalist-client>tbody").append(client_data_table_tr);
		}
	 });

}


function showPersonInfo(name){
    $.ajax
	({
		type:'POST',
		url:'XXX.jsp?name=' + name,
		success:function(data)
		{
		   var person_data = JSON.parse(data);
		   var person_data_p = "";
           person_data_p = "<p>姓名："+ person_data[0] +"</p>\
							<p>学历："+ person_data[1] +"</p>\
							<p>电话："+ person_data[2] +"</p>\
							<p>年龄："+ person_data[3] +"</p>"
						     
		    $("#personInfo_table").append(person_data_p);
		}
	 });
}



function showMyRecord(name){
	$.ajax
	({
		type:'POST',
		url:'XXXX.jsp?name=' + name,
		success:function(data)
		{
		   var record_data = JSON.parse(data);
		   var record_data_table_tr = "";
		   for(var i in record_data){
                record_data_table_tr += "<tr>\
											<td>"+ record_data[i][0] +"</td>\
											<td>"+ record_data[i][1] +"</td>\
											<td>"+ record_data[i][2] +"</td>\
											<td>"+ record_data[i][3] +"</td>\
											<td>"+ record_data[i][4] +"</td>\
						                </tr>"

		    }
		    $("#hor-minimalist-client>tbody").append(record_data_table_tr);
		}
	 });

}


function getEvaluationInfo(name){
    $.ajax
	({
		type:'POST',
		url:'XXXX.jsp?name=' + name,
		success:function(data)
		{
		   var evaluation_data = JSON.parse(data);
		   var evaluation_data_tr = "";
		   for(var i in evaluation_data){
                evaluation_data_tr += "<tr>\
											<td>"+evaluation_data_tr[i][0]+"</td>\
											<td>"+evaluation_data_tr[i][1]+"</td>\
											<td>"+evaluation_data_tr[i][2]+"</td>\
											<td>"+evaluation_data_tr[i][3]+"</td>\
											<td>"+evaluation_data_tr[i][4]+"</td>\
											<td>"+evaluation_data_tr[i][5]+"</td>\
											<td>"+evaluation_data_tr[i][6]+"</td>\
											<td><button id=\"goInToEvaluation\" class=\"button next\" >go</button></td>\
						                </tr>"

		    }
		    $("#hor-minimalist-client>tbody").append(evaluation_data_tr);
		   
		}
	 });
}




window.onload = function(){
	
}
