<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<MyForm />
		<Button />
	</div>
</template>

<script>
import MyForm from "./components/MyForm.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue"

export default {
	name: "App",
	components: {
		HelloWorld,
		MyForm,
		Button
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
