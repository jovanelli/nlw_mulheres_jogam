// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// vamos utilizar o banco de dados para nossas operações
//db.serialize( () => {
//     // com comandos SQL eu vou:
    
//     // 1. criar uma tabela


//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             contact TEXT,
//             email TEXT,
//             facebook TEXT,
//             instagram TEXT,
//             items TEXT
//         );
//     `)
//     // 2. inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             name,
//             image,
//             address,
//             address2,
//             state,
//             city,
//             contact,
//             email,
//             facebook,
//             instagram,
//             items

//         ) VALUES (?,?,?,?,?,?,?,?,?,?,?);
//     `

//     const values = [
//         "Vikings Handebol",
//         "https://scontent.fcgh8-1.fna.fbcdn.net/v/t1.0-9/48364584_2196021750648014_1773589156992122880_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGrav07qJPIviI_vT0ANk-EGI28RfxkNo8YjbxF_GQ2j7A5iAyrIR2PpETegVFq8EPCe0Ce4X4SA2Ji8LH5d-IZ&_nc_ohc=pxNkXDMtbfYAX-aLS1t&_nc_ht=scontent.fcgh8-1.fna&oh=24591e0c272c3ebb2c66de3deee54840&oe=5F02B158",
//         "Rua cornelio zelaia",
//         "Sem número",
//         "São Paulo",
//         "São Paulo",
//         "Daniela",
//         "daniela_lana@hotmail.com",
//         "@vikingshand",
//         "@vikingshand",
//         "Técnico(a), Material Próprio, Mensalidade, Aceitando Atletas, Disputa Campeonatos"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }

//      db.run(query, values, afterInsertData)

//     // 3. consultar os dados da tabela

// //db.all(`SELECT * FROM places`, function(err, rows) {
// //    if(err) {
// //        return console.log(err)
// //    }
// //
// //    console.log("Aqui estão seus registros:")
// //    console.log(rows)
// //})


//     // 4. deletar um dado da tabela
  

// db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//       if(err) {
//            return console.log(err)
//        }

//    console.log("Registro deletado com sucesso")
// })



// })