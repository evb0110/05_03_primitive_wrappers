import makeDescription from './description';

test('testing data from assignment', () => {
  const input = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const expected = '😠 Л(1) ⚔40 🛡10 ❤50';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});

test('testing data for Swordsman', () => {
  const input = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 5,
    level: 10,
    attack: 45,
    defence: 17,
  };

  const expected = '😛 М(10) ⚔45 🛡17 ❤5';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});

test('testing data for Magician', () => {
  const input = {
    name: 'Маг',
    type: 'Magician',
    health: 50,
    level: 20,
    attack: 55,
    defence: 27,
  };

  const expected = '🧐 М(20) ⚔55 🛡27 ❤50';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});

test('testing data for Daemon', () => {
  const input = {
    name: 'Демон',
    type: 'Daemon',
    health: 10,
    level: 22,
    attack: 35,
    defence: 24,
  };

  const expected = '👿 Д(22) ⚔35 🛡24 ❤10';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});

test('testing data for Zombie', () => {
  const input = {
    name: 'Зомби',
    type: 'Zombie',
    health: 3,
    level: 42,
    attack: 37,
    defence: 14,
  };

  const expected = '🧟 З(42) ⚔37 🛡14 ❤3';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});

test('testing data for Undead', () => {
  const input = {
    name: 'Вампир',
    type: 'Undead',
    health: 10,
    level: 22,
    attack: 35,
    defence: 24,
  };

  const expected = '💀 В(22) ⚔35 🛡24 ❤10';
  const result = makeDescription(input);

  expect(result).toBe(expected);
});
