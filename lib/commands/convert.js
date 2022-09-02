import Command  from "../core/convert.js";

/** @namespace TODO */

/**
 * Coming soon. For now, use the following example to get usage from the command line.
 * @memberof TODO
 * @example
 * $ front-matter-manipulator --help
 * 
 * OR
 * 
 * $ front-matter-manipulator <command> --help
 */

 export default exports

 export const command = "convert <file|pattern> <field>"
 
 export const usage = "Usage: $0 convert <file|pattern> <field>"
 
 export const aliases = ["u"]
 
 export const describe = "Update the value of a field across multiple files"
 
 export const example = "$0 update **/*.md title newval"
 
 export const builder = {
     "dry-run": {
         alias: "D",
         describe: "Lists the changes to each file without writing the changes",
         boolean: true
     }
 }
 
 export const handler = function(argv) {
     var options = Object.assign({cli: true}, argv)
 
     return Command(options.file, options.field, options)
 }