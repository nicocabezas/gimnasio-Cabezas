
export const products = [
    {id:1, categoria: 'fitness', name: "Banda Elastica", price: 1000, img:'./assets/FotoProducts/bandaEconomica.jpg'},
    {id:2, categoria: 'fitness', name: "Banda Pro", price: 1500, img:'./assets/FotoProducts/bandaPro.jpg'},
    {id:3, categoria: 'fitness', name: "Banda Pro Revestida", price: 2000, img:'./assets/FotoProducts/bandaProRevestida.jpg'},
    {id:4, categoria: 'musculacion', name: "Mancuerna de Fundicion", price: 5000, img:'./assets/FotoProducts/mancuernaFundicion.jpg'},
    {id:5, categoria: 'musculacion ', name: "Mancuerna Hexagonal Plastica", price: 10000, img:'./assets/FotoProducts/mancuernaHexagonalPlastica.jpg'},
    {id:6, categoria: 'musculacion ', name: "Mancuernas Hexagonales de Caucho", price: 15000, img:'./assets/FotoProducts/mancuernasHexagonalesCaucho.jpg'},
    {id:7, categoria: 'cintas ', name: "Cinta Fitage 1", price: 100000, img:'./assets/FotoProducts/cintaFitage1.jpg'},
    {id:8, categoria: 'cintas ', name: "Cinta Fitage 2", price: 150000, img:'./assets/FotoProducts/cintaFitage2.jpg'},
    {id:9, categoria: 'cintas ', name: "Cinta Fitage Pro", price: 250000, img:'./assets/FotoProducts/cintaFitagePro.jpg'},
    {id:10, categoria: 'indumentaria ', name: "Calza Puma Hombre Larga", price: 8000, img:'./assets/FotoProducts/calzaPumaHombreLarga.jpg'},
    {id:11, categoria: 'indumentaria ', name: "Calza Puma Hombre Corta", price: 10000, img:'./assets/FotoProducts/calzaPumaHombreCorta.jpg'},
    {id:12, categoria: 'indumentaria ', name: "Remera Puma Hombre Run", price: 5000, img:'./assets/FotoProducts/remeraPumaRunHombre.jpg'},
];


export const getFetch = new Promise ((res,rej) =>{
    const condition=true
    if (condition) {
        setTimeout(()=>{
            res(products)
        },2000)
    }else {
        setTimeout(()=>{
            rej('404 not found')
        },2000)
    }
})