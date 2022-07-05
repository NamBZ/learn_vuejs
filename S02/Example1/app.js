const app = Vue.createApp({
	data() {
		return {
			courseGoalA: 'Finish the course and learn Vue!',
			courseGoalB: '<h3>Master VueJS to build amazing app!</h3>',
			vueLink: 'https://nam.name.vn'
		}
	},
	methods: {
		outputGoal() {
			const randNum = Math.random();
			if (randNum < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		}
	}
});


app.mount('#user-goal');