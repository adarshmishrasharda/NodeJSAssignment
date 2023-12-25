function mergeCars(car1, car2) {
    var mergedCar = {};
  
    for (var key in car1) {
      if (car1.hasOwnProperty(key)) {
        mergedCar[key] = car1[key];
      }
    }
  
    for (var key in car2) {
      if (car2.hasOwnProperty(key)) {
        mergedCar[key] = car2[key];
      }
    }
  
    return mergedCar;
  }
  
  var car1 = { brandCar1: "Toyota", model: "Camry", year: 2020, policy: "acko" };
  var car2 = { brandCar2:"Tata", color: "Blue", mileage: 50 };
  
  var mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  // Output: { brand: "Toyota", model: "Camry", year: 2020, color: "Blue", mileage: 5000 }
  