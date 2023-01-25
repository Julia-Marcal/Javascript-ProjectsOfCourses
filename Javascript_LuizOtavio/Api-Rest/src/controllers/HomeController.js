import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Geovana',
      sobrenome: 'Farias',
      email: 'gg@gmail.com',
      idade: '16',
      peso: '55',
      altura: '1.63',
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
