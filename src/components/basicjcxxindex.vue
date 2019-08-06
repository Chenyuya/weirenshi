<template>
	<div>
		<el-header style="text-align: right; font-size: 12px">
			<el-header style="float: left; font-size: 22px; color: #fff; padding: 0 10px;">微人事</el-header>
			<i class="el-icon-bell"></i>
			<el-dropdown>
				<font style="margin-right: 15px; color:#fff; font-sizi:18px;">系统管理员
					<img src="../assets/logo.png" width="40px" height="40px" style="border-radius: 50%; vertical-align: middle;" />
				</font>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<hr>
					<el-dropdown-item @click="open">注销</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-header>
		<el-container style="min-height: 655px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246);background: #ececec;">
				<el-menu router>
					<el-submenu index="1" style="background: #ececec;">
						<template slot="title"><i class="fa fa-user-circle-o" style="color: #20A0FF; margin-right: 5px;"></i>员工资料</template>
						<el-menu-item-group>
							<el-menu-item index="./basicindex">基本资料</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" style="background: #ececec;">
						<template slot="title"><i class="fa fa-address-card-o" style="color: #20A0FF; margin-right: 5px;"></i>人事管理</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">员工奖惩</el-menu-item>
							<el-menu-item index="2-2">员工培训</el-menu-item>
							<el-menu-item index="2-3">员工调薪</el-menu-item>
							<el-menu-item index="2-4">员工调动</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" style="background: #ececec;">
						<template slot="title"><i class="fa fa-money" style="color: #20A0FF; margin-right: 5px;"></i>薪资管理</template>
						<el-menu-item-group>
							<el-menu-item index="./basicztindex">工资账套管理</el-menu-item>
							<el-menu-item index="basicygindex">员工账套管路</el-menu-item>
							<el-menu-item index="basicgzbindex">工资表管理</el-menu-item>
							<el-menu-item index="3-4">月末处理</el-menu-item>
							<el-menu-item index="3-5">工资表查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4" style="background: #ececec;">
						<template slot="title"><i class="fa fa-bar-chart" style="color: #20A0FF; margin-right: 5px;"></i>统计管理</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">综合信息统计</el-menu-item>
							<el-menu-item index="4-2">员工积分统计</el-menu-item>
							<el-menu-item index="4-3">人事信息统计</el-menu-item>
							<el-menu-item index="4-4">人事记录统计</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5" style="background: #ececec;">
						<template slot="title"><i class="fa fa-windows" style="color: #20A0FF; margin-right: 5px;"></i>系统管理</template>
						<el-menu-item-group>
							<el-menu-item index="basicjcxxindex">基础信息设置</el-menu-item>
							<el-menu-item index="5-2">系统管理</el-menu-item>
							<el-menu-item index="5-3">操作日志管理</el-menu-item>
							<el-menu-item index="5-4">操作员管理</el-menu-item>
							<el-menu-item index="5-5">备份恢复数据库</el-menu-item>
							<el-menu-item index="5-6">初始化数据库</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-main>
					<div style="height: 20px; width: 100%;">
						<el-breadcrumb spearator-class="el-icon-arrow-right">
							<el-breadcrumb-item :to="{ path: './' }">首页>员工账套设置</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					<basicjcxx-info></basicjcxx-info>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import BasicjcxxInfo from './basicjcxx'
	export default {
		data() {
			return {};
		},
		components: {
			BasicjcxxInfo: BasicjcxxInfo
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
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.el-menu-item-group__title {
		padding: 0;
	}
</style>

<style scoped>

	.el-header {
		background-color: #20a0ff;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.el-menu-item-group__title {
		padding: 0;
		margin: 0;
	}
</style>
