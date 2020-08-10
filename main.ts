function LightUp (num: number) {
    led.plot(num % 5, num / 5)
}
let Pos = 13
basic.forever(function () {
    LightUp(Pos)
})
