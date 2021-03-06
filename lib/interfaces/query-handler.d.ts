import type { Context } from './context';
import type { Query } from './query';
export declare type QueryHandler<Q extends Query = Query> = (query: Q, context: Context) => Promise<any>;
