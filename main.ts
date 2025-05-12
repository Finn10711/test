input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    This = 0
    resiv = ""
    for (let index = 0; index < list.length; index++) {
        if (This - 1 == list.length) {
            radio.sendString(resiv)
        } else {
            if (list[This] == 1) {
                resiv = "" + resiv + "A"
            }
            if (list[This] == 2) {
                resiv = "" + resiv + "B"
            }
            if (list[This] == 3) {
                resiv = "" + resiv + "C"
            }
            if (list[This] == 4) {
                resiv = "" + resiv + "D"
            }
            if (list[This] == 5) {
                resiv = "" + resiv + "E"
            }
            if (list[This] == 6) {
                resiv = "" + resiv + "F"
            }
            if (list[This] == 7) {
                resiv = "" + resiv + "G"
            }
            if (list[This] == 8) {
                resiv = "" + resiv + "H"
            }
            if (list[This] == 9) {
                resiv = "" + resiv + "I"
            }
            if (list[This] == 10) {
                resiv = "" + resiv + "J"
            }
            if (list[This] == 11) {
                resiv = "" + resiv + "K"
            }
            if (list[This] == 12) {
                resiv = "" + resiv + "L"
            }
            if (list[This] == 13) {
                resiv = "" + resiv + "M"
            }
            if (list[This] == 14) {
                resiv = "" + resiv + "N"
            }
            if (list[This] == 15) {
                resiv = "" + resiv + "O"
            }
            if (list[This] == 16) {
                resiv = "" + resiv + "P"
            }
            if (list[This] == 17) {
                resiv = "" + resiv + "Q"
            }
            if (list[This] == 18) {
                resiv = "" + resiv + "R"
            }
            if (list[This] == 19) {
                resiv = "" + resiv + "S"
            }
            if (list[This] == 20) {
                resiv = "" + resiv + "T"
            }
            if (list[This] == 21) {
                resiv = "" + resiv + "U"
            }
            if (list[This] == 22) {
                resiv = "" + resiv + "V"
            }
            if (list[This] == 23) {
                resiv = "" + resiv + "W"
            }
            if (list[This] == 24) {
                resiv = "" + resiv + "X"
            }
            if (list[This] == 25) {
                resiv = "" + resiv + "Y"
            }
            if (list[This] == 26) {
                resiv = "" + resiv + "Z"
            }
            if (list[This] == 27) {
                resiv = "" + resiv + "_"
            }
            This = This + 1
        }
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ABC == 1) {
        ABC = 28
    } else {
        ABC = ABC - 1
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (ABC == 28) {
        list.pop()
    } else {
        list.push(ABC)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (ABC == 28) {
        ABC = 1
    } else {
        ABC = ABC + 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, 20)
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    This = 0
    Display = ""
    for (let index = 0; index < list.length; index++) {
        if (This - 1 == list.length) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showString(Display)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            if (list[This] == 1) {
                Display = "" + Display + "A"
            }
            if (list[This] == 2) {
                Display = "" + Display + "B"
            }
            if (list[This] == 3) {
                Display = "" + Display + "C"
            }
            if (list[This] == 4) {
                Display = "" + Display + "D"
            }
            if (list[This] == 5) {
                Display = "" + Display + "E"
            }
            if (list[This] == 6) {
                Display = "" + Display + "F"
            }
            if (list[This] == 7) {
                Display = "" + Display + "G"
            }
            if (list[This] == 8) {
                Display = "" + Display + "H"
            }
            if (list[This] == 9) {
                Display = "" + Display + "I"
            }
            if (list[This] == 10) {
                Display = "" + Display + "J"
            }
            if (list[This] == 11) {
                Display = "" + Display + "K"
            }
            if (list[This] == 12) {
                Display = "" + Display + "L"
            }
            if (list[This] == 13) {
                Display = "" + Display + "M"
            }
            if (list[This] == 14) {
                Display = "" + Display + "N"
            }
            if (list[This] == 15) {
                Display = "" + Display + "O"
            }
            if (list[This] == 16) {
                Display = "" + Display + "P"
            }
            if (list[This] == 17) {
                Display = "" + Display + "Q"
            }
            if (list[This] == 18) {
                Display = "" + Display + "R"
            }
            if (list[This] == 19) {
                Display = "" + Display + "S"
            }
            if (list[This] == 20) {
                Display = "" + Display + "T"
            }
            if (list[This] == 21) {
                Display = "" + Display + "U"
            }
            if (list[This] == 22) {
                Display = "" + Display + "V"
            }
            if (list[This] == 23) {
                Display = "" + Display + "W"
            }
            if (list[This] == 24) {
                Display = "" + Display + "X"
            }
            if (list[This] == 25) {
                Display = "" + Display + "Y"
            }
            if (list[This] == 26) {
                Display = "" + Display + "Z"
            }
            if (list[This] == 27) {
                Display = "" + Display + "_"
            }
            This = This + 1
        }
    }
})
let Display = ""
let list: number[] = []
let resiv = ""
let This = 0
let ABC = 0
ABC = 1
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString(Display)
    } else {
        if (ABC == 1) {
            basic.showString("A")
        }
        if (ABC == 2) {
            basic.showString("B")
        }
        if (ABC == 3) {
            basic.showString("C")
        }
        if (ABC == 4) {
            basic.showString("D")
        }
        if (ABC == 5) {
            basic.showString("E")
        }
        if (ABC == 6) {
            basic.showString("F")
        }
        if (ABC == 7) {
            basic.showString("G")
        }
        if (ABC == 8) {
            basic.showString("H")
        }
        if (ABC == 9) {
            basic.showString("I")
        }
        if (ABC == 10) {
            basic.showString("J")
        }
        if (ABC == 11) {
            basic.showString("K")
        }
        if (ABC == 12) {
            basic.showString("L")
        }
        if (ABC == 13) {
            basic.showString("M")
        }
        if (ABC == 14) {
            basic.showString("N")
        }
        if (ABC == 15) {
            basic.showString("O")
        }
        if (ABC == 16) {
            basic.showString("P")
        }
        if (ABC == 17) {
            basic.showString("Q")
        }
        if (ABC == 18) {
            basic.showString("R")
        }
        if (ABC == 19) {
            basic.showString("S")
        }
        if (ABC == 20) {
            basic.showString("T")
        }
        if (ABC == 21) {
            basic.showString("U")
        }
        if (ABC == 22) {
            basic.showString("V")
        }
        if (ABC == 23) {
            basic.showString("W")
        }
        if (ABC == 24) {
            basic.showString("X")
        }
        if (ABC == 25) {
            basic.showString("Y")
        }
        if (ABC == 26) {
            basic.showString("Z")
        }
        if (ABC == 27) {
            basic.showString("_")
        }
        if (ABC == 28) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        }
    }
})
