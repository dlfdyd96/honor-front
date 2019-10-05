<template>
	<div class="main">
        <div class="wrap">
			<table class="noticeTable">
				<thead class="table">	
					<th class="tableTitle">
						<tr>번호
							<!-- <td>{{board.id}}</td> -->
							<td>{{ getSelectedBoard.No}}</td>
						</tr>
						<tr>제목
							<td>{{ getSelectedBoard.Title }}</td>
						</tr>
						<tr>작성자
							<td>{{ getSelectedBoard.Writer }}</td>
						</tr>
						<tr>작성일
							<td>{{ getSelectedBoard.Date }}</td>
						</tr>
						<tr>조회수
							<td>{{ getSelectedBoard.Hit }}</td>
						</tr>
					</th>
				</thead>
			</table>
			<div>
				{{getSelectedBoard.Contents}}
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	computed : {
		...mapGetters(['getSelectedBoard'])
	},
}
</script>

<style scoped>
.main{
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