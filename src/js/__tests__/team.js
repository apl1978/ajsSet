import Character from '../character';
import Team from '../team';

test('add once character', () => {
  const character1 = new Character();
  const team = new Team();
  team.add(character1);

  const result = new Set();
  result.add(character1);

  expect(team.members).toEqual(result);
});

test('add one character twice', () => {
  const character1 = new Character();
  const team = new Team();
  team.add(character1);

  expect(() => team.add(character1).toThrow("Персонаж уже в команде"))
});

test('add all characters', () => {
  const character1 = new Character();
  const team = new Team();
  const character2 = new Character();
  const character3 = new Character();
  team.addAll(character1, character2, character3, character1, character2);

  const result = new Set();
  result.add(character1);
  result.add(character2);
  result.add(character3);

  expect(team.members).toEqual(result);
});

test('test toArray method', () => {
  const character1 = new Character();
  const team = new Team();
  team.add(character1);

  const result = [character1];

  expect(team.toArray()).toEqual(result);
})

