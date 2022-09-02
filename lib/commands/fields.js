import Command  from "../core/fields.js";
export default exports

export const command = "fields <file|pattern>"

export const usage = "Usage: $0 fields <file|pattern> --filters key=value"

export const aliases = ["f"]

export const describe = "Outputs all possible fields for given files"

export const example = "$0 fields \"**/*.md\" --filters layout=default"

export const builder = {
    include: {
        alias: "inc",
        describe: "Provide a comma delimited list of key-value pairs to only include datasets that match"
    },
    exclude: {
        alias: "exc",
        describe: "Provide a comma delimited list of key-value pairs to exclude datasets that match"
    },
    "output-file": {
        "alias": "O",
        "describe": "Writes the output to the specified file"
    },
    "output-string": {
        "alias": "Q",
        "describe": "Writes the output out as a space delimited string"
    }
}

export const handler = function(argv) {
    var options = Object.assign({cli: true}, argv)

    return Command(options.file, options)
}