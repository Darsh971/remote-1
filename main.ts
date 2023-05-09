let Throttle = 0
let Arm = 0
let Roll = 0
let Pitch = 0
input.onButtonPressed(Button.A, function () {
    if (Throttle <= 40) {
        Throttle += -5
    } else {
        Throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Arm) {
        Arm = 0
    } else {
        Arm = 1
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (Throttle < 40) {
        Throttle += 5
    } else {
        Throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    Throttle = 0
    Arm = 0
})
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    Pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
})
