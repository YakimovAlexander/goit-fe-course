class StringBuilder {
  constructor(_value) {
    this.value = _value;
  }

  set values(string) {
    return this.value = string;
  }
  get values() {
    return this.value;
  }

  append(str) {
    this.value = this.values + str;
  }

  prepend(str) {
    this.value = str + this.values;
  }

  pad(str) {
    this.value = str + this.values + str;
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
