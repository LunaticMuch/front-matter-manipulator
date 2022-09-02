import Command  from "../core/rename.js";
export default exports

export const command = "rename <file|pattern> <field> <replacement>"

export const usage = "Usage: $0 fields <file|pattern> <field> <replacement>"

export const aliases = ["r"]

export const describe = "Renames the given field"

export const example = "$0 rename \"**/*.md\" title heading"

export const builder = {
    "dry-run": {
        alias: "D",
        describe: "Lists the changes to each file without writing the changes",
        boolean: true
    },
    include: {
        alias: "inc",
        describe: "Provide a comma delimited list of key-value pairs to only include datasets that match"
    },
    exclude: {
        alias: "excl",
        describe: "Provide a comma delimited list of key-value pairs to exclude datasets that match"
    },
    "regex": {
        alias: "-R",
        describe: "Runs the old value through a regex and replaces it with the output"
    }
}

export const handler = function(argv) {
    var options = Object.assign({cli: true}, argv)

    return Command(options.file, options.field, options.replacement, options)
}