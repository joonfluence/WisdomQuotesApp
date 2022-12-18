import { Test, TestingModule } from '@nestjs/testing';
import { Author } from './Author.provider';

describe('Author', () => {
  let provider: Author;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Author],
    }).compile();

    provider = module.get<Author>(Author);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
