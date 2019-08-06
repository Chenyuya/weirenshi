<template>
	<div>
		<div class="gzb">
			<el-button type="primary" plain size="mini">请选择部门：</el-button>
			<div>
				<el-select v-model="value" placeholder="请选择" size="mini" class="select">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</div>
		<div class="main">
			<el-main>Main</el-main>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '股东会'
				}, {
					value: '选项2',
					label: '董事会'
				}, {
					value: '选项3',
					label: '总办'
				}, {
					value: '选项4',
					label: '财务部'
				}, {
					value: '选项5',
					label: '市场部'
				}, {
					value: '选项5',
					label: '华北市场部'
				}, {
					value: '选项5',
					label: '华南市场部'
				}, {
					value: '选项5',
					label: '石家庄市场部'
				}, {
					value: '选项5',
					label: '西北市场部'
				}, {
					value: '选项5',
					label: '技术部'
				}, {
					value: '选项5',
					label: '运维部'
				}, {
					value: '西北选项5',
					label: '市场部'
				}],
			}
		}
	}
</script>

<style>
	.gzb {
		display: flex;
		justify-content: flex-start;
	}
	.select {
		margin-left: 4px;
	}
	.main{
		width: 100%;
		text-align: center;
	}
</style>
