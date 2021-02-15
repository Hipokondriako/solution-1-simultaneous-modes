// "Count" decreases by 1 when A is pressed
input.onButtonPressed(Button.A, function () {
    CountA += 1
})
// "Count" increases by 1 when B is pressed
input.onButtonPressed(Button.B, function () {
    CountB += 1
})
let CountA = 0
let CountB = 0
let ModeA = 0
let ModeB = 0
basic.forever(function () {
    // "Mode" indicates how the LED is going to behave.  It´s the remainder of "count"/4, as an absolute number so it´s always positive.
    // Count 0, Mode 0
    // Count 1, Mode 1
    // ...
    // Count 4, Mode 0
    // Count 5, Mode 1
    // ....
    // Count 15, Mode 3
    ModeA = CountA % 4
    // "Mode" indicates how the LED is going to behave.  It´s the remainder of "count"/4, as an absolute number so it´s always positive.
    // Count 0, Mode 0
    // Count 1, Mode 1
    // ...
    // Count 4, Mode 0
    // Count 5, Mode 1
    // ....
    // Count 15, Mode 3
    ModeB = CountB % 2
    if (ModeB == 0) {
        // Mode 1, Red light
        // Mode 2, Green light
        // Mode 3, Blue light
        // Every other mode (only 0), white light
        if (ModeA == 1) {
            pins.analogWritePin(AnalogPin.P0, 1023)
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.analogWritePin(AnalogPin.P2, 0)
        } else if (ModeA == 2) {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 1023)
            pins.analogWritePin(AnalogPin.P2, 0)
        } else if (ModeA == 3) {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.analogWritePin(AnalogPin.P2, 1023)
        } else {
            pins.analogWritePin(AnalogPin.P0, 1023)
            pins.analogWritePin(AnalogPin.P1, 1023)
            pins.analogWritePin(AnalogPin.P2, 1023)
        }
    } else {
        // Mode 1, Red light
        // Mode 2, Green light
        // Mode 3, Blue light
        // Every other mode (only 0), white light
        if (ModeA == 1) {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 1023)
            pins.analogWritePin(AnalogPin.P2, 1023)
        } else if (ModeA == 2) {
            pins.analogWritePin(AnalogPin.P0, 1023)
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.analogWritePin(AnalogPin.P2, 1023)
        } else if (ModeA == 3) {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 1023)
            pins.analogWritePin(AnalogPin.P2, 1023)
        } else {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.analogWritePin(AnalogPin.P2, 0)
        }
    }
})
