const names = ['Jéssica', 'Javier', 'Fran', 'Eva', 'Sergio', 'Javi', 'Carmen'];

const randomName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  console.log(name);
};

module.exports = {randomName};
