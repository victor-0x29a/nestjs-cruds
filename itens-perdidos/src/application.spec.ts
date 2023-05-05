import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';

describe('route objects lossings', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('GET /objetos', async () => {
    const R = await request(app.getHttpServer()).get('/objetos');
    expect(R.body).toStrictEqual([]);
  });

  it('POST /objetos', async () => {
    const R = await request(app.getHttpServer())
      .post('/objetos')
      .send({
        nome: 'Colher',
        tipo: 'Artefatos',
        tags: ['cozinha', 'inofensivo'],
      });
    expect(R.statusCode).toEqual(201);
    const R2 = await request(app.getHttpServer()).get('/objetos');
    expect(R2.body.length).toBe(1);
    const R3 = await request(app.getHttpServer()).delete('/objetos/0');
    expect(R3.statusCode).toBe(200);
  });

  it('DELETE /objetos', async () => {
    const R = await request(app.getHttpServer()).delete('/objetos/0');
    expect(R.statusCode).toBe(404);
  });

  it('PATCH /objetos', async () => {
    // insert data
    const R = await request(app.getHttpServer())
      .post('/objetos')
      .send({
        nome: 'Colher',
        tipo: 'Artefatos',
        tags: ['cozinha', 'inofensivo'],
      });
    expect(R.statusCode).toEqual(201);
    // update data
    const R2 = await request(app.getHttpServer())
      .patch('/objetos')
      .send({
        id: 0,
        data: {
          nome: 'Colher 2',
          tipo: 'Artefatos',
          tags: ['cozinha', 'inofensivo'],
        },
      });
    expect(R2.statusCode).toEqual(200);
    const R3 = await request(app.getHttpServer()).get('/objetos');
    expect(R3.body[0].nome).toBe('Colher 2');
  });
  afterAll(async () => {
    await app.close();
  });
});
