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
            currentRound: 3,
            gameStatus: 0, // 0 playing, 1 draw, 2 player win, 3 lose
            turnLogs: [],
        };
    },
    watch: {
        playerHealth(value) {
            if (value == 0 && this.monsterHealth == 0) {
                this.gameStatus = 1;
            } else if (value == 0) {
                this.gameStatus = 3;
            }
        },
        monsterHealth(value) {
            if (value == 0 && this.playerHealth == 0) {
                this.gameStatus = 1;
            } else if (value == 0) {
                this.gameStatus = 2;
            }
        }
    },
    computed: {
        monsterHealthBarStyle() {
            return { width: this.monsterHealth + '%'};
        },
        playerHealthBarStyle() {
            return { width: this.playerHealth + '%'};
        },
        mayUseSpecialAttach() {
            return this.currentRound !== 3;
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 3;
            this.gameStatus = 0;
            this.turnLogs = [];
        },
        attackMonster() {
            const attackValue = damageCalculation(getRandom(5, 12), getRandom(0, 3));
            if (this.monsterHealth >= attackValue) {
                this.monsterHealth -= attackValue;
            } else {
                this.monsterHealth = 0;
            }
            // Tính turn
            if (this.currentRound < 3) {
                this.currentRound++;
            }
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        attackPlayer() {
            const attackValue = damageCalculation(getRandom(8, 15), getRandom(0, 3));
            if (this.playerHealth >= attackValue) {
                this.playerHealth -= attackValue;
            } else {
                this.playerHealth = 0;
            }
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            const attackValue = damageCalculation(getRandom(10, 25), getRandom(0, 3));
            if (this.monsterHealth >= attackValue) {
                this.monsterHealth -= attackValue;
            } else {
                this.monsterHealth = 0;
            }

            this.currentRound = 0;

            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        healPlayer() {
            const healValue = getRandom(8, 20);
            if (this.playerHealth +healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            // Tính turn
            if (this.currentRound < 3) {
                this.currentRound++;
            }
            // Monster attach
            this.attackPlayer();
            this.addLogMessage('player', 'heal', healValue);
        },
        surrender() {
            this.gameStatus = 3;
        },
        addLogMessage(who, what, value) {
            this.turnLogs.unshift({
                by: who,
                action: what,
                value: value
            });
        }
    }
}).mount('#game')
