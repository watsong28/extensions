namespace SpriteKind {
    export const Foot_Ball = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 500)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Foot_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
let myDart: Dart = null
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . e e e e d e e . . . 
    . . . . . e e d d d d d e e . . 
    . . . . e e d d d d d d d e . . 
    . . . . e d d d d d d d d e . . 
    . . . e e d d d d d d d d e . . 
    . . . e d d d d d d d d d e . . 
    . . . e d d d d d d d d d e . . 
    . . . e e e d d d d d e e e . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Foot_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . 1 . . . . . 1 . . 
    . . . . . . . . 1 . . . . 1 . . 
    . . . . . . . . . 1 . . . 1 . . 
    . . . . . . . . 1 . 1 . . 1 . . 
    . . . . . . . 1 . . . 1 . 1 . . 
    . . . . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 1 1 1 1 1 1 . . 
    . . . . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 . . . 1 . 1 . . 
    . . . . . . . . 1 . 1 . . 1 . . 
    . . . . . . . . . 1 . . . 1 . . 
    . . . . . . . . 1 . . . . 1 . . 
    . . . . . . . 1 . . . . . 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    `, SpriteKind.Goal)
mySprite.setPosition(150, 110)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Obstacle)
mySprite2.setPosition(82, 110)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Obstacle)
mySprite3.setPosition(67, 90)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Obstacle)
mySprite.setPosition(106, 81)
