#!/usr/bin/env node
import fetch from 'node-fetch'
// globalThis.fetch = fetch
// const { default: fetch } = require("node-fetch")
import yargs from 'yargs';
import inquirer from 'inquirer';
const {argv}=yargs(process.argv)
const printMoves=async(pokemonName)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}` )
    const pokemon=await response.json()
    const moves=pokemon.moves.map(({move})=>move.name)
    console.log(moves.slice(0,5))
}
const prompt=inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"enter pokemon name"
},]).then((answers)=>{
    const pokemon=answers.pokemon
    printMoves(pokemon)

})
