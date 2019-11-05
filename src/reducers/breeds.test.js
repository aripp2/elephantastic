import { breeds } from './breeds';

describe('breeds', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = breeds(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state when SET_BREEDS is the type', () => {
    const mockBreeds = [
      {
        bred_for: "Sled pulling",
        breed_group: "Mixed",
        height: {imperial: "23 - 26", metric: "58 - 66"},
        id: 8,
        life_span: "10 - 13 years",
        name: "Alaskan Husky",
        temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
        weight: {imperial: "38 - 50", metric: "17 - 23"}
      },
      {
        bred_for: "Hauling heavy freight, Sled pulling",
        breed_group: "Working",
        height: {imperial: "23 - 25", metric: "58 - 64"},
        id: 9,
        life_span: "12 - 15 years",
        name: "Alaskan Malamute",
        temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
        weight: {imperial: "65 - 100", metric: "29 - 45"}
      }];
      const mockAction = {
        type: 'SET_BREEDS',
        breeds: mockBreeds
      };
      const result = breeds(mockBreeds, mockAction);
      expect(result).toEqual(mockBreeds);
  });

});