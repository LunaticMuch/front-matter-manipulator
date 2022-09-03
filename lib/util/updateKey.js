import isMissing  from './isMissing.js';
export default function updateKey(obj, key, replacement) {
    key = key.split('.');

    var parent;
    for (var i = 0; i < key.length - 1; i++) {
        parent = obj;
        obj = obj[key[i]];
    }

    if (Array.isArray(obj) && !isMissing(parent[key[i-1]])) {
        let value = obj;
        delete parent[key[i-1]];
        parent[replacement] = value;
    } else if (!isMissing(obj[key[i]])) {
        let value = obj[key[i]];
        delete obj[key[i]];
        obj[replacement] = value;
    }
}