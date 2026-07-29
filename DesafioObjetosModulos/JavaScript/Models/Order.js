export default function Order(code, value, discount) {
    this.code = code.trim();
    this.value = value;
    this.discount = discount;
}