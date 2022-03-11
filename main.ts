basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.temperature()))
        basic.showString("celsius")
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (input.temperature()))
    } else if (25 <= 0) {
        basic.showIcon(IconNames.Sad)
    } else if (25 <= 0) {
        basic.showIcon(IconNames.Happy)
    }
})
