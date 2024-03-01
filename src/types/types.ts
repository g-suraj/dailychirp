type Occurence = {
  __birdsong: string;
  __license: string;
  __rightsHolder: string;
  sex: string;
  fieldNotes: string;
  gbifID: string;
  level0Name: string;
  level1Name: string;
  level2Name: string;
  speciesKey: string;
};

export type Bird = {
  scientificName: string;
  higherClassification: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  vernacularName: string;
  speciesKey: string;
  _pictures: Picture[];
  _occurrences: Occurence[];
};

export type Guess = {
  todaysIndex: string;
  yourGuess: string;
};

export type Picture = {
  src: string;
  rightsHolder: string;
};
