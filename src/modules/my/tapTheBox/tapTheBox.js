/* eslint-disable vars-on-top */
import { LightningElement } from 'lwc';

export default class TapTheBox extends LightningElement {
    score;
    remainingLife;
    originalScore;
    isGameStart;
    isGameOver;
    timeInterval;
    setTimeoutDisable;
    maxScreenWidthForGame;
    gameType;
    gameNotStart = true;
    showLayer = true;
    highScore = 0;

    connectedCallback() {
        this.maxScreenWidthForGame = 0;
        this.gameType = 'Intermidiate';
        this.highScore = localStorage.getItem('lwc_tap_the_box')
            ? localStorage.getItem('lwc_tap_the_box')
            : 0;
        console.log(this.highScore);
        this.maxScreenWidthForGame =
            // eslint-disable-next-line no-restricted-globals
            (Math.floor(screen.width) * 80) / 100 - 120;
        console.log(this.maxScreenWidthForGame);
        this.resetGame();
    }

    resetGame() {
        if (this.gameType !== '') {
            this.isGameStart = true;
            this.isGameOver = false;
            this.score = 0;
            this.remainingLife = 3;
            this.originalScore = 0;
            this.timeInterval = 2000;
            this.setTimeoutDisable = false;
            if (this.gameType === 'Beginner') {
                this.timeInterval = 3000;
            } else if (this.gameType === 'Intermidiate') {
                this.timeInterval = 2000;
            } else if (this.gameType === 'Expert') {
                this.timeInterval = 1000;
            }
        } else {
            // eslint-disable-next-line no-alert
            alert('Please select a level');
            // this.dispatchEvent(
            //     new ShowToastEvent({
            //         title: 'Select Level',
            //         message: 'Please Select a level',
            //         variant: 'Alert'
            //     })
            // )
        }
    }

    startGame() {
        this.gameNotStart = false;
        this.showLayer = false;
        this.resetGame();
        this.changeTochBoxPlace();
    }

    exitGame() {
        this.isGameOver = true;
    }

    get chooseType() {
        return [
            { label: 'Beginner', value: 'Beginner' },
            { label: 'Intermidiate', value: 'Intermidiate' },
            { label: 'Expert', value: 'Expert' }
        ];
    }

    setGameType(event) {
        this.gameType = event.target.value;
    }

    changeTochBoxPlace1(abc, obj) {
        var top = Math.floor(Math.random() * 275) + 50;
        var left = Math.floor(Math.random() * this.maxScreenWidthForGame) + 20;
        var r = Math.floor(Math.random() * 255) + 1;
        var g = Math.floor(Math.random() * 255) + 1;
        var b = Math.floor(Math.random() * 255) + 1;
        console.log(top);
        console.log(left);
        abc.querySelector('.touchBox').style.cssText =
            'background: rgb(' +
            r +
            ',' +
            g +
            ',' +
            b +
            ');height:70px;width: 70px;margin-top:' +
            top +
            'px;margin-left:' +
            left +
            'px;';
        obj.changeTochBoxPlace();
    }

    changeTochBoxPlace() {
        const abc = this.template;
        const obj = this;
        setTimeout(function () {
            if (!obj.isGameOver) {
                if (!obj.setTimeoutDisable) {
                    obj.originalScore += 10;
                    if (obj.originalScore > obj.score) {
                        obj.remainingLife =
                            3 - (obj.originalScore - obj.score) / 10;
                        if (obj.remainingLife < 1) {
                            if (
                                localStorage.getItem('lwc_tap_the_box') <
                                obj.score
                            ) {
                                localStorage.setItem(
                                    'lwc_tap_the_box',
                                    obj.score
                                );
                                obj.highScore = obj.score;
                            }
                            obj.isGameOver = true;
                            obj.showLayer = true;
                        } else {
                            obj.changeTochBoxPlace1(abc, obj);
                        }
                    } else {
                        obj.changeTochBoxPlace1(abc, obj);
                    }
                } else {
                    obj.setTimeoutDisable = false;
                    obj.changeTochBoxPlace();
                }
                console.log(obj.timeInterval);
            }
        }, (obj.timeInterval -= 30));
    }

    get isGameGoingToStart() {
        if (!this.isGameStart && !this.isGameOver) {
            return true;
        }
        return false;
    }

    get isGameStarted() {
        return true;
    }

    get isGameEnd() {
        if (this.isGameOver) {
            return true;
        }
        return false;
    }

    handleTouch(event) {
        console.log(event);
        this.score += 10;
        this.originalScore += 10;
        this.setTimeoutDisable = true;
        const abc = this.template;
        var top = Math.floor(Math.random() * 275) + 50;
        var left = Math.floor(Math.random() * this.maxScreenWidthForGame) + 20;
        var r = Math.floor(Math.random() * 255) + 1;
        var g = Math.floor(Math.random() * 255) + 1;
        var b = Math.floor(Math.random() * 255) + 1;
        console.log(top);
        console.log(left);
        abc.querySelector('.touchBox').style.cssText =
            'background: rgb(' +
            r +
            ',' +
            g +
            ',' +
            b +
            ');height:70px;width: 70px;margin-top:' +
            top +
            'px;margin-left:' +
            left +
            'px;';
    }
}
