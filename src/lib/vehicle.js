export default class {
	constructor(type, number) {
		this.type = type;
		this.number = number;
	}

	display() {
		return `Number: ${this.number}`;
	}
}

export const print = function(v) {
	console.log(`Vehicle Info: ${v.display()}`);
};