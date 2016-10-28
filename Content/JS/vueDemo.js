$(document).ready(function () {
	createMarkdown();
	dataBind();
	forBind();
	ifBind();
	methodBind();
	
});

function createMarkdown() {
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
};

function dataBind() {
	var helloApp = new Vue({
		el: "#twoWayBinding",
		data: {
			Message: "Hello-Daemon",
			title: new Date()
		}
	});
};

function forBind() {
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
};

function ifBind() {
	var ifApp = new Vue({
		el: "#ifApp",
		data: {
			seen: true
		}
	});
};

function methodBind() {
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
};