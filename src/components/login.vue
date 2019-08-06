<template>
	<div class="login-box">
		<div class="login-title">
			系统登录
		</div>
		<div class="login-form">
			<div class="layui-form item-coentern">
				<input type="text" autocomplete="off" placeholder="账号" class="el-input" id="username" v-model="username">
			</div>
		</div>
		<div class="login-form">
			<div class="layui-form item-coentern">
				<input type="password" autocomplete="off" placeholder="密码" class="el-input" id="userpassword" v-model="userpassword">
			</div>
		</div>
		<div class="login-check">
			<input type="checkbox" aria-hidden="true">
			记住密码
		</div>
		<div class="but">
			<button class="button" @click="btn"><router-link to="./" tag="a">登录</router-link></button>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				username: "",
				userpassword:"",
			};
		},
		methods: {
			btn() {
			const zh = this.username;
			const mm = this.userpassword;
				if(zh == "" || mm == ""){
					alert("请输入用户名或密码");
				}
			}
		},
	}
</script>

<style scoped>
	a{
		color: #fff;
		text-decoration: none;
	}
	.login-box {
		width: 350px;
		margin: 9.3% auto 0;
		background: #fff;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.3)0 0 25px;
		padding: 35px 35px 15px;
	}

	.login-title {
		font-size: 18px;
		font-weight: bold;
		margin: 0 auto 40px;
		text-align: center;
	}

	.login-form {
		margin-bottom: 22px;
	}

	.item-coentern {
		line-height: 40px;
		position: relative;
		font-size: 14px;
	}

	.el-input {
		-webkit-appearance: none;
		background-color: #fff;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		font-size: inherit;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		width: 100%;
	}
	
	.login-check{
		text-align: center;
		color: #409eff;
		margin-bottom: 35px;
	}
	
	.login-check input{
		vertical-align: middle;
	}
	
	.but{
		width: 100%;
		height: 40px;
		border-radius: 4px;
		margin-bottom: 20px;
	}
	
	.button{
		width: 100%;
		height: 40px;
		background: #409EFF;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 14px;
		border-color: #409EFF;
		border: 1px solid #dcdfe6;
		
	}
</style>
