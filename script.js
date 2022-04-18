function positions(firstPlace,secondplace,lastplace){
    let resultado =[firstPlace,secondplace,lastplace]
    if (resultado[1] =='Daniel'){
        resultado[1] = firstPlace
        resultado[0] = 'Daniel'
    }else if(resultado[2] == 'Daniel'){
        resultado[2] = secondplace
        resultado[1] = 'Daniel'
    }
    return `1ª - Colocado: ${resultado[0]}, 2º  - Colocado: ${resultado[1]} , 3ª Colocado: ${resultado[2]} `

}
    console.log(positions('Rafael', 'Daniel', 'Manoel'))

