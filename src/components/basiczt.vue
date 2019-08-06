<template>
	<div>
		<div class="dan">
			<el-button type="primary" size="mini" icon="el-icon-plus" style="float: right;">添加账套</el-button>
			<el-button type="primary" icon="el-icon-refresh" style="background: #67c23a; padding-top: 8px; margin-right: 68px;"></el-button>
		</div>
		<el-table :data="tableData" stripe style="width: 96.5%; margin-top: 10px;">
			<el-table-column type="selection" width="35">
			</el-table-column>
			<el-table-column prop="ztmc" label="账套名称" width="142" align="center">
			</el-table-column>
			<el-table-column prop="jbgz" label="基本工资" width="80" align="center">
			</el-table-column>
			<el-table-column prop="jtbz" label="交通补助" width="80" align="center">
			</el-table-column>
			<el-table-column prop="wcbz" label="午餐补助" width="80" align="center">
			</el-table-column>
			<el-table-column prop="jj" label="奖金" width="80" align="center">
			</el-table-column>
			<el-table-column prop="qysj" label="启用时间" width="120" align="center">
			</el-table-column>
			<el-table-column label="养老金" align="center">
				<el-table-column prop="bl" label="比率" width="100" align="center">
				</el-table-column>
				<el-table-column prop="js" label="基数" width="100" align="center">	
				</el-table-column>
			</el-table-column>
			<el-table-column label="医疗保险" align="center">
				<el-table-column prop="bl" label="比率" width="100" align="center">
				</el-table-column>
				<el-table-column prop="js" label="基数" width="100" align="center">	
				</el-table-column>
			</el-table-column>
			<el-table-column label="公积金" align="center">
				<el-table-column prop="bl" label="比率" width="100" align="center">
				</el-table-column>
				<el-table-column prop="js" label="基数" width="100" align="center">	
				</el-table-column>
			</el-table-column>
			<el-table-column label="操作" align="center">
				<el-table-column prop="bj" label="编辑" width="200" align="center">
					<el-button size="mini">编辑</el-button>
				</el-table-column>
				<el-table-column prop="js" label="删除" width="200" align="center">	
					<el-button type="danger" size="mini" @click="open">删除</el-button>
				</el-table-column>
			</el-table-column>
		</el-table>
		<el-button type="danger" round disabled size="mini" style="margin-top: 8px;">批量删除</el-button>
	</div>
</template>

<script>
	export default {
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
					ztmc: '市场部工资账套',
					jbgz: '9000',
					jtbz: '500',
					wcbz: '800',
					jj: '4000',
					qysj: '2018-01-24',
					bl: '0.07',
					js: '2000'
				}, {
					ztmc: '人事部工资账套',
					jbgz: '9000',
					jtbz: '500',
					wcbz: '800',
					jj: '4000',
					qysj: '2018-01-24',
					bl: '0.07',
					js: '2000'
				}, {
					ztmc: '运维部工资账套',
					jbgz: '9000',
					jtbz: '500',
					wcbz: '800',
					jj: '4000',
					qysj: '2018-01-24',
					bl: '0.07',
					js: '2000'
				}]
			}
		}
	}
</script>

<style>
	.dan{
		height: 30px;
		display: flex;
		justify-content: space-between;
	}
</style>
