import {WordsService} from "~/scripts/wordsService";
import {AvailableWordService} from "~/scripts/availableWordService";

describe('Test Get Any Words', () => {
  test('Get all words', () => {
    const words = WordsService
    expect(AvailableWordService.ValidWords("?????")).toHaveLength(words.getWords().length);
    expect(AvailableWordService.ValidWords("?????")).toStrictEqual(words.getWords());
  })
})

describe('Test get specific Words', () => {
  test('Get a single word', () => {
    expect(AvailableWordService.ValidWords("zebra")).toHaveLength(1);
    expect(AvailableWordService.ValidWords("zebra")).toContain("zebra");
  })
})

describe('Get words including ? and letters', () => {
  test('Get one unknown letter words', () => {
    expect(AvailableWordService.ValidWords("zebr?")).toHaveLength(1);
    expect(AvailableWordService.ValidWords("w?rld")).toHaveLength(1);
    expect(AvailableWordService.ValidWords("w?lds")).toHaveLength(0);
  })

  test('Get multiple unknown letter words', () => {
    expect(AvailableWordService.ValidWords("zeb??")).toHaveLength(1);
    expect(AvailableWordService.ValidWords("z?b??")).toHaveLength(1);
    expect(AvailableWordService.ValidWords("wa??r")).toContain("wader");
    expect(AvailableWordService.ValidWords("wa??r")).toContain("waver");
    expect(AvailableWordService.ValidWords("wa??r")).toHaveLength(2);
    expect(AvailableWordService.ValidWords("w?v?r")).toContain("waver");
  })
})
