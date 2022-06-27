// ECMAScript error
// erros que ocorrem em tempo de execução

// Throw e Return
function verificaPalindromo(string) {
    if(!string) return "String inválida";
    return string = string.split("").reverse().join("");
}

// Try... catch
function tryCatchExp(string) {
    try {
        return verificaPalindromo(string);
    } catch(e) {
        throw e;
    } finally {
        console.log("A string enviada foi: "+string);
    }
}
tryCatchExp("");
// DOMException
// Erros relacionados ao nosso DOM (Document Object Model)
