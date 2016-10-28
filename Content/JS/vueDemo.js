var markDown = new Vue({
	el: "#editor",
	data: {
		input: "# hello-Daemon_W_Geek's Garage"
	},
	computed: {
		compiledMarkdown: function () {
			return marked(this.input, {
				sanitize: true
			})
		}
	},
	methods: {
		update: function (e) {
			this.input = e.target.value
		}
	}
});
var helloApp = new Vue({
	el: "#Hello",
	data: {
		Message: "Hello-Daemon",
		title: new Date()
	}
});
var listApp = new Vue({
	el: "#dataList",
	data: {
		todos: [{
			text: "ZSW"
		}, {
			text: "Daemon"
		}, {
			text: "Both"
		}, ]
	}
});
var ifApp = new Vue({
	el: "#ifApp",
	data: {
		seen: true
	}
});
var methodApp = new Vue({
	el: "#methodApp",
	data: {
		inputDisplay: "No Input!"
	},
	methods: {
		inputChange: function (e) {
			this.inputDisplay = e.target.value;
		}
	}
});

$(document).ready(function () {
	$("body>*").on("mouseenter", function (e) {
		console.log(e.target.nodeName);
		//iframe获取控件
		//$(document.getElementById("iframeId").contentWindow.document).find("*").on("mouseenter",function(e){console.log(e.target.nodeName+"frame")})
	});
});