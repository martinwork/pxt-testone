#include "pxt.h"

using namespace pxt;

enum class testoneChoice {
    one,
    two
};

//% block="testone"
namespace testone {

//% block="display one"
void one() {
    uBit.display.scroll("11");
}

//% block="display two"
void two() {
    uBit.display.scroll("22");
}

//% block="display any"
void any( testoneChoice choice) {
  switch (choice)
  {
    case testoneChoice::one:
      testone::one();
      break;
    case testoneChoice::two:
      testone::two();
      break;
  }
}

} // namespace testone
