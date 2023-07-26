import czCoralPink from "./packs/cz/veeba/aromated/coral-pink.png";
import czCoralPinkVeev from "./packs/cz/veev/aromated/coral-pink.png";
import czIndiBlue from "./packs/cz/veeba/aromated/indiblue.png";
import czIndiBlueVeev from "./packs/cz/veev/aromated/indiblue.png";
import czTurquoise from "./packs/cz/veeba/cooling/turquoise.png";
import czMauve from "./packs/cz/veeba/cooling/mauve.png";
import czBlueRaspberry from "./packs/cz/veeba/aromated/blue-raspberry.png";
import czRedMix from "./packs/cz/veev/aromated/red-mix.png";
import czMint from "./packs/cz/veev/cooling/classic-mint.png";
import czTereaTurquoise from "./packs/cz/iluma/cooling/terea-turquoise.png";
import czBlue from "./packs/cz/iluma/cooling/terea-blue.png";
import czYellow from "./packs/cz/iluma/tobacco/terea-yellow.png";
import czAmber from "./packs/cz/iluma/tobacco/terea-amber.png";
import czWillow from "./packs/cz/iluma/aromated/terea-willow.png";
import czArbora from "./packs/cz/iluma/aromated/terea-arbora.png";
import czTereaMauve from "./packs/cz/iluma/aromated/terea-mauve.png";
import czRoxo1 from "./packs/cz/lilSolid/aromated/fiit-roxo.png";
import czIsland from "./packs/cz/lilSolid/aromated/fiit-island.png";
import czRoxo2 from "./packs/cz/lilSolid/cooling/fiit-roxo.png";
import czMarine from "./packs/cz/lilSolid/cooling/fiit-marine.png";
import czRegular from "./packs/cz/lilSolid/tobacco/fiit-regular.png";
import czRegularDeep from "./packs/cz/lilSolid/tobacco/fiit-regular-deep.png";
import skCoralPink from "./packs/sk/veeba/aromated/coral-pink.png";
import skIndiBlue from "./packs/sk/veeba/aromated/indiblue.png";
import skTurquoise from "./packs/sk/veeba/cooling/turquoise.png";
import skMauve from "./packs/sk/veeba/cooling/mauve.png";
import skSunglowMix from "./packs/sk/veev/aromated/sunglow-mix.png";
import skRedMix from "./packs/sk/veev/aromated/red-mix.png";
import skClassicBlond from "./packs/sk/veev/tobacco/classic-blond.png";
import skMint from "./packs/sk/veev/cooling/classic-mint.png";
import skTereaTurquoise from "./packs/sk/iluma/cooling/terea-turquoise.png";
import skBlue from "./packs/sk/iluma/cooling/terea-blue.png";
import skYellow from "./packs/sk/iluma/tobacco/terea-yellow.png";
import skAmber from "./packs/sk/iluma/tobacco/terea-amber.png";
import skWillow from "./packs/sk/iluma/aromated/terea-willow.png";
import skArbora from "./packs/sk/iluma/aromated/terea-arbora.png";
import skTereaMauve from "./packs/sk/iluma/aromated/terea-mauve.png";
import skRoxo1 from "./packs/sk/lilSolid/aromated/fiit-roxo.png";
import skIsland from "./packs/sk/lilSolid/aromated/fiit-island.png";
import skRoxo2 from "./packs/sk/lilSolid/cooling/fiit-roxo.png";
import skMarine from "./packs/sk/lilSolid/cooling/fiit-marine.png";
import skRegular from "./packs/sk/lilSolid/tobacco/fiit-regular.png";
import skRegularDeep from "./packs/sk/lilSolid/tobacco/fiit-regular-deep.png";

const packs = {
  cz: {
    veeba: {
      cooling: [
        { image: czTurquoise, name: "Turquoise" },
        { image: czMauve, name: "Mauve" },
      ],
      aromated: [
        { image: czBlueRaspberry, name: "Blue Raspberry" },
        { image: czCoralPink, name: "Coral Pink" },
        { image: czIndiBlue, name: "Indiblue" },
      ],
    },
    terea: {
      cooling: [
        { image: czBlue, brand: "TEREA", name: "Blue" },
        { image: czTereaTurquoise, brand: "TEREA", name: "Turquoise" },
      ],
      aromated: [
        { image: czTereaMauve, brand: "TEREA", name: "Mauve-wave selection" },
        { image: czWillow, brand: "TEREA", name: "Willow" },
        { image: czArbora, brand: "TEREA", name: "Arbora Pearl" },
      ],
      tobacco: [
        { image: czAmber, brand: "TEREA", name: "Amber" },
        { image: czYellow, brand: "TEREA", name: "Yellow" },
      ],
    },
    veev: {
      cooling: [{ image: czMint, name: "Blue Mint" }],
      aromated: [
        { image: czIndiBlueVeev, name: "Indiblue" },
        { image: czCoralPinkVeev, name: "Coral Pink" },
        { image: czRedMix, name: "Red" },
      ],
    },
    fiit: {
      aromated: [
        { image: czRoxo1, name: "Roxo" },
        { image: czIsland, name: "Island" },
      ],
      cooling: [
        { image: czRoxo2, name: "Roxo" },
        { image: czMarine, name: "Marine" },
      ],
      tobacco: [
        { image: czRegular, name: "Regular" },
        { image: czRegularDeep, name: "RegularDeep" },
      ],
    },
  },
  sk: {
    veeba: {
      cooling: [
        { image: skTurquoise, name: "Turquoise" },
        { image: skMauve, name: "Mauve" },
      ],
      aromated: [
        { image: skCoralPink, name: "Coral Pink" },
        { image: skIndiBlue, name: "Indiblue" },
      ],
    },
    terea: {
      cooling: [
        { image: skBlue, brand: "TEREA", name: "Blue" },
        { image: skTereaTurquoise, brand: "TEREA", name: "Turquoise" },
      ],
      aromated: [
        { image: skTereaMauve, brand: "TEREA", name: "Mauve-wave selection" },
        { image: skWillow, brand: "TEREA", name: "Willow" },
        { image: skArbora, brand: "TEREA", name: "Arbora Pearl" },
      ],
      tobacco: [
        { image: skAmber, brand: "TEREA", name: "Amber" },
        { image: skYellow, brand: "TEREA", name: "Yellow" },
      ],
    },
    veev: {
      cooling: [{ image: skMint, name: "Classic Mint" }],
      aromated: [
        { image: skSunglowMix, name: "Sunglow Mix" },
        { image: skRedMix, name: "Red Mix" },
      ],
      tobacco: [{ image: skClassicBlond, name: "Classic Blond" }],
    },
    fiit: {
      aromated: [
        { image: skRoxo1, name: "Roxo" },
        { image: skIsland, name: "Island" },
      ],
      cooling: [
        { image: skRoxo2, name: "Roxo" },
        { image: skMarine, name: "Marine" },
      ],
      tobacco: [
        { image: skRegular, name: "Regular" },
        { image: skRegularDeep, name: "RegularDeep" },
      ],
    },
  },
};

export default packs;
