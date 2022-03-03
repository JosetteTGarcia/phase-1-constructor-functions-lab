function Scooter(year, color, model) {
  this.year = year,
  this.color = color, 
  this.model = model
}

function Driver(name, age, experience) {
    this.name = name, // don't forget ES6 power-tools, this is the same as `name: name`
    this.age = age,
    this.experience = experience
}

function PickupLocation(address, city) {
    this.address = address, // don't forget ES6 power-tools, this is the same as `name: name`
    this.city = city
}