import isMissing  from './isMissing.js';
import parseField  from './parseField.js';

export default updateFieldValue;

function updateFieldValue(field, next, original, target) {
    if (!field) throw new Error('Missing value for "field"');
    // if (!data) throw new Error('Missing value for "data"');

    var {
        currentField,
        subFields,
        fieldValue} = parseField(field, next);

    if (isMissing(target)) {
        target = currentField;
    }

    if (subFields.length >= 1 && Array.isArray(fieldValue)) {
        // return updateFieldValueFromArray(subFields, fieldValue, original, target);
        return;
    } else if (subFields.length >= 1 && !isMissing(fieldValue)) {
        return updateFieldValue(subFields, fieldValue, original, target);
    } else if (Array.isArray(fieldValue)) {
        // return updateFieldValueFromArray(currentField, fieldValue, original, target);
        return;
    } else {
        return;      
    }
}

// function updateFieldValueFromArray(field, next, original, target) {
//     if (!field) throw new Error('Missing value for "field"');
//     // if (!data) throw new Error('Missing value for "data"');

//     if (dasta.length > 0 ) {
//         return data.reduce(function(results, item) {
//             var { 
//                 totalSubFields,
                
//                 subFields,
//                 fieldValue} = parseField(field, item);

//             if (Array.isArray(fieldValue)) {
//                 return updateFieldValueFromArray(subFields, fieldValue, original, target);
//             } else if (totalSubFields.length >= 1) {
//                 return updateFieldValue(subFields, fieldValue, original, target);
//             } else {
//                 return replacer(fieldValue);
//             }
//         });
//     }
// }