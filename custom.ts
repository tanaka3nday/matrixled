//% weight=70 icon="\uf076"
//% color=#ff8800 block="LED BLINK"
enum MyEnum{
    One,Two
}
namespace custom{
    export function foo(): void{
        led.plot(0,0)
        basic.pause(100)
        led.plot(1,0)
        basic.pause(100)
        led.plot(2,0)
        basic.pause(100)
        led.plot(3,0)
        basic.pause(100)
        led.plot(4,0)
        basic.clearScreen()
    }
}
