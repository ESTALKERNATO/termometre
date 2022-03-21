input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("Celsius")
    basic.showString("" + (input.temperature()))
    basic.showString("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("No fa falta jaqueta")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        serial.writeLine("Agafa la jaqueta")
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        serial.writeLine("" + (input.temperature()))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
