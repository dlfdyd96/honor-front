<template>
	<div id="main">
        <div class="wrap">
			<table class="noticeTable">
				<thead class="table">	
					<th class="tableTitle">
						<tr>번호</tr>
						<tr>제목</tr>
						<tr>작성자</tr>
						<tr>작성일</tr>
						<tr>조회수</tr>
					</th>
				</thead>
			</table>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#main{
	margin: auto;
	display: table;
	min-height: 100vh;
	height: calc(100vh-89px);
	
}
.wrap{
	display: table-cell;
	vertical-align: middle;
	margin: auto;
}
.noticeTable{
	position: relative;
	border-collapse: collapse;
	margin: auto;
	width: 1036px;
	text-align: center;
	border-bottom: 2px solid rgb(128,128,128);
}
.table{
	font-size: 22px;
	background-color: transparent;
}
.tableTitle{
	border-bottom: 2px solid rgb(128,128,128);
}
</style>