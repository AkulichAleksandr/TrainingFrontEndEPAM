
//-----prototype inheritance-----
//-----Vehicle-----
function Vehicle(carmaker, carmodel, firstRegistration) {
    this.carmaker = carmaker;
    this.carmodel = carmodel;
    this.firstRegistration = firstRegistration;
    this._engineState = false;
}

Vehicle.prototype.switchONEngine = function() {
    this._engineState = true;
    console.log(`The engine of ${this.carmaker} ${this.carmodel} is switched on`);
};

Vehicle.prototype.switchOffEngine = function() {
    this._engineState = false;
    console.log(`The engine of ${this.carmaker} ${this.carmodel} is switched off`);
};

//-----OffRoadCar-----
function OffRoadCar() {
    Vehicle.apply(this, arguments);
}

OffRoadCar.prototype = Object.create(Vehicle.prototype);
OffRoadCar.prototype.constructor = OffRoadCar;

OffRoadCar.prototype.startTrophyReid = function() {
    if (!this._engineState) {
        console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
        return;
    };
    console.log(`Great! We got ${this.carmaker} ${this.carmodel} (${this.firstRegistration}). Let's go driving off the road`);
}

OffRoadCar.prototype.stopTrophyReid = function() {
    Vehicle.prototype.switchOffEngine.apply(this, arguments);
    console.log(`Oh, no! The car was stalled in the mud`);
}


//-----SaloonCar-----
function SaloonCar() {
    Vehicle.apply(this, arguments);
} 

SaloonCar.prototype = Object.create(Vehicle.prototype);
SaloonCar.prototype.constructor = SaloonCar;

SaloonCar.prototype.startRacing = function() {
    if (!this._engineState) {
        console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
        return;
    };
    console.log(`WOW! It is ${this.carmaker} ${this.carmodel} (${this.firstRegistration}). We can go drifting today`);
}

SaloonCar.prototype.stopRacing = function() {
    Vehicle.prototype.switchOffEngine.apply(this, arguments);
    console.log(`It's a pity! We got a flat tire!`);
}


//-----EstateCar-----
function EstateCar() {
    Vehicle.apply(this, arguments);
} 

EstateCar.prototype = Object.create(Vehicle.prototype);
EstateCar.prototype.constructor = EstateCar;

EstateCar.prototype.startDelivering = function() {
    if (!this._engineState) {
        console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
        return;
    };
    console.log(`What a nonsense! We are driving on ${this.carmaker} ${this.carmodel} (${this.firstRegistration}) to the village to pick potatoes`);
}

EstateCar.prototype.stopDelivering = function() {
    Vehicle.prototype.switchOffEngine.apply(this, arguments);
    console.log(`The mission is completed!!! Potatoes are delivered`);
}

console.log('prototype inheritance');
console.log('--------------------');
var jeep = new OffRoadCar('Jeep', 'Cherokee', '2005');
jeep.switchONEngine();
jeep.startTrophyReid();
jeep.stopTrophyReid();

console.log('--------------------');

var bmw = new SaloonCar('BMW', '5-series', '2009');
bmw.switchONEngine();
bmw.startRacing();
bmw.stopRacing();

console.log('--------------------');

var vw = new EstateCar('Volkswagen', 'Passat', '2011');
vw.switchONEngine();
vw.startDelivering();
vw.stopDelivering();

console.log('--------------------');


//-----functional inheritance-----
//-----Vehicle-----
function Vehicle(carmaker, carmodel, firstRegistration) {
    this.carmaker = carmaker;
    this.carmodel = carmodel;
    this.firstRegistration = firstRegistration;
    this._engineState = false;

    var self = this;
    this.switchONEngine = function() {
        self._engineState = true;
        console.log(`The engine of ${self.carmaker} ${self.carmodel} is switched on`);
    };

    this.switchOffEngine = function() {
        self._engineState = false;
        console.log(`The engine of ${self.carmaker} ${self.carmodel} is switched off`);
    };
}

//-----OffRoadCar-----
function OffRoadCar() {
    Vehicle.apply(this, arguments);

    this.startTrophyReid = function() {
        if (!this._engineState) {
            console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
            return;
        };
        console.log(`Great! We got ${this.carmaker} ${this.carmodel} (${this.firstRegistration}). Let's go driving off the road`);
    }

    var VehicleSwitchOffEngine = this.switchOffEngine;
    this.stopTrophyReid = function() {
        VehicleSwitchOffEngine();
        console.log(`Oh, no! The car was stalled in the mud`);
    }
}

//-----SaloonCar-----
function SaloonCar() {
    Vehicle.apply(this, arguments);

    this.startRacing = function() {
        if (!this._engineState) {
            console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
            return;
        };
        console.log(`WOW! It is ${this.carmaker} ${this.carmodel} (${this.firstRegistration}). We can go drifting today`);
    }

    var VehicleSwitchOffEngine = this.switchOffEngine;
    this.stopRacing = function() {
        VehicleSwitchOffEngine();
        console.log(`It's a pity! We got a flat tire!`);
    }
} 

//-----EstateCar-----
function EstateCar() {
    Vehicle.apply(this, arguments);

    this.startDelivering = function() {
        if (!this._engineState) {
            console.log(`Please, switch on the engine of ${this.carmaker} ${this.carmodel} before the moving`);
            return;
        };
        console.log(`What a nonsense! We are driving on ${this.carmaker} ${this.carmodel} (${this.firstRegistration}) to the village to pick potatoes`);
    }

    var VehicleSwitchOffEngine = this.switchOffEngine;
    this.stopDelivering = function() {
        VehicleSwitchOffEngine();
        console.log(`The mission is completed!!! Potatoes are delivered`);
    }
} 

console.log('functional inheritance');
console.log('--------------------');
var mitsubishi = new OffRoadCar('Mitsubishi', 'Pajero', '2007');
mitsubishi.switchONEngine();
mitsubishi.startTrophyReid();
mitsubishi.stopTrophyReid();

console.log('--------------------');

var porsche = new SaloonCar('Porsche', 'Panamera', '2012');
porsche.switchONEngine();
porsche.startRacing();
porsche.stopRacing();

console.log('--------------------');

var renault = new EstateCar('Renault', 'Laguna', '1996');
renault.switchONEngine();
renault.startDelivering();
renault.stopDelivering();

console.log('--------------------');