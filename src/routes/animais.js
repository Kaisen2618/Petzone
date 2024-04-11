//importando as bibliotecas
const express = require('express')
const multer = require('multer')
const {z} = require('zod') 
const prisma = require('../lib/prisma')

const router = express.Router()

//multer configuração
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage}).single('file')

router.post('/', upload, async (req,res) => {
    //verificar se há arquivos presentes
    if(!req.file){
        return res.status(400).json({error: 'Nenhum arquivo enviado'})
    }

    const urlPhoto = `http://localhost:3333/files/${req.file.filename}`

    const animaisSchema =z.object({
        nome:z.string(),
        raca: z.string(),
        genero: z.string(),
        idade: z.string(),
        tamanho: z.string(),
        vacinado: z.string(),
        localizacao: z.string(),
        contato: string(),
        informacao: string()
    })
    try{
       const {contato, genero, idade, informacao, localizacao, nome, raca, tamanho, vacinado} = animaisSchema.parse(req.body)

        const animais = await prisma.animais.create({
            data:{
            nome,
            raca,
            genero,
            idade,
            tamanho,
            vacinado,
            localizacao,
            contato,
            informacao,
            fotourl: urlPhoto
            }
        })
    }catch{}
})

module.exports = router