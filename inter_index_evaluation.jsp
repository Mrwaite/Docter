<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" %>
<html>
<head>
	
	<title>预约测评</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/inter_style.css" rel="stylesheet" type="text/css">	
</head>
<body>

	<%
		String name = session.getAttribute("name").toString();
		session.setAttribute("name",name);
	%>
	
	<div class="templatemo-container">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 black-bg left-container">
			<h1 class="logo-left hidden-xs margin-bottom-60">心理在线</h1>			
			<div class="tm-left-inner-container">
				<ul class="nav nav-stacked templatemo-nav">
				  <li><a href="inter_index.jsp"><i class="fa fa-home"></i>主界面</a></li>
				  <li><a href="advisory.jsp"  class="active"><i class="fa fa-question"></i>咨询中心</a></li>
				  <li><a href="recover.jsp"><i class="fa fa-plus-square"></i>康复中心</a></li>
				  <li><a href="report.jsp"><i class="fa fa-edit"></i>报告中心</a></li>
				  <li><a href="warning.jsp"><i class="fa fa-exclamation"></i>预警中心</a></li>
				   <li><a href="personInformation.jsp" ><i class="fa fa-bullhorn"></i>个人信息</a></li>
				</ul>
			</div>
		</div> <!-- left-->
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 white-bg right-container">
			<h1 class="logo-right hidden-xs margin-bottom-60">咨询系统</h1>		
			<div class="tm-right-inner-container">
				<ul id="main_select" class="nav nav-stacked templatemo-nav">
					  <li id="myClient"><a href="inter_index_myClient.jsp?name=<%=name %>"><i class="fa fa-user"></i>我的客户</a></li>
					  <li id="counRecord"><a href="inter_index_record.jsp"><i class="fa fa-bars"></i>咨询记录</a></li>
					  <li id="evaluation"><a href="inter_index_evaluation.jsp"  class="inter_active"><i class="fa fa-user"></i>预约测评</a></li>
					  <li id="consult"><a href="inter_index_consult.jsp"><i class="fa fa-user"></i>预约咨询</a></li>
				</ul>
			</div>
			<table id="hor-minimalist-client" class="hor-minimalist" summary="Employee Pay Sheet" style="margin-top: -30px;">
					<thead>
					     <tr>
							<th scope="col">姓名</th>
							<th scope="col">年龄</th>
							<th scope="col">性别</th>
							<th scope="col">职业</th>
							<th scope="col">联系方式</th>
							<th scope="col">测评表</th>
							<th scope="col">得分</th>
							<th scope="col">前往测评</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
            </table>
           
		</div> <!-- right-->
	</div>
	<script src="assets/js/jquery-1.8.2.min.js" ></script>
	<script src="assets/js/inter_index.js"></script>
	<script type="text/javascript">
		var name = '<%=name%>';
		getEvaluationInfo(name);
	</script>
</body>
</html>