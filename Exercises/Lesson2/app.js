const app = Vue.createApp({
	data() {
		return {
			number: null,
            comment: 'Xem nào',
			xsmbLink: 'https://xoso.com.vn',
		}
	},
	methods: {
		getLuckyNumber() {
			this.number = Math.floor(Math.random() * 100);
			if (this.number < 50) {
                this.comment = `Click để ghi ngay con đề ${this.number} nào!`;
			} else {
				this.comment = `Bà chủ, ghi em con ${this.number} ngay và luôn!`;
			}
		}
	}
});


app.mount('#user-goal');