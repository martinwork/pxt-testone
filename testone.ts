const enum testoneChoice {
    one,
    two
}

//% block="testone"
namespace testone {

    /**
    * Display one.
    */
    //% block="testone one" shim=testone::one
    export function one(): void { basic.showString("one") }

    /**
    * Display two.
    */
    //% block="testone two" shim=testone::two
    export function two(): void { basic.showString("two") }

    /**
    * Display any.
    */
    //% block="testone any" shim=testone::any
    export function any(choice: testoneChoice): void {
        switch (choice)
        {
            case testoneChoice.one:
                testone.one();
                break;
            case testoneChoice.two:
                testone.two();
                break;
        }
    }

}