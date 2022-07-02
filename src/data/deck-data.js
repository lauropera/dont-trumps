import defaultChars from './deck-data/base-characters';
import bosses from './deck-data/bosses';
import skinsCollection01 from './deck-data/skins-collection-01';
import skinsCollection02 from './deck-data/skins-collection-02';

const deckArr = [
  ...defaultChars,
  ...bosses,
  ...skinsCollection01,
  ...skinsCollection02,
];

export default deckArr;
