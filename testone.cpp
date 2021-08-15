#include "pxt.h"

using namespace pxt;

enum class testoneChoice {
    one,
    two
};

namespace testone {

//%
void one() {
    uBit.display.scroll("11");
}

//%
void two() {
    uBit.display.scroll("22");
}

//%
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
