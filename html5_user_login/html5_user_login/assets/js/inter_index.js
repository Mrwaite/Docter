/*function jumpPageNumber(number){
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



function showMyClient(name) {
    var page_number;
    var jump_a;
    $("#hor-minimalist-client").css("display", "block");
    $.ajax({
        type: 'POST',
        url: 'myPatient.jsp?name=' + name,
        success: function (data) {
            var client_data = JSON.parse(data);
            var client_data_table_tr = "";
            for (var i in client_data) {
                client_data_table_tr += '<li style=\"display: none\">\
											<p>姓名：' + '陈威特' + '</p>\
											<p>年龄：' + '20' + '</p>\
											<p>性别：' + '男' + '</p>\
											<p>职业：' + '学生' + '</p>\
											<p>联系方式：' + '155 5555 5555' + '</p>\
										</li>'

            }
            $(".table_information_ul").append(client_data_table_tr);
            var page_number;
            var jump_a;
            page_number = floor(i / 6);
            for (var j = 0; j < page_number; j++) {
                if (j == 0) {
                    jump_a += '<a href=\"javascript:void(0);\" onclick=\"jumpPageNumber(this);\" class=\"active\">' + j + 1 + '</a>'
                } else {
                    jump_a += '<a href=\"javascript:void(0);\" onclick=\"jumpPageNumber(this);\">' + j + 1 + '</a>'
                }
            }
            $(".page").append(jump_a);
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
		   var person_data_span = "";
		   for(var i = 0;i < 5;i++){
           	  person_data_span = "<span>"+person_data[i]+"</span>"
           	  $("#personInfo_table_ul li").eq(i).append(person_data_span);
           }
           
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
                record_data_table_tr += "<li>\
											<time class=\"cbp_tmtime\"><span>"+record_data[i][""]+"/"+record_data[i][""]+"/"+record_data[i][""]+"</span> <span>"+record_data[i][""]+":"+record_data[i][""]+"</span></time>\
											<div class=\"cbp_tmicon cbp_tmicon-phone\"></div>\
											<div class=\"cbp_tmlabel\">\
												<h2>\"Ricebean black-eyed pea\"</h2>\
												<p>"+record_data[i][""]+"</p>\
											</div>\
										</li>"

		    }
		    $("#hor-minimalist-client>tbody").append(record_data_table_tr);
		}
	 });

}
*/
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
/*
function getReportInfo(){
	$.ajax({
		type:'get',
		url: '',
		success:function (data){
			var report_info = JSON.parse(data);
			var report_info_li = '';
			var chat_url = 'change_report.jsp?doctor_name='+'医生名字'+'&patient_name='+'病人名字'+'是什么检查表';
			for(var i in report_info){
				report_info_li +=   '<li>\
										<p>'+@病人的报告@什么检查表+'</p>\
										<p>'+@contentsdddddddddddddddddddddggggrte+'</p>\
										<button class=\"submit_answer flt_rt\" onclick=\'open_chat(\""+ chat_url +"\");\'>修改</button>\
									</li>'
			}
			$(".table_report_ul").append(report_info_li);
		}
	});
}
/*
//下面是获取announce内容的函数
function showAnnounceInfo(){
	$.ajax({
		type:"get",
		url:"xxx.jsp?xxx",
		success:function(data){
			var announce_info = JSON.parse(data);
			$("#announce_index").html(announce_info);
		}
	});
}*/




$(document).ready(function(){
	var input_text = "提交";
	var class_name = ["姓名","年龄","电话","职业","邮箱"];
	$('.my-slider').unslider({
				dots: true, 
			});
	$('input').glDatePicker({
		 showAlways: true,
		 cssName: 'flatwhite',
		 allowMonthSelect: false,
         allowYearSelect: false,
		 
	});
	$("#mydate").css("display","none");
	$(".gldp-flatwhite").css({"display":"inline-block","margin-left":"50px","margin-top":"20px","position":"relative","top":"0","left":"0"})
    $("submit_about_evaluation").submit(function(){
       if($("input_about_evaluation").val() == ""){
           return false;
       } 
        setTimeout("window.close();",2000)
    });
	$("#submit_report").submit(function(){
		var change_domain = $("#input_about_evaluation").val();
		if(change_report == ''){
			return false;
		}
		setTimeout('window.close()',2000);
	});
	$(".btnplayit").on("click",function(){
		var $new_button = $("<button class=\"btnplayit_submit\">提交</button>")
        $(this).prev().html("<input class=\"personInfo_input\" />");
        $(this).parent().append($new_button);
        $(this).remove();
	});
	$(".personInfo_table_ul li").on("click",".btnplayit_submit",function(){
			var class_number = $(".personInfo_table_ul>li").index($(this).parent());
			$.ajax({
				type: "post",
				url: "changeInfo.jsp",
				data: {
					doctor: name,
					number: class_name[class_number],
					changeData: $(".personInfo_input").val(),
				},
				success: function(){
					location.reload();
				}
			});
		});
})

