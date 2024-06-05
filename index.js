const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(app.json())
app.use(cors())


