function jumpPageNumber(number){
	var table_ul = $("ul.table_information_ul").children();
	var number_change = parseInt(number.innerHTML);
	var page_a = $(".page").children();
	for(var j = 0, page_length = page_a.length;j < page_length;j++){
		page_a.eq(j).attr("class","");
	}
	number.className = 'active';
	for(var i = 0, ul_length = table_ul.length; i < ul_length;i++){
		if(i>= (number_change-1)*6 && i <= number_change*6-1){
			table_ul.eq(i).css("display","block");
			continue;
		}
		table_ul.eq(i).css("display","none");
	}
}


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
		   var i = 0;
		   for(var i in client_data){
                client_data_table_tr += '<li style=\"display: none\">\
											<p>姓名：'+'陈威特'+'</p>\
											<p>年龄：'+'20'+'</p>\
											<p>性别：'+'男'+'</p>\
											<p>职业：'+'学生'+'</p>\
											<p>联系方式：'+'155 5555 5555'+'</p>\
										</li>'

		    }
		    $(".table_information_ul").append(client_data_table_tr);
		    while(i<=5){
		    	$(".table_information_ul").children()[i].css("display","block");
		    }
		}
	 });

}


/*function showPersonInfo(name){
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
		}
						     
		    $("#personInfo_table").append(person_data_p);
	 });
}*/


/*
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

}*/

/*
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
*/

/*
function downConsult(doctor_name){
     $.ajax({
     	type:"get",
     	url:"xxx.jsp",
     	success:function(data){
     		var patient_comment = JSON.parse(data);
     		var patient_comment_li = '';
     		for(var i in patient_comment){
     			patient_comment_li += '<li class=\"comment_li\">\
											<h3>'+patient_comment[i]['']+'</h3>\
											<p>'+patient_comment[i]['']+'</p>\
											<input type=\"text\" name=\"answer_pantient\" class=\"answer_pantient\" />\
											<input type=\"submit\" class=\"submit_answer\" onclick=\"upConsult(doctor_name,patient_name,this)\" value=\"回复\" />\
										</li>'	
     		}
     	}
     });
}*/
/*
function upConsult(doctor_name,patient_name,factor){
     $.ajax({
     	type:"post",
     	url:"xxx.jsp",
     	data:{
     		doctorName:doctor_name,
     		patientName:patient_name,
     	},
     	success:function(data){
     		if(data)
             $(factor).parent().remove();
     	}
     });
}*/

function getReportInfo(){
	$.ajax({
		type:'get',
		url: '',
		success:function (data){
			var report_info = JSON.parse(data);
			var report_info_li = '';
			var chat_url = 'change_report.jsp?doctor_name='+''+'&patient_name='+'';
			for(var i in report_info){
				report_info_li +=   '<li>\
										<p>'+@医生对@病人的报告+'</p>\
										<p>'+@contentsdddddddddddddddddddddggggrte+'</p>\
										<button class=\"submit_answer flt_rt\" onclick=\'open_chat(\""+ chat_url +"\");\'>修改</button>\
									</li>'
			}
			$(".table_report_ul").append(report_info_li);
		}
	});
}

/*下面是获取announce内容的函数*/
function showAnnounceInfo(){
	$.ajax({
		type:"get",
		url:"xxx.jsp?xxx",
		success:function(data){
			var announce_info = JSON.parse(data);
			$("#announce_index").html(announce_info);
		}
	});
}



$(document).ready(function(){
	$("#submit_report").submit(function(){
		var change_domain = $("#input_about_evaluation").val();
		if(change_report == ''){
			return false;
		}
		setTimeout('window.close()',2000);
	})
})
