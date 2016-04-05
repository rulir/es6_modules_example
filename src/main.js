import {sum} from './lib/math';
import Vehicle from './lib/vehicle';

const v1 = new Vehicle('Car', 'GH-3355'); 
console.log(v1.display());

const total = sum(10, 20);
console.log(total);
