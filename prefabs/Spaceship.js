//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite{
constructor(scene, x, y, texture, frame, pointValue){
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    //store point value
    this.points = pointValue;
}

    update(){
        //move spaceship left
        this.x -=3;
        //screenwrap
        if(this.x <= 0-this.width){
            this.reset();
        }
    }
    reset(){
        this.x = game.config.width;
    }
}