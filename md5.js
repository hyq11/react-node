const key = "ASDNA99knaD0-9SD987931=3141KNF"
const payload = {
    "name": "hyq",
    "age": 95
}
const header = {
    "alg": "HS256",
    "typ": "JWT"
}

const res = HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    key
)
console.log(res) // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHlxIiwiYWdlIjo5NX0.niu2diPJQNoB1hnt-RvEcalnN7eth2J_2p9aXOdHq0U