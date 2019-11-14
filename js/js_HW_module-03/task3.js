const findBestEmployee = employees => {
  let tasks = 0;
  let name = null;

  const keys = Object.keys(employees);

  for (const key of keys) {
    if (tasks < employees[key]) {
      tasks = employees[key];
      name = key;
    }
  }

  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); 

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); 
