module.exports = {
	crossorigin: "anonymous",
	configureWebpack: {
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": "true",
				"Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
				"Access-Control-Allow-Headers": "origin, x-requested-with, accept, access-control-allow-origin,authorization,content-type",
				"Access-Control-Max-Age": "36000",
				"Access-Control-Expose-Headers": "*"
			}
		}
	}
};
