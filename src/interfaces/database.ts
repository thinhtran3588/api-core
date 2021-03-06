import type {Executor, RxExtendedPoolClient} from '@tqt/pg-extensions';

export type Database = Executor & {
  /** Execute transaction.
   * Follow https://node-postgres.com/features/transactions
   */
  executeTransaction: (transaction: (client: RxExtendedPoolClient) => Promise<void>) => Promise<void>;
};
