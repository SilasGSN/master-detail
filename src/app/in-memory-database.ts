import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import ('rxjs').Observable<{}> | Promise<{}> {
    const categories = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
      { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
      { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    return {categories};
  }


}
