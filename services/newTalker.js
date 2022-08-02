const fs = require('fs');

const newTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  const talker = {
    id: result.length + 1,
    name,
    age,
    talk,
  };
  fs.writeFileSync('./talker.json', JSON.stringify([...result, talker]));
  return res.status(201).json(talker);
};

module.exports = newTalker;