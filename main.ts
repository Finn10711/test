enum RadioMessage {
    message1 = 49434,
    A = 18289,
    B = 9031,
    C = 32803,
    D = 3456,
    E = 46605,
    F = 24246,
    G = 6494,
    H = 57881,
    I = 58338,
    J = 51171,
    K = 19399,
    L = 6987,
    M = 10523,
    N = 62761,
    O = 59125,
    P = 57574,
    Q = 11232,
    R = 57643,
    S = 45537,
    T = 6833,
    U = 39706,
    V = 38555,
    W = 54422,
    X = 36564,
    Y = 55950,
    Z = 29658,
    _ = 5125
}
radio.onReceivedMessage(RadioMessage.J, function () {
    Zeige = "" + Zeige + "J"
})
radio.onReceivedMessage(RadioMessage.X, function () {
    Zeige = "" + Zeige + "X"
})
radio.onReceivedMessage(RadioMessage.V, function () {
    Zeige = "" + Zeige + "V"
})
radio.onReceivedMessage(RadioMessage.M, function () {
    Zeige = "" + Zeige + "M"
})
radio.onReceivedMessage(RadioMessage.N, function () {
    Zeige = "" + Zeige + "N"
})
radio.onReceivedMessage(RadioMessage.I, function () {
    Zeige = "" + Zeige + "I"
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    M = 0
    resiv = ""
    for (let index = 0; index < list.length; index++) {
        if (M - 1 == list.length) {
            radio.sendMessage(RadioMessage.message1)
        } else {
            if (list[M] == 1) {
                radio.sendMessage(RadioMessage.A)
            }
            if (list[M] == 2) {
                radio.sendMessage(RadioMessage.B)
            }
            if (list[M] == 3) {
                radio.sendMessage(RadioMessage.C)
            }
            if (list[M] == 4) {
                radio.sendMessage(RadioMessage.D)
            }
            if (list[M] == 5) {
                radio.sendMessage(RadioMessage.E)
            }
            if (list[M] == 6) {
                radio.sendMessage(RadioMessage.F)
            }
            if (list[M] == 7) {
                radio.sendMessage(RadioMessage.G)
            }
            if (list[M] == 8) {
                radio.sendMessage(RadioMessage.H)
            }
            if (list[M] == 9) {
                radio.sendMessage(RadioMessage.I)
            }
            if (list[M] == 10) {
                radio.sendMessage(RadioMessage.J)
            }
            if (list[M] == 11) {
                radio.sendMessage(RadioMessage.K)
            }
            if (list[M] == 12) {
                radio.sendMessage(RadioMessage.L)
            }
            if (list[M] == 13) {
                radio.sendMessage(RadioMessage.M)
            }
            if (list[M] == 14) {
                radio.sendMessage(RadioMessage.N)
            }
            if (list[M] == 15) {
                radio.sendMessage(RadioMessage.O)
            }
            if (list[M] == 16) {
                radio.sendMessage(RadioMessage.P)
            }
            if (list[M] == 17) {
                radio.sendMessage(RadioMessage.Q)
            }
            if (list[M] == 18) {
                radio.sendMessage(RadioMessage.R)
            }
            if (list[M] == 19) {
                radio.sendMessage(RadioMessage.S)
            }
            if (list[M] == 20) {
                radio.sendMessage(RadioMessage.T)
            }
            if (list[M] == 21) {
                radio.sendMessage(RadioMessage.U)
            }
            if (list[M] == 22) {
                radio.sendMessage(RadioMessage.V)
            }
            if (list[M] == 23) {
                radio.sendMessage(RadioMessage.W)
            }
            if (list[M] == 24) {
                radio.sendMessage(RadioMessage.X)
            }
            if (list[M] == 25) {
                radio.sendMessage(RadioMessage.Y)
            }
            if (list[M] == 26) {
                radio.sendMessage(RadioMessage.Z)
            }
            if (list[M] == 27) {
                radio.sendMessage(RadioMessage._)
            }
            M = M + 1
        }
    }
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.O, function () {
    Zeige = "" + Zeige + "O"
})
radio.onReceivedMessage(RadioMessage.A, function () {
    Zeige = "" + Zeige + "A"
})
radio.onReceivedMessage(RadioMessage.C, function () {
    Zeige = "" + Zeige + "C"
})
radio.onReceivedMessage(RadioMessage.S, function () {
    Zeige = "" + Zeige + "S"
})
radio.onReceivedMessage(RadioMessage.L, function () {
    Zeige = "" + Zeige + "L"
})
radio.onReceivedMessage(RadioMessage.T, function () {
    Zeige = "" + Zeige + "S"
})
radio.onReceivedMessage(RadioMessage.Y, function () {
    Zeige = "" + Zeige + "Y"
})
radio.onReceivedMessage(RadioMessage._, function () {
    Zeige = "" + Zeige + "_"
})
radio.onReceivedMessage(RadioMessage.U, function () {
    Zeige = "" + Zeige + "S"
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ABC == 1) {
        ABC = 28
    } else {
        ABC = ABC - 1
    }
})
radio.onReceivedMessage(RadioMessage.G, function () {
    Zeige = "" + Zeige + "G"
})
radio.onReceivedMessage(RadioMessage.D, function () {
    Zeige = "" + Zeige + "D"
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
radio.onReceivedMessage(RadioMessage.Z, function () {
    Zeige = "" + Zeige + "Z"
})
radio.onReceivedMessage(RadioMessage.W, function () {
    Zeige = "" + Zeige + "W"
})
radio.onReceivedMessage(RadioMessage.F, function () {
    Zeige = "" + Zeige + "F"
})
radio.onReceivedMessage(RadioMessage.H, function () {
    Zeige = "" + Zeige + "H"
})
radio.onReceivedMessage(RadioMessage.Q, function () {
    Zeige = "" + Zeige + "Q"
})
radio.onReceivedMessage(RadioMessage.B, function () {
    Zeige = "" + Zeige + "B"
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
radio.onReceivedMessage(RadioMessage.K, function () {
    Zeige = "" + Zeige + "K"
})
radio.onReceivedMessage(RadioMessage.P, function () {
    Zeige = "" + Zeige + "P"
})
radio.onReceivedMessage(RadioMessage.R, function () {
    Zeige = "" + Zeige + "R"
})
radio.onReceivedMessage(RadioMessage.E, function () {
    Zeige = "" + Zeige + "E"
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    Display2 = 1
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P3)
})
let Display2 = 0
let Display = ""
let This = 0
let list: number[] = []
let resiv = ""
let M = 0
let Zeige = ""
let ABC = 0
ABC = 1
basic.forever(function () {
    if (Display2 == 0) {
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
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString(Zeige)
        Display2 = 0
    }
})
