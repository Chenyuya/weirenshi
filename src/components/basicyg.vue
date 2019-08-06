<template>
	<div>
	<el-table :data="tableData" stripe border style="width:100%;">
		<el-table-column type="selection" width="35">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="158" align="center">
		</el-table-column>
		<el-table-column prop="job" label="工号" width="133" align="center">
		</el-table-column>
		<el-table-column prop="email" label="电子邮件" width="220" align="center">
		</el-table-column>
		<el-table-column prop="iphone" label="电话号码" width="180" align="center">
		</el-table-column>
		<el-table-column prop="ssbm" label="所属部门" width="150" align="center">
		</el-table-column>
		<el-table-column prop="bj" label="工资账套" width="400" align="center">
			<el-button type="primary" plain size="mini">人事部工作账套</el-button>
		</el-table-column>
		<el-table-column prop="js" label="操作" width="400" align="center">	
			<el-button type="danger" size="mini">修改账单</el-button>
		</el-table-column>
	</el-table>
	<el-pagination
		background
		layout="prev, pager, next"
		:total="200" style="float: right;margin-top: 5px;">
	</el-pagination>
	</div>
</template>

			<!-- <el-button type="primary" plain size="mini">人事部工作账套</el-button>
			<el-button type="primary" plain size="mini">运维部工作账套</el-button>
			<el-button type="primary" plain size="mini">暂未设置</el-button>
			<el-button type="primary" plain size="mini">暂未设置</el-button> -->



<script>
	export default {
		data() {
			return {
				tableData: [{
					name: '江南一点雨',
					job: '001',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '总办'
				}, {
					name: '陈静',
					job: '002',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '财务部'
				}, {
					name: '陈宇',
					job: '003',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '技术部'
				},{
					name: '陈赫',
					job: '004',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '运维部'
				},{
					name: '陈亮',
					job: '005',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '技术部'
				},{
					name: '陈佳',
					job: '006',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '运维部'
				},{
					name: '陈浩',
					job: '007',
					email: 'laowang@qq.com',
					iphone: '18565558897',
					ssbm: '技术部'
				}]
			}
		}
	}
</script>

<style>
</style>
