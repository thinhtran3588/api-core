import {config, updateConfig} from '@lib/config';

describe('config', () => {
  it('uses the default config', () => {
    expect(config()).toMatchInlineSnapshot(`
      Object {
        "APP_NAME": "API",
        "BUILD": "1",
        "DEFAULT_ITEMS_PER_REQUEST": 10,
        "MAX_ITEMS_PER_REQUEST": 50,
        "VERSION": "0.1.0",
      }
    `);
  });

  it('updates config correctly', () => {
    updateConfig({
      APP_NAME: 'Updated',
      VERSION: '0.2.0',
      BUILD: '20',
    });
    expect(config()).toMatchInlineSnapshot(`
      Object {
        "APP_NAME": "Updated",
        "BUILD": "20",
        "DEFAULT_ITEMS_PER_REQUEST": 10,
        "MAX_ITEMS_PER_REQUEST": 50,
        "VERSION": "0.2.0",
      }
    `);
  });
});

export {};
