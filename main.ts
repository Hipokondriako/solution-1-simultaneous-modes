function Magenta () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
// "Count" decreases by 1 when A is pressed
input.onButtonPressed(Button.A, function () {
    CountA += 1
})
function Cyan () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
function Yellow () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function Black () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
// "Count" increases by 1 when B is pressed
input.onButtonPressed(Button.B, function () {
    CountB += 1
})
function Green () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function White () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
function Blue () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
function Red () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
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
        if (ModeA == 0) {
            White()
        } else if (ModeA == 1) {
            Red()
        } else if (ModeA == 2) {
            Green()
        } else if (ModeA == 3) {
            Blue()
        }
    } else {
        // Mode 1, Red light
        // Mode 2, Green light
        // Mode 3, Blue light
        // Every other mode (only 0), white light
        if (ModeA == 0) {
            Black()
        } else if (ModeA == 1) {
            Cyan()
        } else if (ModeA == 2) {
            Magenta()
        } else if (ModeA == 3) {
            Yellow()
        }
    }
})
