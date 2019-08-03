<template>
	<el-table :data="tableData" border :cell-style="cellstyle" :header-cell-style="rowClass" style="width: 100%">
		<el-table-column type="selection" width="35">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="100">
		</el-table-column>
		<el-table-column prop="Jobnumber" label="工号" width="100">
		</el-table-column>
		<el-table-column prop="Gender" label="性别" width="50">
		</el-table-column>
		<el-table-column fixed prop="date" label="日期" width="120">
		</el-table-column>
		<el-table-column prop="IDcardNo" label="身份证号码" width="180">
		</el-table-column>
		<el-table-column prop="Maritalstatus" label="婚姻状况" width="80">
		</el-table-column>
		<el-table-column prop="Nation" label="民族" width="60">
		</el-table-column>
		<el-table-column prop="Nationplace" label="籍贯" width="80">
		</el-table-column>
		<el-table-column prop="Appearance" label="政治面貌" width="80">
		</el-table-column>
		<el-table-column prop="Email" label="电子邮件" width="150">
		</el-table-column>
		<el-table-column prop="iphone" label="电话号码" width="150">
		</el-table-column>
		<el-table-column prop="address" label="联系地址" width="220">
		</el-table-column>
		<el-table-column prop="departments" label="所属部门" width="80">
		</el-table-column>
		<el-table-column prop="position" label="职位" width="80">
		</el-table-column>
		<el-table-column prop="Title" label="职称" width="70">
		</el-table-column>
		<el-table-column prop="Form" label="聘用形式" width="90">
		</el-table-column>
		<el-table-column prop="entry" label="入职日期" width="120">
		</el-table-column>
		<el-table-column prop="Correction" label="转正日期" width="120">
		</el-table-column>
		<el-table-column prop="Starting" label="合同起始日期" width="150">
		</el-table-column>
		<el-table-column prop="Contract" label="合同截至日期" width="150">
		</el-table-column>
		<el-table-column prop="period" label="合同期限" width="80">
		</el-table-column>
		<el-table-column prop="Highest" label="最高学历" width="80">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="150">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				<el-button type="text" size="small">编辑</el-button>
				<el-button type="text" size="delete">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		methods: {
			handleClick(row) {
				console.log(row);
				
			}
		},
		data() {
			
			return {
				
				tableData: [{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				},{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '2016-05-02',
					IDcardNo: '610122199001011256',
					Maritalstatus: '已婚',
					Nation: '汉族',
					Nationplace: '陕西',
					Appearance: '普通公民',
					Email: 'laowang@qq.com',
					iphone: '18569255351',
					address: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					Title: '教授',
					Form: '劳务合同',
					entry: '2018-01-01',
					Correction: '2018-04-01',
					Starting: '2018-01-01',
					Contract: '2020-01-01',
					period: '2年',
					Highest: '本科'
				} ]
			}
		},
		cellstyle({row, column, rowIndex,columnIndex}){
			return"text-align:center";
		},
		
	}
</script>

<style>
</style>
