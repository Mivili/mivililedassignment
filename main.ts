// function for naming a position to an LED
function LightUp (num: number) {
    led.plot(num % 5, num / 5)
}
// code for when button A is pressed; lights up random LED when pressed, then when no other LED is left to light up, it will flash until another button is pressed
input.onButtonPressed(Button.A, function () {
    if (LastPos > 24) {
        while (!(input.buttonIsPressed(Button.B))) {
            basic.clearScreen()
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        Pos = randint(0, 24)
        while (leds.indexOf(Pos) >= 0) {
            Pos = randint(0, 24)
        }
        LightUp(Pos)
        leds[LastPos] = Pos
        LastPos += 1
    }
})
// code for when A+B is pressed; clears the screen and show "RESET", then clears the list.
input.onButtonPressed(Button.AB, function () {
    // leds = [0]
    basic.clearScreen()
    basic.showString("RESET")
    Pos2 = 0
    leds = []
    Pos = 0
    LastPos = 0
    // leds = [0]
    basic.clearScreen()
})
// code for when B is pressed; takes the last position of the list to then unplot and remove the rest of the list from the order it was plotted from. When no more lights have LED's on, it will flicker until another button is pushed.
input.onButtonPressed(Button.B, function () {
    if (LastPos <= 0) {
        while (!(input.buttonIsPressed(Button.A))) {
            basic.clearScreen()
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        basic.clearScreen()
    } else {
        LastPos += 0 - 1
        Pos2 = leds.removeAt(LastPos)
        unLightUp(Pos2)
    }
})
// function for naming a position to an LED
function unLightUp (num: number) {
    led.unplot(num % 5, num / 5)
}
/**
 * the variables
 */
let Pos2 = 0
let leds: number[] = []
let Pos = 0
let LastPos = 0
// Start with clear screen
basic.clearScreen()
