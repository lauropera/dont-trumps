import antlion from '../card-images/bosses/Antlion.png';
import bearger from '../card-images/bosses/Bearger.png';
import beeQueen from '../card-images/bosses/Bee_Queen.png';
import deerclops from '../card-images/bosses/Deerclops.png';
import dragonfly from '../card-images/bosses/Dragonfly.png';
import eyeOfTerror from '../card-images/bosses/Eye_of_Terror.png';
import moose from '../card-images/bosses/Moose.png';

const bosses = [
  {
    cardName: 'Antlion',
    cardDescription: 'The mighty lion.',
    cardAttr1: '35',
    cardAttr2: '19',
    cardAttr3: '48',
    cardImage: antlion,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Bearger',
    cardDescription: 'Eats food, be it in containers or on the ground.',
    cardAttr1: '44',
    cardAttr2: '21',
    cardAttr3: '36',
    cardImage: bearger,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Bee Queen',
    cardDescription: 'Spawns and boosts Grumble Bees. Leaves a slowing trail of honey.',
    cardAttr1: '29',
    cardAttr2: '16',
    cardAttr3: '59',
    cardImage: beeQueen,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Deerclops',
    cardDescription: 'Destroys structures and trees. Freezes enemies',
    cardAttr1: '41',
    cardAttr2: '23',
    cardAttr3: '38',
    cardImage: deerclops,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Dragonfly',
    cardDescription:
      `Spits lava. Engulfs herself in fire when attacked,
      sets anything near her on fire and deals constant fire damage to anything nearby.`,
    cardAttr1: '46',
    cardAttr2: '12',
    cardAttr3: '28',
    cardImage: dragonfly,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Eye of Terror',
    cardDescription: 'Don\'t look at me.',
    cardAttr1: '31',
    cardAttr2: '29',
    cardAttr3: '46',
    cardImage: eyeOfTerror,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Moose',
    cardDescription: 'Honks to make the player drop their weapon.',
    cardAttr1: '34',
    cardAttr2: '18',
    cardAttr3: '47',
    cardImage: moose,
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

export default bosses;
