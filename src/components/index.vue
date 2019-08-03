<template>
	<div>
		<el-header style="text-align: right; font-size: 12px">
			<el-header style="float: left; font-size: 22px; color: #fff; padding: 0 10px;">微人事</el-header>
				<i class="el-icon-bell"></i>
			<el-dropdown>
				<font style="margin-right: 15px; color:#fff; font-sizi:18px;">系统管理员
				<img src="../assets/logo.png" width="40px" height="40px" style="border-radius: 50%; vertical-align: middle;"/>
				</font>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<hr>
					<el-dropdown-item>注销</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-header>
		<el-container style="min-height: 655px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246);background: #ececec;">
				<el-menu :default-openeds="['', '']">
					<el-submenu index="1" style="background: #ececec;">
						<template slot="title"><i class="el-icon-user-solid" style="color: #20A0FF;"></i>员工资料</template>
						<el-menu-item-group >
							<el-menu-item index="1-1">基本资料</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" style="background: #ececec;">
						<template slot="title"><i class="el-icon-s-marketing" style="color: #20A0FF;"></i>人事管理</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">员工奖惩</el-menu-item>
							<el-menu-item index="2-2">员工培训</el-menu-item>
							<el-menu-item index="2-3">员工调薪</el-menu-item>
							<el-menu-item index="2-4">员工调动</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" style="background: #ececec;">
						<template slot="title"><i class="el-icon-c-scale-to-original" style="color: #20A0FF;"></i>薪资管理</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">工资账套管理</el-menu-item>
							<el-menu-item index="3-2">员工账套管路</el-menu-item>
							<el-menu-item index="3-3">工资表管理</el-menu-item>
							<el-menu-item index="3-4">月末处理</el-menu-item>
							<el-menu-item index="3-5">工资表查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4" style="background: #ececec;">
						<template slot="title"><i class="el-icon-s-data" style="color: #20A0FF;"></i>统计管理</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">综合信息统计</el-menu-item>
							<el-menu-item index="4-2">员工积分统计</el-menu-item>
							<el-menu-item index="4-3">人事信息统计</el-menu-item>
							<el-menu-item index="4-4">人事记录统计</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5" style="background: #ececec;">
						<template slot="title"><i class="el-icon-menu" style="color: #20A0FF;"></i>系统管理</template>
						<el-menu-item-group>
							<el-menu-item index="5-1">基础信息设置</el-menu-item>
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
							<el-breadcrumb-item :to="{ path: '/' }">首页></el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					
					<display-info>首页</display-info>
				</el-main>
			</el-container>
			
		</el-container>
	</div>
</template>

<script>
	import DisplayInfo from './basic'
	export default {
		data() {
			return {		
			};
		},
	components: {
			DisplayInfo: DisplayInfo
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
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
