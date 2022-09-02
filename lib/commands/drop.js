import Command  from "../core/drop.js";
export default exports

export const command = "drop <file|pattern> <fields...>"

export const usage = "Usage: $0 drop <file|pattern> <fields...>"

export const aliases = ["d"]

export const describe = "Remove the specified fields"

export const example = "$0 drop **/*.md key1 key2"

export const builder = {
    include: {
        alias: "inc",
        describe: "Provide a comma delimited list of key-value pairs to only include datasets that match"
    },
    exclude: {
        alias: "excl",
        describe: "Provide a comma delimited list of key-value pairs to exclude datasets that match"
    },
    "dry-run": {
        alias: "D",
        describe: "Lists the changes to each file without writing the changes",
        boolean: true
    }
}

export const handler = function(argv) {
    var options = Object.assign({cli: true}, argv)

    return Command(options.file, options.fields, options)
}