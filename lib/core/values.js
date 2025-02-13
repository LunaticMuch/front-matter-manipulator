import _  from 'lodash';
import getDescendantProp  from '../util/getDescendantProp.js';
import getFiles  from '../util/getFiles.js';
import getFieldPermutations  from '../util/getFieldPermutations.js';
import isMissing  from '../util/isMissing.js';
import output  from './output.js';
import parseFile  from '../util/parseFile.js';
/** @namespace Values */

/**
 * Retrieves all fields for one or more files
 * @memberof Values
 * @param {string} patterns - A file path or glob pattern to search for files
 * @param {string} fields - A space delimited list of fields to get values for
 * @param {Object} options - Configuration options
 * @param {string} options.ignore - A file path or glob pattern to search for files not to modify. Defaults to "node_modules".
 * @param {string} options.outputFile - path to a file where output should be saved
 * @returns {Object} values
 * @example
 * var fmp = require("front-matter-manipulator")
 *  
 * fmp.values("_posts/example-post.md", "categories tags")
 * @example
 * var fmp = require("front-matter-manipulator")
 * var options = {
 *     ignore: "_posts/subdirectory/*.md"
 * }
 *  
 * fmp.values("**‏/*.md", "categories tags", options)
 */
export default function values(patterns, fields, options) {
    if (!patterns) throw new Error('Missing value for "patterns". Please provide a file path or glob pattern');
    if (!fields) throw new Error('Missing value for "fields"');
    if (!Array.isArray(fields)) fields = [fields];

    var matchData = {};
    var files = getFiles(patterns, options.ignore);
    
    if(files.length > 0) {
        var allFilesData = files.reduce(function(results, f) {
            if (!isMissing(f.file)) {
                var data = parseFile(f.file).data;
                results.push(data);
            } 
            return results;
        }, []);

        fields.forEach(function(f) {
            matchData[f] = [];

            allFilesData.forEach(function(data) {
                var permutations = getFieldPermutations(f, data);

                var matches = _.uniq(permutations.map(function(p) {
                    var val = getDescendantProp(data, p);
                    return val;
                })).filter(function(m) {
                    return !isMissing(m);
                });

                matchData[f] = _.uniq(matchData[f].concat(matches));
            });
            // eslint-disable-next-line no-self-assign
            matchData[f] = matchData[f];
        });
    }

    return output(matchData, options);
}
