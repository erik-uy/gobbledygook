import SimpleCrypto from "simple-crypto-js"; 
var _secretKey='imalittleteapotshortandstout'

export const cipherMixin = {
    data(){
        return {
            crypto:new SimpleCrypto(_secretKey)
        };
    },
    methods: {
        decrypt(ciphertext, key) {
            this.crypto
        },
        encrypt(plaintext, key){

        }
    }
}