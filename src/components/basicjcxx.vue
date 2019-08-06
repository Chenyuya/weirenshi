<template>
	<div>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="部门管理" name="first">
				<!-- <div style="text-align: left;">
					<div class="el-input el-input mini el-input--prefix" style="width: 500px; margin: 0; padding:0 ;">
						<input type="text" autocomplete="off" icon="el-icon-search" placeholder="输入部门名称搜索部门" class="el-input__inner">	
					</div>
				</div> -->
				<el-input placeholder="输入部门名称搜索部门" prefix-icon="el-icon-search" style="width: 500px; vertical-align: middle;">
				</el-input>
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="width: 500px; margin-top: 10px;"></el-tree>
			</el-tab-pane>
			<el-tab-pane label="职位管理" name="second">
				<el-input placeholder="添加职位" prefix-icon="el-input__icon el-icon-plus" style="width: 300px; vertical-align: middle;">
				</el-input>
				<el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
				<el-table :data="tableData" stripe border style="width:100%; margin-top: 10px;">
					<el-table-column type="selection" width="45">
					</el-table-column>
					<el-table-column prop="name" label="编号" width="158">
					</el-table-column>
					<el-table-column prop="job" label="职位名称" width="150">
					</el-table-column>
					<el-table-column prop="email" label="创建时间" width="250">
					</el-table-column>
					<el-table-column prop="js" label="操作" width="680">
						<el-button size="mini">编辑</el-button>
						<el-button type="danger" size="mini">删除</el-button>
					</el-table-column>
				</el-table>
				<el-button type="danger" disabled size="mini" style="margin-top: 8px;">批量删除</el-button>
			</el-tab-pane>
			<el-tab-pane label="职称管理" name="third">
				<el-input placeholder="添加职称" prefix-icon="el-input__icon el-icon-plus" style="width: 300px; vertical-align: middle;">
				</el-input>
				<el-select v-model="value" placeholder="职称等级" size="mini" class="select">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
				<el-table :data="tableData1" stripe border style="width:100%; margin-top: 10px;">
					<el-table-column type="selection" width="45">
					</el-table-column>
					<el-table-column prop="name" label="编号" width="158">
					</el-table-column>
					<el-table-column prop="job" label="职称名称" width="150">
					</el-table-column>
					<el-table-column prop="joba" label="职称级别" width="150">
					</el-table-column>
					<el-table-column prop="email" label="创建时间" width="250">
					</el-table-column>
					<el-table-column prop="js" label="操作" width="680">
						<el-button size="mini">编辑</el-button>
						<el-button type="danger" size="mini">删除</el-button>
					</el-table-column>
				</el-table>
				<el-button type="danger" disabled size="mini" style="margin-top: 8px;">批量删除</el-button>
			</el-tab-pane>
			<el-tab-pane label="奖惩规则" name="fourth">
				<div class="main">
					<el-main>奖惩规则</el-main>
				</div>
			</el-tab-pane>
			<el-tab-pane label="权限组" name="fourt">
				<div class="header">
					<div class="el-input-group__prepend" style="width: 40px;">ROLE_</div>
					<el-input placeholder="请输入角色英文名称" style="width: 169px; margin-left: -1px;">
					</el-input>
					<el-input placeholder="请输入角色中文名称" style="width: 250px; margin-left: 10px;"></el-input>
					<el-button type="primary" size="mini" style="margin-left: 10px;">添加角色</el-button>
				</div>
				<el-collapse v-model="activeName" accordion style="margin-top: 10px; width: 500px;">
					<el-collapse-item title="部门经理" name="1" style="width: 500px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix dete">
								<span>可访问的资源</span>
								<i class="el-icon-delete" style="float: right; color: #f97456;"></i>
							</div>
							<el-tree :data="data1" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
							 :props="defaultProps1">
							</el-tree>
							<div class="butt">
								<el-button size="mini">取消修改</el-button>
								<el-button type="primary" size="mini">确认修改</el-button>
							</div>
						</el-card>
					</el-collapse-item>
					<el-collapse-item title="人事专员" name="2" style="width: 500px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix dete">
								<span>可访问的资源</span>
								<i class="el-icon-delete" style="float: right; color: #f97456;"></i>
							</div>
							<el-tree :data="data1" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
							 :props="defaultProps1">
							</el-tree>
							<div class="butt">
								<el-button size="mini">取消修改</el-button>
								<el-button type="primary" size="mini">确认修改</el-button>
							</div>
						</el-card>
					</el-collapse-item>
					<el-collapse-item title="招聘主管" name="3" style="width: 500px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix dete">
								<span>可访问的资源</span>
								<i class="el-icon-delete" style="float: right; color: #f97456;"></i>
							</div>
							<el-tree :data="data1" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
							 :props="defaultProps1">
							</el-tree>
							<div class="butt">
								<el-button size="mini">取消修改</el-button>
								<el-button type="primary" size="mini">确认修改</el-button>
							</div>
						</el-card>
					</el-collapse-item>
					<el-collapse-item title="培训主管" name="4" style="width: 500px;">
						<el-card class="box-card">
							<div slot="header" class="clearfix dete">
								<span>可访问的资源</span>
								<i class="el-icon-delete" style="float: right; color: #f97456;"></i>
							</div>
							<el-tree :data="data1" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
							 :props="defaultProps1">
							</el-tree>
							<div class="butt">
								<el-button size="mini">取消修改</el-button>
								<el-button type="primary" size="mini">确认修改</el-button>
							</div>
						</el-card>
					</el-collapse-item>
				</el-collapse>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// activeName: 'first',
				tableData: [{
					name: '29',
					job: '技术总监',
					email: '2018-01-11'
				}, {
					name: '30',
					job: '技术总监',
					email: '2018-01-11'
				}, {
					name: '31',
					job: '技术总监',
					email: '2018-01-11'
				}, {
					name: '32',
					job: '技术总监',
					email: '2018-01-11'
				}, {
					name: '33',
					job: '技术总监',
					email: '2018-01-11'
				}],

				options: [{
					value: '选项1',
					label: '正高级'
				}, {
					value: '选项2',
					label: '副高级'
				}, {
					value: '选项3',
					label: '中级'
				}, {
					value: '选项4',
					label: '初级'
				}, {
					value: '选项5',
					label: '员级'
				}],

				tableData1: [{
					name: '29',
					job: '技术总监',
					joba: '正高级',
					email: '2018-01-11'
				}, {
					name: '30',
					job: '技术总监',
					joba: '副高级',
					email: '2018-01-11'
				}, {
					name: '31',
					job: '技术总监',
					joba: '初级',
					email: '2018-01-11'
				}, {
					name: '32',
					job: '技术总监',
					joba: '中级',
					email: '2018-01-11'
				}, {
					name: '33',
					job: '技术总监',
					joba: '高级',
					email: '2018-01-11'
				}],
				data: [{
					label: '股东会',
					children: [{
						label: '董事会',
						children: [{
							label: '总办',
							children: [{
								label: '财务部'
							}, {
								label: '市场部',
								children: [{
									label: '华北市场部',
									children: [{
										label: '石家庄场部'
									}]
								}, {
									label: '华南市场部'
								}, {
									label: '西北市场部',
									children: [{
										label: '西安市场',
										children: [{
											label: '莲湖区市场'
										}]
									}]
								}]
							}, {
								label: '技术部'
							}, {
								label: '运维部'
							}]
						}]
					}],
				}, ],

				data1: [{
					id: 1,
					label: '所有',
					children: [{
						id: 4,
						label: '员工资料',
						children: [{
							id: 9,
							label: '基本资料'
						}],
					},
					{
						id: 4,
						label: '人事管理',
						children: [{
							id: 9,
							label: '员工奖惩'
						}, {
							id: 10,
							label: '员工培训'
						},
						{
							id: 10,
							label: '员工调薪'
						},
						{
							id: 10,
							label: '员工调动'
						}],
					},
					{
						id: 4,
						label: '薪资管理',
						children: [{
							id: 9,
							label: '工资账套管理'
						}, {
							id: 10,
							label: '员工账套设置'
						},
						{
							id: 10,
							label: '工资表管理'
						},
						{
							id: 10,
							label: '月末管理'
						},
						{
							id: 10,
							label: '工资表查询'
						}],
					},
					{
						id: 4,
						label: '统计管理',
						children: [{
							id: 9,
							label: '员工奖惩'
						}, {
							id: 10,
							label: '员工培训'
						},
						{
							id: 10,
							label: '员工调薪'
						},
						{
							id: 10,
							label: '员工调动'
						}],
					},
					{
						id: 4,
						label: '系统管理',
						children: [{
							id: 9,
							label: '员工奖惩'
						}, {
							id: 10,
							label: '员工培训'
						},
						{
							id: 10,
							label: '员工调薪'
						},
						{
							id: 10,
							label: '员工调动'
						}],
					}],
				}],

				defaultProps: {
					children: 'children',
					label: 'label',
				},

				defaultProps1: {
					children: 'children',
					label: 'label',
				}

			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
		},
		activeName: '1',

		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>



<style>
	.el-input__inner {
		height: 28px;
	}

	.el-input__icon {
		line-height: 28px;
	}

	.main {
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		color: #000;
	}

	.header {
		display: flex;
		justify-content: flex-start;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
	}

	.dete {
		flex: 2;
		vertical-align: middle;

	}
	.butt{
		display: flex;
		justify-content: flex-end;
	}
</style>
