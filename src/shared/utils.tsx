import { isEqual } from "lodash";

const { differenceInYears, parse } = require("date-fns");

export type IQ2_RESULT =
  | "cigarettes"
  | "vapes"
  | "tobacco"
  | "cig+vapes"
  | "other";

export type IQOS_DEVICE =
  | "veev"
  | "veeba"
  | "lilSolid"
  | "ilumaOne"
  | "iluma"
  | "ilumaPrime";

export const deviceType = {
  veev: "vape",
  veeba: "vape",
  iluma: "tobacco",
  ilumaOne: "tobacco",
  ilumaPrime: "tobacco",
  lilSolid: "tobacco",
};

export const calculateResult = ({
  Q1Answers,
  Q2Answers,
}: {
  Q1Answers: number[];
  Q2Answers: number[];
}) => {
  //Q1 -> 1/2/3/4/5
  //Q2 -> 6/7/8/9
  const Q2Result: IQ2_RESULT = getQ2Result(Q2Answers);
  const sortedQ1Answers = Q1Answers.sort();
  if (Q2Result === "cigarettes") {
    if (isEqual(sortedQ1Answers, [1, 2])) {
      return ["ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [1, 3])) {
      return ["lilSolid", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 4])) {
      return ["ilumaOne", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 5])) {
      return ["ilumaOne", "lilSolid"];
    } else if (isEqual(sortedQ1Answers, [2, 3])) {
      return ["ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [2, 4])) {
      return ["ilumaPrime"];
    } else if (isEqual(sortedQ1Answers, [2, 5])) {
      return ["ilumaPrime"];
    } else if (isEqual(sortedQ1Answers, [3, 4])) {
      return ["lilSolid", "veeba"];
    } else if (isEqual(sortedQ1Answers, [3, 5])) {
      return ["lilSolid"];
    } else if (isEqual(sortedQ1Answers, [4, 5])) {
      return ["ilumaPrime"];
    }
  } else if (Q2Result === "cig+vapes") {
    if (isEqual(sortedQ1Answers, [1, 2])) {
      return ["ilumaOne", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 3])) {
      return ["lilSolid", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 4])) {
      return ["ilumaOne", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 5])) {
      return ["ilumaOne", "lilSolid"];
    } else if (isEqual(sortedQ1Answers, [2, 3])) {
      return ["ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [2, 4])) {
      return ["iluma", "veev"];
    } else if (isEqual(sortedQ1Answers, [2, 5])) {
      return ["ilumaPrime", "veev"];
    } else if (isEqual(sortedQ1Answers, [3, 4])) {
      return ["veeba", "lilSolid"];
    } else if (isEqual(sortedQ1Answers, [3, 5])) {
      return ["lilSolid", "ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [4, 5])) {
      return ["iluma", "veev"];
    }
  } else if (Q2Result === "tobacco") {
    if (isEqual(sortedQ1Answers, [1, 2])) {
      return ["ilumaPrime"];
    } else if (isEqual(sortedQ1Answers, [1, 3])) {
      return ["lilSolid"];
    } else if (isEqual(sortedQ1Answers, [1, 4])) {
      return ["veev", "veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 5])) {
      return ["veev", "lilSolid"];
    } else if (isEqual(sortedQ1Answers, [2, 3])) {
      return ["veev"];
    } else if (isEqual(sortedQ1Answers, [2, 4])) {
      return ["iluma"];
    } else if (isEqual(sortedQ1Answers, [2, 5])) {
      return ["ilumaPrime"];
    } else if (isEqual(sortedQ1Answers, [3, 4])) {
      return ["lilSolid", "veev"];
    } else if (isEqual(sortedQ1Answers, [3, 5])) {
      return ["lilSolid", "ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [4, 5])) {
      return ["iluma", "veev"];
    }
  } else if (Q2Result === "vapes") {
    if (isEqual(sortedQ1Answers, [1, 2])) {
      return ["veev"];
    } else if (isEqual(sortedQ1Answers, [1, 3])) {
      return ["veeba"];
    } else if (isEqual(sortedQ1Answers, [1, 4])) {
      return ["veev"];
    } else if (isEqual(sortedQ1Answers, [1, 5])) {
      return ["veev", "ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [2, 3])) {
      return ["veeba"];
    } else if (isEqual(sortedQ1Answers, [2, 4])) {
      return ["veev", "veeba"];
    } else if (isEqual(sortedQ1Answers, [2, 5])) {
      return ["veev", "ilumaOne"];
    } else if (isEqual(sortedQ1Answers, [3, 4])) {
      return ["veeba", "veev"];
    } else if (isEqual(sortedQ1Answers, [3, 5])) {
      return ["veeba", "lilSolid"];
    } else if (isEqual(sortedQ1Answers, [4, 5])) {
      return ["veev", "ilumaPrime"];
    } else {
      return [];
    }
  } else if (Q2Result === "other") {
    return ["ilumaPrime"];
  }
};

function isNestedArray(arr, nestedArr) {
  return arr.some((subArr) => isEqual(subArr, nestedArr));
}

const getQ2Result = (Q2Answers: number[]): IQ2_RESULT => {
  const sortedQ2Answers = Q2Answers.sort();
  const possibilities = {
    cigarettes: [[6], [6, 8], [6, 9], [6, 8, 9]],
    vapes: [[7], [7, 9]],
    tobacco: [[8], [8, 9]],
    "cig+vapes": [
      [6, 7],
      [6, 7, 8],
      [6, 7, 9],
      [6, 7, 8, 9],
      [7, 8],
      [7, 8, 9],
    ],
    other: [[9]],
  };

  if (isNestedArray(possibilities.cigarettes, sortedQ2Answers)) {
    return "cigarettes";
  } else if (isNestedArray(possibilities.vapes, sortedQ2Answers)) {
    return "vapes";
  } else if (isNestedArray(possibilities.tobacco, sortedQ2Answers)) {
    return "tobacco";
  } else if (isNestedArray(possibilities["cig+vapes"], sortedQ2Answers)) {
    return "cig+vapes";
  } else {
    return "other";
  }
};

export const buttonLinksByLanguage = {
  cz: {
    iluma: "https://www.iqos.com/cz/cs/shop/iluma-sada-pebble-beige.html",
    ilumaOne:
      "https://www.iqos.com/cz/cs/shop/iluma-one-sada-pebble-beige.html",
    ilumaPrime:
      "https://www.iqos.com/cz/cs/shop/iluma-prime-sada-golden-khaki.html",
    veeba: "https://www.iqos.com/cz/cs/objev-vaping/kup-veeba.html",
    veev: "https://www.iqos.com/cz/cs/objev-vaping/zarizeni.html",
    lilSolid: "https://www.iqos.com/cz/cs/shop/lil-solid-sada-stone-grey.html",
    all: "https://www.iqos.com/cz/cs/nejprve-vyzkousej.html#EXPERT",
  },
  sk: {
    iluma: "https://www.iqos.com/sk/sk/shop/iluma-sada-pebble-beige.html",
    ilumaOne:
      "https://www.iqos.com/sk/sk/shop/iluma-one-sada-pebble-beige.html",
    ilumaPrime:
      "https://www.iqos.com/sk/sk/shop/iluma-prime-sada-golden-khaki.html",
    veeba: "https://www.iqos.com/sk/sk/objav-vaping/kup-veeba.html",
    veev: "https://www.iqos.com/sk/sk/shop/veev-vape-zariadenie-marine-blue.html",
    lilSolid: "https://www.iqos.com/sk/sk/shop/lil-solid-sada-stone-grey.html",
    all: "https://www.iqos.com/sk/sk/najprv-si-ho-vyskusaj.html#EXPERT",
  },
};

export const calculateAge = (dob: string) => {
  const date = parse(dob, "MM/yyyy", new Date());
  return differenceInYears(new Date(), date);
};
