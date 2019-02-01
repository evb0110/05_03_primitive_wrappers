const input = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};



const icons = (iconName) => {
  const codes = {
    Bowman: 0x1F620,
    Swordsman: 0x1F61B, // temp value, to be changed
    Magician: 0x1F9D0,
    Daemon: 0x1F47F,
    Undead: 0x1F480,
    Zombie: 0x1F9DF,
    swords: 0x2694,
    shield: 0x1F6E1,
    heart: 0x2764,
  }

  const icons = Object.entries(codes).reduce((acc, [key, value]) =>  (
    { ...acc, [key]: String.fromCodePoint(value)}
  ), {});

  return icons[iconName];
}


const makeDescription = ({ type, name, level, attack, defence, health }) => {
  const typeIcon = icons(type);
  const [ swords, shield, heart ] = [ 'swords', 'shield', 'heart' ].map(item => icons(item));
  const nameLetter = name[0];
  return `${typeIcon} ${nameLetter}(${level}) ${swords}${attack} ${shield}${defence} ${heart}${health}`
}

export default makeDescription;