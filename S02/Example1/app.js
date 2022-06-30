const app = Vue.createApp({
	data() {
		return {
			courseGoal: 'Finish the course and learn Vue!',
			vueLink: 'https://nam.name.vn'
		}
	},
	methods: {
		outputGoal() {
			const randNum = Math.random();
			if (randNum < 0.5) {
				return "Bad";
			} else {
				return "Good";
			}
		}
	}
});


app.mount('#user-goal');