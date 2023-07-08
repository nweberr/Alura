function cumprimentar(){
    return "Oi, gente!"
}

function cumprimentaPessoa(nome){
    return `${cumprimentar()} Meu nome é ${nome}`
}

console.log(cumprimentaPessoa("Nicholas"))