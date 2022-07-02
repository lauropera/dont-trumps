import walter from '../card-images/characters/walter_none.png';
import wanda from '../card-images/characters/wanda_none.png';
import warly from '../card-images/characters/warly_none.png';
import wigfrid from '../card-images/characters/wigfrid_none.png';
import maxwell from '../card-images/characters/maxwell_none.png';
import webber from '../card-images/characters/webber_none.png';
import wendy from '../card-images/characters/wendy_none.png';
import wes from '../card-images/characters/wes_none.png';
import wickerbottom from '../card-images/characters/wickerbtm_none.png';
import willow from '../card-images/characters/willow_none.png';
import wilson from '../card-images/characters/wilson_none.png';
import winona from '../card-images/characters/winona_none.png';
import wolfgang from '../card-images/characters/wolfgang_none.png';
import woodie from '../card-images/characters/woodie_none.png';
import wormwood from '../card-images/characters/wormwood_none.png';
import wortox from '../card-images/characters/wortox_none.png';
import wurt from '../card-images/characters/wurt_none.png';
import wx78 from '../card-images/characters/wx78_none.png';

const defaultChars = [
  {
    cardName: 'Walter',
    cardDescription:
      `Walter is an odd but cheerful boy,
      whose ability to assess danger leaves something to be desired.`,
    cardAttr1: '41',
    cardAttr2: '31',
    cardAttr3: '29',
    cardImage: walter,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wanda',
    cardDescription:
      `Wanda is a skilled clockmaker who
      will stop at nothing to outrun her future.`,
    cardAttr1: '28',
    cardAttr2: '72',
    cardAttr3: '31',
    cardImage: wanda,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Warly',
    cardDescription:
      `To Warly, cooking is a language through
      which to express love and gratitude to those he holds dear.`,
    cardAttr1: '34',
    cardAttr2: '43',
    cardAttr3: '58',
    cardImage: warly,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wigfrid',
    cardDescription:
      `Whoever Wigfrid was before her titular
      role has been lost to time, and the power of method acting.`,
    cardAttr1: '64',
    cardAttr2: '22',
    cardAttr3: '61',
    cardImage: wigfrid,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Maxwell',
    cardDescription:
      `Formerly the Shadow King, lately
      Maxwell finds himself reacquainted with life among the commonfolk.`,
    cardAttr1: '36',
    cardAttr2: '74',
    cardAttr3: '21',
    cardImage: maxwell,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Webber',
    cardDescription:
      `Webber is a polite young monster
      who cares deeply for all his friends, human or otherwise.`,
    cardAttr1: '44',
    cardAttr2: '24',
    cardAttr3: '41',
    cardImage: webber,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wendy',
    cardDescription:
      `Wendy is a morose young lady
      with a sisterly bond so powerful, it transcends death itself.`,
    cardAttr1: '41',
    cardAttr2: '38',
    cardAttr3: '39',
    cardImage: wendy,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wes',
    cardDescription: 'Wes is a mime of many thoughts, but few words.',
    cardAttr1: '25',
    cardAttr2: '36',
    cardAttr3: '24',
    cardImage: wes,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wickerbottom',
    cardDescription:
      `A woman of curious mind and stern air,
      Wickerbottom thrives on the lifelong pursuit of knowledge.`,
    cardAttr1: '28',
    cardAttr2: '64',
    cardAttr3: '29',
    cardImage: wickerbottom,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Willow',
    cardDescription:
      `Willow is a candid woman whose penchant for
      fire often gets her into more than a little trouble.`,
    cardAttr1: '43',
    cardAttr2: '31',
    cardAttr3: '39',
    cardImage: willow,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wilson',
    cardDescription:
      `At heart Wilson is truly a man of science.
      It's not in his nature to resist the call of the unknown`,
    cardAttr1: '34',
    cardAttr2: '69',
    cardAttr3: '38',
    cardImage: wilson,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Winona',
    cardDescription:
      `Winona is a former assembly line worker
      with a boisterous attitude and a love of all things mechanical.`,
    cardAttr1: '58',
    cardAttr2: '31',
    cardAttr3: '42',
    cardImage: winona,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wolfgang',
    cardDescription:
      `Wolfgang is an affable, musclebound
      giant with a heart plagued by a myriad of phobias.`,
    cardAttr1: '67',
    cardAttr2: '29',
    cardAttr3: '64',
    cardImage: wolfgang,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Woodie',
    cardDescription:
      `A gruff, bearded woodsman, Woodie has a soft
      spot for nature, plaid, and his trusty axe, Lucy.`,
    cardAttr1: '46',
    cardAttr2: '21',
    cardAttr3: '39',
    cardImage: woodie,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wormwood',
    cardDescription:
      `An amalgam of vines given sentience by
      lunar magic, Wormwood searches for friends so he can finally belong.`,
    cardAttr1: '32',
    cardAttr2: '31',
    cardAttr3: '67',
    cardImage: wormwood,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wortox',
    cardDescription:
      `Wortox is a mischievous imp whose levity
      masks a deep well of guilt. He has taken many souls in his time.`,
    cardAttr1: '61',
    cardAttr2: '43',
    cardAttr3: '54',
    cardImage: wortox,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Wurt',
    cardDescription:
      `Wurt is a curious young Merm trying to expand
      her horizons... as long as those horizons don't extend into Pig territory.`,
    cardAttr1: '37',
    cardAttr2: '31',
    cardAttr3: '41',
    cardImage: wurt,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'WX-78',
    cardDescription:
      `One might assume WX's callous nature
      hides a sensitive inner soul. One would assume incorrectly.`,
    cardAttr1: '41',
    cardAttr2: '34',
    cardAttr3: '78',
    cardImage: wx78,
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

export default defaultChars;
