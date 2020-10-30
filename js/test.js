'use strict';

const person = {
  name: 'Alex',
  tel: '+380989930267',
  parents: {
    mom: 'Olga',
    dad: 'Mike',
  }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';

console.log(person);

console.log(clone);