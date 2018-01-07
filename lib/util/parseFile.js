var graymatter = require("gray-matter")
var toml = require("toml-js")
var yaml = require("yamljs")

module.exports = function getData(file) {
    if (!file) throw new Error("Missing value for \"file\"")

    try {
        var matter = graymatter(file, {
            engines: {
                yaml: {
                    parse: yaml.parse.bind(yaml)
                },
                toml: {
                    parse: toml.parse.bind(toml)
                }
              }
        })
        return matter
    }
     catch (err) {
         console.log(err)
     }

     return null
}