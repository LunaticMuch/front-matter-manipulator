import graymatter  from "gray-matter";
import toml  from "@iarna/toml";
import yaml  from "yamljs";


export default function encodeFile(file, data) {
    if (!data) throw new Error("Missing value for \"data\"")

    try {
        var file = graymatter.stringify(file, data, {
            engines: {
                yaml: {
                    parse: yaml.parse.bind(yaml),
                    stringify: yaml.dump.bind(yaml)
                },
                toml: {
                    parse: toml.parse.bind(toml),
                    stringify: toml.stringify.bind(toml)
                }
              }
        })
        return file
    }
     catch (err) {
         console.log(err)
     }

     return null
}