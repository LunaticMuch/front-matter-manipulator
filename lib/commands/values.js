import Command  from '../core/values.js';

export const command = 'values <file|pattern> <fields...>';

export const usage = 'Usage: $0 values <file|pattern> <fields...>';

export const aliases = ['v'];

export const describe = 'Outputs all possible values for given fields';

export const example = '$0 values **/*.md title description date';

export const builder = {
    'output-file': {
        'alias': 'O',
        'describe': 'Writes the output to JSON in the specified file'
    },
    'output-string': {
        'alias': 'Q',
        'describe': 'Writes the output out as a space delimited string'
    }
};

export const handler = function(argv) {
    var options = Object.assign({cli: true}, argv);

    return Command(options.file, options.fields, options);
};
