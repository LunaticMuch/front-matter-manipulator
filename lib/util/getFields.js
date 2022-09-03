import getData from '../util/parseFile.js';

export default function getFileData(files) {
    return files.reduce(function(results, file) {
        var data = getData(file);

        if (data !== null && data !== undefined) {
            if (typeof data === 'object' && Object.keys(data).length > 0) {
                results.push(data);
            }
        }

        return results;
    }, []);
}
