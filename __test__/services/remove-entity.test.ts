import {removeEntity} from '@lib';

describe('removeEntity', () => {
  it('removes entity successfully', (done) => {
    const id = 'c995e7d7-117a-417a-b767-aa59c50e1e0b';
    const repository = {
      getById: jest.fn().mockReturnValue(
        Promise.resolve({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        }),
      ),
      remove: jest.fn().mockReturnValue(Promise.resolve({})),
    };

    removeEntity({
      id,
      repository,
    }).then(() => {
      expect(repository.getById).toHaveBeenCalledWith({
        id,
        fields: {
          createdBy: {},
          id: {},
        },
      });
      expect(repository.remove).toHaveBeenCalledWith(id);
      done();
    });
  });

  it('removes entity with permission validation', (done) => {
    const id = 'c995e7d7-117a-417a-b767-aa59c50e1e0b';
    const repository = {
      getById: jest.fn().mockReturnValue(
        Promise.resolve({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        }),
      ),
      remove: jest.fn().mockReturnValue(Promise.resolve({})),
    };
    const validatePermissions = jest.fn().mockReturnValue(
      Promise.resolve({
        id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
        createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
      }),
    );

    removeEntity({
      id,
      repository,
      validatePermissions,
    }).then(() => {
      expect(repository.getById).toHaveBeenCalledWith({
        id,
        fields: {
          createdBy: {},
          id: {},
        },
      });
      expect(validatePermissions).toHaveBeenCalledWith({
        id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
        createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
      });
      expect(repository.remove).toHaveBeenCalledWith(id);
      done();
    });
  });
});

export {};
