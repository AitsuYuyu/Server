// const enviar = async() => {
//   let res = await (await fetch("http://127.0.1.1:5052/libros")).json();
//   let config ={
//     method: 'POST',
//     Headers: {"content-type":"application/json"},
//     body: JSON.stringify({"nombre": "La vaca lola",
//     "tipo":"video animacion",
//     "autor": "violeta",
//     "id": 1
//     })
//   }
// }
// enviar()

// const actualizar = async() => {
//     let res = {
//     method: "PUT",
//     Headers: {"content-type":"application/json"},
//     body: JSON.stringify({"nombre": "La vaca lola",
//         "tipo":"video animacion",
//         "autor": "Angie",
//          "id": 2

//         })
//   }
//   let config = await(await fetch("http://127.0.1.1:5052/libros", res)).json();
//   console.log(config)
// }
// actualizar()
// const eliminar = async () => {
//  let config = {
//     method: "DELETE",
//     Headers:{"content-type":"application/json"},
//     body: JSON.stringify({
//         "nombre":"La vieja loca del lado",
//         "tipo": "Video Animado",
//         "author":"Esteban",
//          "id": 1
//         }
//         )
//     } 
//     let res = await (await fetch("http://127.0.1.1:5052/libros/id", config)).json();
//     console.log(res)
// }
// eliminar(2)


// ______________________________________________________________________
let url = await(await fetch("http://127.0.1.1:5052/data")).json()