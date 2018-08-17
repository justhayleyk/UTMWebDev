function Character(name, profession, gender, age, strength, hitPoints) {
  (this.name = name),
    (this.profession = profession),
    (this.gender = gender),
    (this.age = age),
    (this.strength = strength),
    (this.hitPoints = hitPoints),
    (this.printStats = function() {
      console.log(
        `Character Name: ${this.name} 
        Profession: ${this.profession} 
        Gender: ${this.gender} 
        Age: ${this.age} 
        Strength: ${this.strength} 
        HitPoints: ${this.hitPoints}`
      );
    });
  // Chekcing if alive
  this.isAlive = function() {
    if (this.hitPoints > 0) {
      console.log(`${this.name} is ALIVE`);
    } else {
      console.log(` Uh oh ${this.name} is dead`);
    }
  };
  // attack
  this.attack = function(char2) {
    char2.hitPoints -= this.strength;

    console.log(`${this.name} attacked ${char2.name} for ${this.strength}hp`);
  };

  // level up
  this.levelUp = function() {
    this.age++;
    this.strength += 5;
    this.hitPoints += 25;
  };
}

let elf = new Character('Elewyn', 'blacksmith', 'female', 21, 5, 35);
let paladin = new Character('Theo', 'knight', 'male', 35, 12, 78);

elf.printStats();
paladin.printStats();

elf.attack(paladin);

paladin.printStats();
paladin.isAlive();

elf.levelUp();
elf.printStats();
