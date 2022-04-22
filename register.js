const axios = require('axios');
const db = ''
const { RichEmbed } = require("discord.js");
const { replace } = require('twemoji');
const talkedRecently = new Set();
//made by darkaway
// kibado da shine
module.exports = {
    name: "register",
    aliases: ["register","rg"],
    async execute(client, message, args, database, prefix) {
        const filter = m => m.author.id == message.author.id
        let regexArray = args[1];
          if (!regexArray || regexArray.length < 2) {
                var arr = [];
                require("firebase")
                    .database()
                     .ref()
                      .child("Registro")
                        .child(message.guild.id)
                        .child(`Paginas`)
                         .once("value", async snapshot => {
                            snapshot.forEach(v => {
                                arr.push({
                                  nome: v.key,
                                });
                            })
                            const usuario = message.mentions.members.first() || message.guild.members.get(args[0])
                            if(usuario === undefined)return;           
                            var consulta = await axios.get(
                                db + `/Registro/${message.guild.id}/Config.json`
                                )
                            if(consulta.data.masculino === 0){
                                message.channel.send(`Defina o cargo Masculino`)
                            }else if(consulta.data.feminino === 0) {
                                message.channel.send(`Defina o cargo Feminina`)
                            }else if(consulta.data.channel === 0){
                                message.channel.send(`Defina o canal para Logs`)
                            }else if(consulta.data.novato === 0) {
                                message.channel.send(`Defina o cargo Novato`)
                            }else if(consulta.data.registrado === 0) {
                                    message.channel.send(`Defina o cargo de Registrador`)
                            }else if(arr < 2) {
                                   message.channel.send(`Você precisa criar uma página antes de utilizar esse comando.`)
                            }else {
                            let registrador_0 = consulta.data.registrado.replace('<', '');
                            let registrador_1 = registrador_0.replace('@', '');
                            let registrador_2 = registrador_1.replace('&', '');
                            let registrador_3 = registrador_2.replace('>', '');
                            var consulta_registro = message.guild.member(message.author);
                            if(consulta_registro.roles.has(registrador_3)){
                            var { data } = await axios.get(
                               db + `/Registro/${message.guild.id}/Paginas/${arr[0].nome}.json`
                                )
                            var pages = 0
                            var numeros = ""
                            for (var i = 0; i < arr.length; i++) {
                                numeros = i 
                            }
                            parseInt(numeros)
                            var { data } = await axios.get(
                                db + `/Registro/${message.guild.id}/Paginas/${arr[0].nome}.json`
                                )
                         if(data.cargos[0].cargo === 0) {
                             message.channel.send(` | Nenhuma tag setada`)
                         }else {
                            let novato_0 = consulta.data.novato.replace('<', '');
                            let novato_1 = novato_0.replace('@', '');
                            let novato_2 = novato_1.replace('&', '');
                            let novato_3 = novato_2.replace('>', '');
                        if(usuario.roles.has(novato_3)){

                            var registerz = "";
                            d: for(var i = 0; i < 9; i++) {
                              if(data.cargos[i].mension === 0){ break d; }  {
                                registerz += data.cargos[i].number + data.cargos[i].mension + "\n"
                              }
                              
                            }
                            
                            const msg1 = new RichEmbed({
                             title: 'Sistema de Registro - Apocalypse',
                             description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[0].nome}\n`+`\n${registerz}`+`\nPara remover um cargo pendente basta reagir no mesmo número.`,
                             footer: {
                                  text: `Página: ${arr[0].nome} - ${pages}/${numeros}` 
                             },      
                             thumbnail: {
                                url: `${message.author.displayAvatarURL}`
                             }
                            })       
                             message.reply(msg1).then(async msg=>{
                                await msg.react("789636669211934721")
                                await msg.react("1⃣")
                                await msg.react("2⃣")
                                await msg.react("3⃣")
                                await msg.react("4⃣")
                                await msg.react("5⃣")
                                await msg.react("6⃣")
                                await msg.react("7⃣")
                                await msg.react("8⃣")
                                await msg.react("9️⃣")
                                await msg.react("793548593477976074")
                                await msg.react("793548666895728680")
                                 const confirmar = (reaction, user) => reaction.emoji.id === '789636669211934721' && user.id === message.author.id;   
                                 const tag_1 = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id; 
                                 const tag_2 = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
                                 const tag_3 = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id;
                                 const tag_4 = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id;
                                 const tag_5 = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id;
                                 const tag_6 = (reaction, user) => reaction.emoji.name === '6⃣' && user.id === message.author.id;
                                 const tag_7 = (reaction, user) => reaction.emoji.name === '7⃣' && user.id === message.author.id;
                                 const tag_8 = (reaction, user) => reaction.emoji.name === '8⃣' && user.id === message.author.id;
                                 const tag_9 = (reaction, user) => reaction.emoji.name === '9️⃣' && user.id === message.author.id;
                                 const voltar = (reaction, user) => reaction.emoji.id === '793548593477976074' && user.id === message.author.id;   
                                 const frente = (reaction, user) => reaction.emoji.id === '793548666895728680' && user.id === message.author.id;   
                                 const skip = (reaction, user) => reaction.emoji.id === '724833964090720306' && user.id === message.author.id;   
                                 const help_confimar = msg.createReactionCollector(confirmar);
                                 const help_tag_1 = msg.createReactionCollector(tag_1);
                                 const help_tag_2 = msg.createReactionCollector(tag_2);
                                 const help_tag_3 = msg.createReactionCollector(tag_3);
                                 const help_tag_4 = msg.createReactionCollector(tag_4);
                                 const help_tag_5 = msg.createReactionCollector(tag_5);
                                 const help_tag_6 = msg.createReactionCollector(tag_6);
                                 const help_tag_7 = msg.createReactionCollector(tag_7);
                                 const help_tag_8 = msg.createReactionCollector(tag_8);
                                 const help_tag_9 = msg.createReactionCollector(tag_9);
                                 const help_voltar = msg.createReactionCollector(voltar);
                                 const help_frente = msg.createReactionCollector(frente);
                                 const help_skip = msg.createReactionCollector(skip);
                                 var filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                 var filtrozin = filtrozin.replace("@everyone","")
                                 help_confimar.on('collect', async r => {
                                     r.message.delete()
                                     usuario.removeRole(novato_3)
                                    var numeroz = ""
                                     var consulta = await axios.get(
                                        db + `/Registro/${message.guild.id}/registradores/${message.author.id}.json`
                                        )
                                    if (consulta.data === null) {
                                        numeroz = 0;
                                    }else {
                                        numeroz = consulta.data.registros
                                    }
                                    var contazinha = numeroz + 1
                                        database.ref(`Registro/${message.guild.id}/registradores/${message.author.id}`).update({
                                            registros: contazinha
                                         })
                                     var { data } = await axios.get(
                                        db + `/Registro/${message.guild.id}/Config.json`
                                        )
                                    let channel_0 = data.channel.replace('<', '');
                                    let channel_1 = channel_0.replace('#', '');
                                    let channel_2 = channel_1.replace('>', '');
                                     let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                     let filtrozin_0 = filtrozin.replace("@everyone","")
                                     let filtrozin_1 = filtrozin_0.replace(`${data.novato}`,"")
                                     let embedSv = new RichEmbed()
                                     .setAuthor(`Registrador: ${message.author.username}`, message.author.displayAvatarURL)
                                     .setDescription(`${message.author} você registrou o usuário ${usuario} com sucesso. Total de Registros: ${contazinha}\n\n` + filtrozin_1)
                                     .setColor("3498db");
                                     message.channel.send(embedSv);
                                     let log = new RichEmbed()
                                     .setAuthor(`Registrador: ${message.author.username}`, message.author.displayAvatarURL)
                                     .setDescription(`${message.author} registrou o usuário ${usuario} com sucesso. Total de Registros: ${contazinha}\n\n` + filtrozin_1)
                                     .setColor("3498db");                        
                                     client.guilds.get(message.guild.id).channels.get(channel_2).send(log) 
                                     message.channel.send(embedSv);
                                     let embedDM1 = new RichEmbed()
                                     .setTitle(`**Você foi registrado(a) no Servidor: ${message.guild.name}**`)
                                     .setDescription(`**Você foi registrado(a) por ${message.author}, no Servidor: __${message.guild.name}__.**\n` +
                                         `Caso não tenha se registrado por essa pessoa, entre em contato no servidor de suporte.`)
                                     .setThumbnail(message.author.displayAvatarURL)
                                     .setColor("00D8D8"); 
                                     usuario.send(embedDM1)

                                })
                                 help_tag_1.on('collect', async r => {
                                    r.remove(message.author.id)
        
                                     let { data } = await axios.get(
                                            db + `/Registro/${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                        )
                                        let conta = ""
                                    h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[0].cargo)){
                                        usuario.removeRole(data.cargos[0].cargo)
    
                                    }else {
                                        usuario.addRole(data.cargos[0].cargo)
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                                                   
                                })
                                function sleep(ms) {
                                    return new Promise((resolve) => {
                                      setTimeout(resolve, ms);
                                    });
                                  }   
                                help_tag_2.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro/${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[1].cargo)){
                                        usuario.removeRole(data.cargos[1].cargo)
                                        
                                    }else {
                                        usuario.addRole(data.cargos[1].cargo)
                                        
                                    }  
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)                                
                                })
                                help_tag_3.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[2].cargo)){
                                        usuario.removeRole(data.cargos[2].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[2].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                   
                                })
                                help_tag_4.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro/${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[3].cargo)){
                                        usuario.removeRole(data.cargos[3].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[3].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_tag_5.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[4].cargo)){
                                        usuario.removeRole(data.cargos[4].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[4].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_tag_6.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[5].cargo)){
                                        usuario.removeRole(data.cargos[5].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[5].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_tag_7.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[6].cargo)){
                                        usuario.removeRole(data.cargos[6].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[6].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_tag_8.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[7].cargo)){
                                        usuario.removeRole(data.cargos[7].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[7].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_tag_9.on('collect', async r => {
                                    r.remove(message.author.id)
                                    let { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    let conta = ""
                                     h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                    }
                                    if(usuario.roles.has(data.cargos[8].cargo)){
                                        usuario.removeRole(data.cargos[8].cargo)
                            
                                    }else {
                                        usuario.addRole(data.cargos[8].cargo)
                                       
                                    }
                                    await sleep(1000);
                                    let filtrozin = usuario.roles.map(role => role.toString()).join(" ")
                                    filtrozin = filtrozin.replace("@everyone","")
                                    let edit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${usuario}\nRegistrador: ${message.author} \nPagina: ${arr[pages].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.\n\n ${filtrozin}`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                    r.message.edit(edit)  
                                })
                                help_voltar.on('collect', async r => {
                                    r.remove(message.author.id)
                                    if(pages === 0) return;
                                    pages--;
                                    var { data } = await axios.get(
                                        db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                    )
                                    var conta = ""
                                    h: for(var i = 0; i < 9; i++) {
                                        if(data.cargos[i].mension === 0){ break h; }  {
                                            conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                    }
                                    }
                                    const msgedit = new RichEmbed({
                                        title: 'Sistema de Registro - Apocalypse',
                                        description: `Usuário: ${message.author}\nRegistrador: ${message.author} \nPagina: ${arr[1].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.`,
                                        footer: {
                                             text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                        },      
                                        thumbnail: {
                                           url: `${message.author.displayAvatarURL}`
                                        }
                                       })
                                       r.message.edit(msgedit)
                                        .then()
                                })
                                help_frente.on('collect', async r => {
                                    r.remove(message.author.id)
                                    var member = message.guild.member(message.author);
                                    if(pages === numeros) {
                                    }else {
                                    pages++;
                                  var { data } = await axios.get(
                                            db + `/Registro//${message.guild.id}/Paginas/${arr[pages].nome}.json`
                                        )
                                        var conta = ""
                                        h: for(var i = 0; i < 9; i++) {
                                            if(data.cargos[i].mension === 0){ break h; }  {
                                                conta += data.cargos[i].number + data.cargos[i].mension + "\n"
                                        }
                                        }
                                        const msgedit = new RichEmbed({
                                            title: 'Sistema de Registro - Apocalypse',
                                            description: `Usuário: ${message.author}\nRegistrador: ${message.author} \nPagina: ${arr[1].nome}\n`+`\n${conta}`+`\nPara remover um cargo pendente basta reagir no mesmo número.`,
                                            footer: {
                                                 text: `Página: ${arr[pages].nome} -   ${pages}/${numeros}` 
                                            },      
                                            thumbnail: {
                                               url: `${message.author.displayAvatarURL}`
                                            }
                                           })
                                           r.message.edit(msgedit)
                                            .then() 
                                             .catch()       
                                        }   
                                })
                                help_skip.on('collect', r => {
                                     
                                })
                              })
                            }else{
                              message.channel.send(`❌ | Usuário não possui tag novato`)
                           }
                          }
                         }else{
                            message.channel.send(`❌ | Você não é um registrador`)
                         }
                        }
                      }
                    )}
                                 
        if(args[0] === "pages") {
            if(!args > 1)return;
            var { data } = await axios.get(
                db + `/Registro//${message.guild.id}.json`
                )
    
            if (data === null) data = "undefined";
            if (data === "undefined") data = "Nenhuma página.";
            message.delete().catch();
            let msg1 = new RichEmbed()
            .addField('Registro por Reação [Páginas] - Apocalypse', "Nenhuma página")
            .addField('Como criar uma página?', "Basta reagir com: <a:voltar:786787627131076608>")
            .setColor("#0a0a0a")
            .setThumbnail(message.author.displayAvatarURL)
          //  .setFooter(`Pagina 1 de 8`)
        
          message.reply(msg1).then(async msg=>{
            await msg.react("789702238012047360")

            const help = (reaction, user) => reaction.emoji.id === '789702238012047360' && user.id === message.author.id;  
            const helpp = msg.createReactionCollector(help)
            .on('collect', r => {
                msg.edit({
                    embed: {
                        title: message.author.tag,
                        description: `✅ | Digite um nome para a página 0 que acabou de criar`,
                      }
                }).then(msg => {
                    msg.delete(15000)
                  }).catch();
                //msg.delete(msg1);
                r.remove(message.author.id)
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 15000
                   }).then(collected => {
                    let nome = collected.first().content
                    message.delete()
                    message.channel.send(`✅ | Okay, ${message.author} Criei uma nova página, edite-a utilizando a!register page ${nome}`)
                    msg.delete()
                    require("firebase")
                    .database()
                     .ref()
                      .child("Registro")
                        .child(message.guild.id)
                        .child(`Paginas`)
                         .once("value", async snapshot => {
                            var arr = []
                            snapshot.forEach(v => {
                                arr.push({
                                  nome: v.key,
                                });
                            })
                            var numero = ""
                            if(arr < 2) {
                                numero = 0
                            }else {
                            var numero = ""
                            for (var i = 0; i < arr.length; i++) {
                                numero = i
                            }
                            var numero = numero + 1
                            }


                           database.ref(`Registro/${message.guild.id}/Paginas/${`${numero} pagina ` + nome}`).update({
                                cargos: [
                                {
                                    "number": "1⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "2⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "3⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "4⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "5⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "6⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "7⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "8⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
                                {
                                    "number": "9️⃣",
                                    "cargo": 0,
                                    "mension": 0
                                },
        
                                ]
                            })
                   
                    collected.first().delete(5000)
                })
                })
            })
        
        })
        }
        if(args[0] === "edit"){
            var consultadados = ""
            for (var i = 0; i < 9; i++) {
                var { data } = await axios.get(
                    db + `/Registro//${message.guild.id}/Paginas/${`${i} pagina ` + args[1]}.json`
                    )
                if(data === null)
                    continue;
                consultadados = i
            }
            var { data } = await axios.get(
                db + `/Registro//${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}.json`
                )
             if(data === null)return message.channel.send(
                 "❌" + "Nome não encontrado"
             )   
             var text = "";
             a: for(var i = 0; i < 9; i++) {
               if(data.cargos[i].mension === 0){ break a; }  {
                 text += data.cargos[i].number + data.cargos[i].mension + "\n"
               }
               
             }
             message.delete()
             const msg1 = new RichEmbed()
             .addField('Registro por Reação [Páginas] - Apocalypse', `Olá, ${message.author}\nEste é o menu de configuração pra a pagina: **${args[1]}**`)
             .addField('Cargos configurados', `Cargos: ${text}`)
             .addField('Informaçoes', "<:y_flushed:789636613574754324> | Adicionar um cargo\n<:m_cocoflushed:789636799697387532> | Remove um cargo\n<:y_eaemen:789636849852743702> | AutoNext\n\n\n<:y_esseai:789636827426193430> | Deleta esta pagina")
             .setColor("#0a0a0a")
             .setThumbnail(message.author.displayAvatarURL)
            
             message.reply(msg1).then(async msg=>{
                await msg.react("789636613574754324")
                await msg.react("789636799697387532")
                await msg.react("789636849852743702")
                await msg.react("789636827426193430")

                const help = (reaction, user) => reaction.emoji.id === '789636613574754324' && user.id === message.author.id;  
                const help1 = (reaction, user) => reaction.emoji.id === '789636799697387532' && user.id === message.author.id;  
                const help2 = (reaction, user) => reaction.emoji.id === '789636849852743702' && user.id === message.author.id;  
                const help3 = (reaction, user) => reaction.emoji.id === '789636827426193430' && user.id === message.author.id;  

                const helpp = msg.createReactionCollector(help)
                const hel_1 = msg.createReactionCollector(help1)
                const hel_2 = msg.createReactionCollector(help2)
                const hel_3 = msg.createReactionCollector(help3)


                helpp.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "✅ | **Menciona ou use o ID de um cargo para ser adicionado a esta pagina\n > Exemplo: @Mulher = `706925656373723156`**",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        let tag = collected.first().content
                        var rolel = tag.replace(`<@&`,"")
                        var rolelz = rolel.replace(`>`,"")
                        var myRole = message.guild.roles.find("id", rolelz);
                        if(myRole === null)return message.channel.send("❌" + "Tag mencionado não encontrado")
                          message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso."
                            }
                        }).then(msg => msg.delete(5000))
                       a: for(var i = 0; i < 9; i++) {
                        if(data.cargos[i].cargo === 0){
                          database.ref(`Registro/${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}/cargos/${i}`).update({
                            cargo: myRole.id,
                            mension: tag
                           })
                          break a;
                  
                        }
                
                      }
                      await sleep(1000);
                      collected.first().delete(5000)
                      
                    var amorz = await axios.get(
                        db + `/Registro//${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}.json`
                        )
                    var amorfilnal = amorz.data
                    var coonfiz = "";
                        z: for(var i = 0; i < 9; i++) {
                          if(amorfilnal.cargos[i].mension === 0){ break z; }  {
                            coonfiz += amorfilnal.cargos[i].number + amorfilnal.cargos[i].mension + "\n"
                          }
                          
                        }
                      const msg1 = new RichEmbed()
                      .addField('Registro por Reação [Páginas] - Apocalypse', `Olá, ${message.author}\nEste é o menu de configuração pra a pagina: **${args[1]}**`)
                      .addField('Cargos configurados', `Cargos: ${coonfiz}`)
                      .addField('Informaçoes', "<:y_flushed:789636613574754324>| Adicionar um cargo\n<:m_cocoflushed:789636799697387532>| Remove um cargo\n<:y_eaemen:789636849852743702>| AutoNext\n\n\n<:y_esseai:789636827426193430>| Deleta esta pagina")
                      .setColor("#0a0a0a")
                      .setThumbnail(message.author.displayAvatarURL)

                      r.message.edit(msg1)

                       });
                })
                hel_1.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "✅ | **Menciona ou use o ID de um cargo para ser apagado\n > Exemplo: @Mulher = `706925656373723156`**",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        let tag = collected.first().content
                        message.channel.send({
                            embed: {
                                description: "ok | aaaa"
                            }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                            c: for(var i = 0; i < 9; i++) {
                                if(data.cargos[i].mension === tag) {
                                    database.ref(`Registro/${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}/cargos/${i}`).update({
                                        cargo: 0,
                                        mension: 0
                                       })
                                 break c;
                                }
                            }
                            await sleep(1000);
                            collected.first().delete(5000)
                            var amorz = await axios.get(
                                db + `/Registro//${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}.json`
                                )
                            var amorfilnal = amorz.data
                            var coonfiz = "";
                                z: for(var i = 0; i < 9; i++) {
                                  if(amorfilnal.cargos[i].mension === 0){ break z; }  {
                                    coonfiz += amorfilnal.cargos[i].number + amorfilnal.cargos[i].mension + "\n"
                                  }
                                  
                                }
                              const msg1 = new RichEmbed()
                              .addField('Registro por Reação [Páginas] - Apocalypse', `Olá, ${message.author}\nEste é o menu de configuração pra a pagina: **${args[1]}**`)
                              .addField('Cargos configurados', `Cargos: ${coonfiz}`)
                              .addField('Informaçoes', "<:y_flushed:789636613574754324>| Adicionar um cargo\n<:m_cocoflushed:789636799697387532>| Remove um cargo\n<:y_eaemen:789636849852743702>| AutoNext\n\n\n<:y_esseai:789636827426193430>| Deleta esta pagina")
                              .setColor("#0a0a0a")
                              .setThumbnail(message.author.displayAvatarURL)
        
                              r.message.edit(msg1)


                           
                       });
                    })
                    hel_2.on('collect', async r => {
                        message.channel.send({
                            embed: {
                                description: "teste"
                            }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        database.ref(`Registro/${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}/cargos`).update({
                            autonext: {
                                autonext: true
                            }
                           })

                    })
                    hel_3.on('collect', async r => {
                        message.channel.send({
                            embed: {
                                description: `<:ancap:791536142264565760> | **Digite sim pra confirmar a execusão da pagina ${args[1]}\n > Como cancelar?** Basta digitar qualquer outra coisa `,
                              }
                        }).then(msg => {
                            msg.delete(15000)
                          }).catch();
                        r.remove(message.author.id)
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 15000
                           }).then(async collected => {

                            if (collected.first().content === "sim"){
                                database.ref(`Registro/${message.guild.id}/Paginas/${`${consultadados} pagina ` + args[1]}`).remove()
                            }else{
                                message.channel.send(`<:ancap:791536142264565760> | A Página ${args[1]} foi deletada com sucesso.`)
                            }
                            collected.first().delete(5000)
                           })
                    })
                    function sleep(ms) {
                        return new Promise((resolve) => {
                          setTimeout(resolve, ms);
                        });
                      }   
            })
            
         }
         if(args[0] === "config"){
            function sleep(ms) {
                return new Promise((resolve) => {
                  setTimeout(resolve, ms);
                });
              }   
            var { data } = await axios.get(
                db + `/Registro//${message.guild.id}/Config.json`
                )
                if(data === null){
                    database.ref(`Registro/${message.guild.id}/Config`).update({
                            masculino: 0,
                            feminino: 0,
                            ngenero: 0,
                            novato: 0,
                            registrado: 0,
                            channel: 0,
                       })
            }   
            await sleep(1000)
            var genero01 = data.masculino
            var genero02 = data.feminino
            var genero03 = data.ngenero
            var genero04 = data.registrado
            var genero05 = data.novato
            var channel = data.channel
            
            if(genero01 === 0) genero01 = "Não Configurado"
            if(genero02 === 0) genero02 = "Não Configurado"
            if(genero03 === 0) genero03 = "Não Configurado"
            if(genero04 === 0) genero04 = "Não Configurado"
            if(genero05 === 0) genero05 = "Não Configurado"
            if(channel === 0) channel = "Não Configurado"

            message.delete()
            const config0 = new RichEmbed()
            .addField('Interface de Configuração de Registro - Soma\n\nConfiguração de Genero', `Cargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}`)
            .addField('Configuração de Registros', `Cargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}`)
            .addField('Opçoes de Configuração:', `1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n🌐 | Alterar o canal de registros`)
            .setColor("#0a0a0a")
            message.reply(config0).then(async msg => {
                await msg.react("1⃣")
                await msg.react("2⃣")
                await msg.react("3⃣")
                await msg.react("4⃣")
                await msg.react("5⃣")
                await msg.react("🌐")

                const masculinoa = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;  
                const femininoa = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;  
                const naobinarioa = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id;  
                const registradoa = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id;  
                const novatoa = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id;  
                const canala = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;

                const masculino = msg.createReactionCollector(masculinoa)
                const feminino = msg.createReactionCollector(femininoa)
                const naobinario = msg.createReactionCollector(naobinarioa)
                const registrado = msg.createReactionCollector(registradoa)
                const novato = msg.createReactionCollector(novatoa)
                const canal = msg.createReactionCollector(canala)
                
                masculino.on('collect', async r => {
                   message.channel.send({
                        embed: {
                            description: "| Menciona ou utiliza o ID de um cargo para o gênero Masculino\n > **Exemplo:** @Masculino ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar a tag masculina ",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000,
                        errors: ['time']
                       }).then(async collected => {
                        var masculino = collected.first().content

                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                masculino: masculino
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel
                     
                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"
                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit); 
                         await sleep(1000);
                       }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                     
                })
                feminino.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "| Menciona ou utiliza o ID de um cargo para o gênero Masculino\n > **Exemplo:** @Feminino ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar a tag masculina ",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        var feminino = collected.first().content
                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                feminino: feminino
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel

                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"
                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit); 
                         await sleep(1000);
                       }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                     
                })
                naobinario.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "| Menciona ou utiliza o ID de um cargo para o gênero Masculino\n > **Exemplo:** @Não Binario ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar a tag masculina ",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        var naobinarioa = collected.first().content
                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                ngenero: naobinarioa
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel

                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"

                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit); 
                         await sleep(1000);
                       }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                     
                       
                })
                registrado.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "| Menciona ou utiliza o ID de um cargo para o gênero Masculino\n > **Exemplo:** @Registrado ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar a tag masculina ",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        var registrado = collected.first().content
                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                registrado: registrado
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel

                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"

                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit); 
                         await sleep(1000);

                       }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                    
                     
                })
                novato.on('collect', async r => {
                    message.channel.send({
                        embed: {
                            description: "| Menciona ou utiliza o ID de um cargo para o gênero Masculino\n > **Exemplo:** @Novato ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar a tag masculina ",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    r.remove(message.author.id)
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        var novato = collected.first().content
                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                novato: novato
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel

                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"
                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit);
                         await sleep(1000);

                       }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                })
                canal.on('collect', async r => {
                    r.remove(message.author.id)
                    message.channel.send({
                        embed: {
                            description: "❌ | Menciona ou utiliza o ID de um canal para setar os Logs\n > **Exemplo:** #Canal ou `706925656373723156`\n**Info**: Basta digitar `off` pra desativar os Logs.",
                          }
                    }).then(msg => {
                        msg.delete(15000)
                      }).catch();
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 15000
                       }).then(async collected => {
                        var channel = collected.first().content
                        database.ref(`Registro/${message.guild.id}/Config`).update({
                                channel: channel
                           })
                        message.channel.send({
                            embed: {
                                description: "✅ | Tag setada com sucesso.",
                              }
                        }).then(msg => {
                            msg.delete(5000)
                          }).catch();
                        var { data } = await axios.get(
                         db + `/Registro//${message.guild.id}/Config.json`
                         )
                         var genero01 = data.masculino
                         var genero02 = data.feminino
                         var genero03 = data.ngenero
                         var genero04 = data.registrado
                         var genero05 = data.novato
                         var channel = data.channel
                     
                          if(genero01 === 0) genero01 = "Não Configurado"
                          if(genero02 === 0) genero02 = "Não Configurado"
                          if(genero03 === 0) genero03 = "Não Configurado"
                          if(genero04 === 0) genero04 = "Não Configurado"
                          if(genero05 === 0) genero05 = "Não Configurado"
                          if(channel === 0) channel = "Não Configurado"
                        let zedit = new RichEmbed({
                           title: 'Sistema de Registro - Apocalypse',
                          description: `**Configuração de Genero**\nCargos Masculino: ${genero01}\nCargo Feminino: ${genero02}\nCargo Não-Binario ${genero03}\n\n**Configuração de Registros**\nCargo de Registrado: ${genero04}\nCargo de Novato ${genero05}\n\nCanal de Registros: ${channel}\n\n**Opçoes de Configuração:**\n1⃣ | Alterar o cargo masculino\n2⃣ | Alterar o cargo feminino\n3⃣ | Alterar o cargo não binario\n4⃣ | Alterar o cargo de registrado\n5⃣ | Alterar o cargo de novato\n\n# | Alterar o canal de registros`,
                        })
                         r.message.edit(zedit);
                         await sleep(1000);
                    }).catch((err) => {
                        message.channel.send(`❌ | Tempo esgotado.`);
                       });
                 })
                function sleep(ms) {
                    return new Promise((resolve) => {
                      setTimeout(resolve, ms);
                    });
                  }   
                  
            })
            
         }
    }
}