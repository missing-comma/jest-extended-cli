const initialConstants = {
	DEBUG: false,
	VERBOSE: false,
}


class ConstantsClass {

	constructor() {
		this.data = initialConstants;
	}

	/** @param {...keyof typeof initialConstants} keys */
	turnOn = (...keys) => {
		keys.forEach(key => {
			this.data[key] = true;
		})
		return this;
	}

	/** @param {...keyof typeof initialConstants} keys */
	turnOff = (...keys) => {
		keys.forEach(key => {
			this.data[key] = false;
		})
		return this;
	}

	get DEBUG() {
		return this.data.DEBUG;
	}

	get VERBOSE() {
		return this.data.VERBOSE;
	}

}


module.exports = new ConstantsClass();