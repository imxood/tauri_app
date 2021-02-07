<template>
	<el-row>
		<el-button type="danger" @click.native="click_tauri">Tauri</el-button>
	</el-row>
</template>

<script>
import * as tauri from "tauri/api/tauri";
import * as event from "tauri/api/event";

window.onTauriInit = function() {
	event.listen("rust-event", (payload) => {
		console.log("rust-event");
		console.log(JSON.stringify(payload));
	});
};

export default {
	name: "Button",
	methods: {
		click_tauri() {
			tauri.invoke({
				cmd: "myCustomCommand",
				argument: "incoke param",
			});
			tauri
				.promisified({ cmd: "myCustomCommand", argument: "promisified param" })
				.then(() => {
					console.log("ok");
				});
		},
	},
};
</script>

<style></style>
