export default function updateDescendantProp(obj, key, replacement) {
    key = key.split('.');

    var i = 0;
    for (i = 0; i < key.length - 1; i++)
        obj = obj[key[i]];
    
    obj[key[i]] = replacement;
}