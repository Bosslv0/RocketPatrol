class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){
        //load audio
        this.load.audio('sfx_select', './assets/ItemPickup.wav');
        this.load.audio('sfx_explode', './assets/enemyDeath.wav');
        this.load.audio('sfx_fire', './assets/PShot.wav');
    }
    create(){
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}