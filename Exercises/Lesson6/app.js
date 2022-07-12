function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function damageCalculation(baseDamage, critDamage) {
    let totalCritDamage = Math.floor(Math.random() * critDamage) + Math.floor(Math.random() * critDamage);

    return baseDamage + totalCritDamage;
}

const app =  Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            result: -1,
        };
    },
    methods: {
        attackMonster() {
            const attackValue = damageCalculation(getRandom(5, 12), getRandom(2, 6));
            if (this.monsterHealth >= attackValue) {
                this.monsterHealth -= attackValue;
            } else {
                this.monsterHealth = 0;
            }
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = damageCalculation(getRandom(8, 15), getRandom(2, 6));
            if (this.playerHealth >= attackValue) {
                this.playerHealth -= attackValue;
            } else {
                this.playerHealth = 0;
            }
        }
    }
}).mount('#game')
