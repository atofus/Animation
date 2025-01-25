const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./HollowKnightSpriteSheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new HollowKnight(gameEngine)); //put the gameEngine into HollowKnight entity

	gameEngine.init(ctx);

	gameEngine.start();
});
