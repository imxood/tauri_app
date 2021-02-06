<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="1. Welcome to Your Vue.js App" />
		<MyForm />
	</div>
</template>

<script>
import MyForm from "./components/MyForm.vue";
import HelloWorld from "./components/HelloWorld.vue";
// import { invoke } from 'tauri/api/tauri';

export default {
	name: "App",
	components: {
		HelloWorld,
		MyForm
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
