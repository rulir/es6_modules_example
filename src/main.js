import {sum} from './lib/math';
import Vehicle from './lib/vehicle';
import {print} from './lib/vehicle';

const v1 = new Vehicle('Car', 'GH-3355'); 

const log = print(v1);

const total = sum(10, 20);
console.log(total);
