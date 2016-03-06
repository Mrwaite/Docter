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
                client_data_table_tr += "<tr>
											<td>"+ client_data[i][0] +"</td>
											<td>"+ client_data[i][1] +"</td>
											<td>"+ client_data[i][2] +"</td>
											<td>"+ client_data[i][3] +"</td>
											<td>"+ client_data[i][4] +"</td>
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
		url:'XXX.jsp',
		success:function(data)
		{
		   var person_data = JSON.parse(data);
		   var person_data_p = "";
           person_data_p = "<p>姓名："+ person_data[0] +"</p>
							<p>学历："+ person_data[1] +"</p>
							<p>电话："+ person_data[2] +"</p>
							<p>年龄："+ person_data[3] +"</p>"
						     
		    $("#personInfo_table").append(person_data_p);
		}
	 });
}



function showMyRecord(name){
	$.ajax
	({
		type:'POST',
		url:'XXXX.jsp',
		success:function(data)
		{
		   var record_data = JSON.parse(data);
		   var record_data_table_tr = "";
		   for(var i in record_data){
                record_data_table_tr += "<tr>
											<td>"+ record_data[i][0] +"</td>
											<td>"+ record_data[i][1] +"</td>
											<td>"+ record_data[i][2] +"</td>
											<td>"+ record_data[i][3] +"</td>
											<td>"+ record_data[i][4] +"</td>
						                </tr>"

		    }
		    $("#hor-minimalist-client>tbody").append(record_data_table_tr);
		}
	 });

}




window.onload = function(){
	var person_info = document.getElementById("personInfo");
	var my_client = document.getElementById("myClient");
	var coun_record = document.getElementById("counRecord");
	var evaluation = document.getElementById("evaluation");
	var consult = document.getElementById("consult");
	var hall = document.getElementById("hall");
	person_info.onclick = function(){
          $("#hor-minimalist-client").css("display","none");
          $("#hor-minimalist-record").css("display","none");
          $("#personInfo_table").css("display","block");
	};
	coun_record.onclick = function(){
          $("#hor-minimalist-client").css("display","none");
          $("#hor-minimalist-record").css("display","block");
          $("#personInfo_table").css("display","none");
	};
	evaluation.onclick = function(){
		
	};
	consult.onclick = function(){

	};
	hall.onclick = function(){

	};
}
