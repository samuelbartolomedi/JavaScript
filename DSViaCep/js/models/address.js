export default function Address({ cep, logradouro, number, localidade } = {}) {
    this.postalCode = cep;
    this.street = logradouro;
    this.number = number;
    this.city = localidade;
}       