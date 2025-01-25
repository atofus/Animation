class HollowKnight { //every entity should have update and draw!
    constructor(game) { //game will be the game engine!
        this.game = game;
        //spreadsheet, where to sta
        this.animator = new Animator(ASSET_MANAGER.getAsset("./HollowKnightSpriteSheet.png"), 0, 0, 128, 128, 8, 0.12);

        
        this.x = 0;
        this.y = 400;
        this.speed = 220;
    };


    update() {
        this.x += this.speed * this.game.clockTick;
        //if they go across the screen, just set it back to beginning!
        if (this.x > 1024) {
            this.x = 0;
        }
    };


    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./HollowKnight.png"), 0, 0);
        
        //we get the tick from the game engine! Hence why we passed gameEngine in the constructor parameters
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y); //we're putting her at pixel 25 x 25 on canvas
    };
}