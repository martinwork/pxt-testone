const enum testoneChoice {
    one,
    two
}

namespace testone {

    /**
    * Display one.
    */
    //% shim=testone::one
    export function one(): void { basic.showString("one") }

    /**
    * Display two.
    */
    //% shim=testone::two
    export function two(): void { basic.showString("two") }

    /**
    * Display any.
    */
    //% shim=testone::any
    export function any(choice: testoneChoice): void { basic.showString("any") }

}