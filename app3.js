const arr1 = ['one', 100, false, null, [1,2,3]];
const ojb1 = {
    first: 'Laurence',
    'full Name': 'Be-Asia McKerracher', 
    id: 100, 
    status: true
};
const arr2 = arr1;
console.log(arr2)

arr1[3] = `Be-Asia McKerracher`; //remember that you can reassign!
ojb1.first = `Linda`
let val = arr1[4];


console.log(arr1[4][0])
val = ojb1['first']
val = ojb1.first;
console.log(val);
document.write(val);
