Function.prototype.callCustom = function (contextObject, ...agrs) {
  console.log(this);

  const callingFunction = this;
  const functionKey = Symbol();
  contextObject[functionKey] = callingFunction;
  contextObject[functionKey](...agrs);
  console.log(contextObject);
  //   console.log(contextObject);
  delete contextObject[functionKey];
};

let caption = {
  name: 'Steve',
  team: 'Cap',
  teamFn: function (m1, m2, ...others) {
    console.log(`Team:${this.name}`);
    console.log(`member:${m1} ${m2} ${others}`);
  },
};

let rock = {
  name: 'Tony',
  team: 'Rocksolid',
};

caption.teamFn.callCustom(rock, 'blackwidow', 'Wanda', 'falcon', 'antman');

// console.log(caption.teamFn.callCustom(rock));
