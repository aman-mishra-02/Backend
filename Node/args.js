// console.log('hello from args.js file')
// console.log(process.argv)

const args = process.argv.slice(2);
for(arg of args){
    console.log(`hi there, ${arg}`)
}