
<template>
	<div>
		<el-header class="header">
			<div>
				<el-input placeholder="通过员工名搜索员工,记得回车哦" prefix-icon="el-icon-search" style="width: 400px; margin-right: 10px;">
				</el-input>
				<el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
				<el-button type="primary" icon="fa fa-lg fa-angle-double-down" size="mini">高级搜索</el-button>
				<el-button type="primary" size="mini" icon="el-icon-plus" style="float: right;">添加员工</el-button>
				<el-button type="success" size="mini" icon="fa fa-lg fa-level-down" style="float: right;">导出数据</el-button>
				<el-button type="success" size="mini" icon="fa fa-lg fa-level-up" style="float: right;">导入数据</el-button>
			</div>
		</el-header>
		
		<el-table :data="tableData" stripe border style="width: 100%; margin-top: -10px;" >
			<el-table-column type="selection" width="35">
			</el-table-column>
			<el-table-column fixed="left" prop="name" label="姓名" width="100" align="center">
			</el-table-column>
			<el-table-column prop="Jobnumber" label="工号" width="100">
			</el-table-column>
			<el-table-column prop="Gender" label="性别" width="50" align="center">
			</el-table-column>
			<el-table-column prop="date" label="出生日期" width="120">
			</el-table-column>
			<el-table-column prop="IDcardNo" label="身份证号码" width="180">
			</el-table-column>
			<el-table-column prop="Maritalstatus" label="婚姻状况" width="80" align="center">
			</el-table-column>
			<el-table-column prop="Nation" label="民族" width="60" align="center">
			</el-table-column>
			<el-table-column prop="Nationplace" label="籍贯" width="80" align="center">
			</el-table-column>
			<el-table-column prop="Appearance" label="政治面貌" width="80" align="center">
			</el-table-column>
			<el-table-column prop="Email" label="电子邮件" width="150" align="center">
			</el-table-column>
			<el-table-column prop="iphone" label="电话号码" width="150" align="center">
			</el-table-column>
			<el-table-column prop="address" label="联系地址" width="220">
			</el-table-column>
			<el-table-column prop="departments" label="所属部门" width="80" align="center">
			</el-table-column>
			<el-table-column prop="position" label="职位" width="80" align="center">
			</el-table-column>
			<el-table-column prop="Title" label="职称" width="70" align="center">
			</el-table-column>
			<el-table-column prop="Form" label="聘用形式" width="90" align="center">
			</el-table-column>
			<el-table-column prop="entry" label="入职日期" width="120" align="center">
			</el-table-column>
			<el-table-column prop="Correction" label="转正日期" width="120" align="center">
			</el-table-column>
			<el-table-column prop="Starting" label="合同起始日期" width="150" align="center">
			</el-table-column>
			<el-table-column prop="Contract" label="合同截至日期" width="150" align="center">
			</el-table-column>
			<el-table-column prop="period" label="合同期限" width="80" align="center">
			</el-table-column>
			<el-table-column prop="Highest" label="最高学历" width="80" align="center">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="280">
				<template slot-scope="scope">
					<el-row>
						<el-button size="mini">编辑</el-button>
						<el-button type="primary" size="mini">查看高级资料</el-button>
						<el-button type="danger" size="mini" @click="open">删除</el-button>
					</el-row>
				</template>
			</el-table-column>
		</el-table>
		<div class="dan">
			<el-button type="danger" disabled size="mini">批量删除</el-button>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="200">
			</el-pagination>
		</div>
	</div>
</template>


<script>
	export default {
		methods: {
			handleClick(row) {
				console.log(row);
			}
		},
	methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
		data() {
			return {

				tableData: [{
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}, {
					name: '江南一点雨',
					Jobnumber: '001',
					Gender: '男',
					date: '1998-01-01',
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
				}]
			}
		},
	}
</script>

<style>
	.header{
		padding: 0;
		margin: 0;
	}
	.el-input__inner{
		height: 28px;
	}
	.el-input__icon{
		line-height: 28px;
	}
	.dan{
		display: flex;
		justify-content: space-between;
		margin-top: 4px;
	}
</style>
