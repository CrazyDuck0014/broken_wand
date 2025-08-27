controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -100
        Wizard.vx = 50
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.right.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -100
        Wizard.vx = -50
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.down.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -100
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.up.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = 100
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
        Wizard.sayText("Ouch that hurt", 2000, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    Wizard.sayText("Thanks for playing!", 5000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -200
        Wizard.vx = 50
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.right.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -200
        Wizard.vx = -50
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.down.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = -200
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
    } else if (controller.up.isPressed()) {
        Wizard.startEffect(effects.fire, 500)
        scene.cameraShake(2, 500)
        Wizard.vy = 200
        pause(100)
        pauseUntil(() => Wizard.isHittingTile(CollisionDirection.Bottom))
        Wizard.setVelocity(0, 0)
        Wizard.sayText("Ouch that hurt", 2000, false)
    }
})
let Wizard: Sprite = null
music.setVolume(5)
music.play(music.createSong(assets.song`music 1`), music.PlaybackMode.LoopingInBackground)
Wizard = sprites.create(assets.image`Wizard`, SpriteKind.Player)
scene.cameraFollowSprite(Wizard)
tiles.setCurrentTilemap(tilemap`Tower`)
Wizard.setPosition(50, 990)
Wizard.ay = 300
controller.moveSprite(Wizard, 0, 0)
scene.cameraShake(6, 2000)
pause(2000)
Wizard.sayText("Uh oh", 2000, false)
pause(2000)
Wizard.sayText("I think my wand broke", 5000, false)
pause(5000)
Wizard.startEffect(effects.fire, 500)
Wizard.startEffect(effects.fire, 500)
pause(500)
Wizard.vy = -250
scene.cameraShake(2, 500)
pause(2000)
Wizard.sayText("Ouch", 500, false)
pause(1000)
Wizard.sayText("I can only fix it at the top of the tower", 5000, false)
pause(5000)
Wizard.sayText("Welp…", 2000, false)
if (true) {
	
}
