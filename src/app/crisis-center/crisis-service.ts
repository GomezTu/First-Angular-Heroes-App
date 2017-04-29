export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

export class CrisisService {
  getCrisis(): Promise<Crisis[]> {
        return new Promise(resolve => {
            setTimeout(() => {resolve(CRISES)}, 800);
        });
    }

    getCrise(id : number | string): Promise<Crisis> {
        return new Promise(resolve => {
            resolve(this.getCrisis().then(c => c.find(r => r.id === +id)));
        })
    }
}
