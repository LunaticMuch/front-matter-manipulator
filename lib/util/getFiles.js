import fs  from 'fs';
import glob  from 'glob';
import isMissing  from './isMissing.js';
import {resolve}  from 'path';



export default function getFiles(patterns, ignore) {
    if (!patterns) throw new Error('Missing value for "patterns". Please provide a file path or glob pattern');

    patterns = Array.isArray(patterns) ? patterns : [patterns];

    var files = patterns.reduce(function(results, pattern) {
        var result = glob.sync(pattern, {ignore: ignore});
        
        if (result.length > 0)
            results = [].concat(results).concat(result);
        
        return results;
    }, []).reduce(function(results, filePath) {
        var file = getFile(filePath);

        if (file !== null) {
            results.push({path: filePath, file: file});
        }

        return results;
    }, []).filter(function(f) {
        return !isMissing(f.path) && !isMissing(f.file);
    });

    return files;
}

function getFile(fileName) {
    if (!fileName) throw new Error('Missing value for "fileName"');
    
    var file = fs.readFileSync(resolve(fileName), {encoding: 'UTF-8'});

    return file;
}