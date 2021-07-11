input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    Too_hot = 29
    Too_cold = 13
    if (Too_hot) {
        music.playTone(262, music.beat(BeatFraction.Breve))
    } else if (Too_cold) {
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hamed")
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- G C A E B F C ", 120)
    basic.showNumber(input.compassHeading())
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let Too_cold = 0
let Too_hot = 0
let step = 0
basic.forever(function () {
    basic.showNumber(step)
})
