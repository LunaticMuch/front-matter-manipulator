import chalk from 'chalk';
import encodeFile from '../util/encodeFile.js';
import parseFile from '../util/parseFile.js';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

export default function write(path, content, data, options) {
    if (!options.dryRun) {
        var toSave = encodeFile(content, data);

        if (options.verbose && options.cli)
            console.log(chalk`{gray Processing {bold ${path}}}`);

        writeFileSync(resolve(path), toSave);

        if (options.cli)
            console.log(chalk`{green {bold ${path}} updated}`);

        return parseFile(toSave);
    }
}