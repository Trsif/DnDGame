
class Mob {
    constructor(name,health,attack,defence,regen){
        this.name = name
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this.regen = regen;
    }

     damageCal(damage){
        damage = this.attack - this.defence;
        return damage
        };        
}



module.exports = Mob;