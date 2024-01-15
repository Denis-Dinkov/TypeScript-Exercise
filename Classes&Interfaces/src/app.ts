type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

let pencho: Universal = false;