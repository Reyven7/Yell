
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model MoodBoardItem
 * 
 */
export type MoodBoardItem = $Result.DefaultSelection<Prisma.$MoodBoardItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ScenarioStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type ScenarioStatus = (typeof ScenarioStatus)[keyof typeof ScenarioStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ScenarioStatus = $Enums.ScenarioStatus

export const ScenarioStatus: typeof $Enums.ScenarioStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodBoardItem`: Exposes CRUD operations for the **MoodBoardItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodBoardItems
    * const moodBoardItems = await prisma.moodBoardItem.findMany()
    * ```
    */
  get moodBoardItem(): Prisma.MoodBoardItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Scenario: 'Scenario',
    MoodBoardItem: 'MoodBoardItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "scenario" | "moodBoardItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      MoodBoardItem: {
        payload: Prisma.$MoodBoardItemPayload<ExtArgs>
        fields: Prisma.MoodBoardItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodBoardItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodBoardItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          findFirst: {
            args: Prisma.MoodBoardItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodBoardItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          findMany: {
            args: Prisma.MoodBoardItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>[]
          }
          create: {
            args: Prisma.MoodBoardItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          createMany: {
            args: Prisma.MoodBoardItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodBoardItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>[]
          }
          delete: {
            args: Prisma.MoodBoardItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          update: {
            args: Prisma.MoodBoardItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          deleteMany: {
            args: Prisma.MoodBoardItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodBoardItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodBoardItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>[]
          }
          upsert: {
            args: Prisma.MoodBoardItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardItemPayload>
          }
          aggregate: {
            args: Prisma.MoodBoardItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodBoardItem>
          }
          groupBy: {
            args: Prisma.MoodBoardItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodBoardItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodBoardItemCountArgs<ExtArgs>
            result: $Utils.Optional<MoodBoardItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    scenario?: ScenarioOmit
    moodBoardItem?: MoodBoardItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scenarios: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenarios?: boolean | UserCountOutputTypeCountScenariosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
  }


  /**
   * Count Type ScenarioCountOutputType
   */

  export type ScenarioCountOutputType = {
    moodBoard: number
  }

  export type ScenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodBoard?: boolean | ScenarioCountOutputTypeCountMoodBoardArgs
  }

  // Custom InputTypes
  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioCountOutputType
     */
    select?: ScenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountMoodBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodBoardItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    avatar: string | null
    refreshToken: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    avatar: string | null
    refreshToken: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    avatar: number
    refreshToken: number
    passwordHash: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    avatar?: true
    refreshToken?: true
    passwordHash?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    avatar?: true
    refreshToken?: true
    passwordHash?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    avatar?: true
    refreshToken?: true
    passwordHash?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    avatar: string | null
    refreshToken: string | null
    passwordHash: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    avatar?: boolean
    refreshToken?: boolean
    passwordHash?: boolean
    role?: boolean
    scenarios?: boolean | User$scenariosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    avatar?: boolean
    refreshToken?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    avatar?: boolean
    refreshToken?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    avatar?: boolean
    refreshToken?: boolean
    passwordHash?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "avatar" | "refreshToken" | "passwordHash" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenarios?: boolean | User$scenariosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      scenarios: Prisma.$ScenarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      avatar: string | null
      refreshToken: string | null
      passwordHash: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenarios<T extends User$scenariosArgs<ExtArgs> = {}>(args?: Subset<T, User$scenariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.scenarios
   */
  export type User$scenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    cursor?: ScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    notes: string | null
    story: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ScenarioStatus | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    notes: string | null
    story: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ScenarioStatus | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    notes: number
    story: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type ScenarioMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    notes?: true
    story?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    notes?: true
    story?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    notes?: true
    story?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    name: string
    userId: string
    notes: string | null
    story: string | null
    createdAt: Date
    updatedAt: Date
    status: $Enums.ScenarioStatus
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    notes?: boolean
    story?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    moodBoard?: boolean | Scenario$moodBoardArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    notes?: boolean
    story?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    notes?: boolean
    story?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    notes?: boolean
    story?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "notes" | "story" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    moodBoard?: boolean | Scenario$moodBoardArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      moodBoard: Prisma.$MoodBoardItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      notes: string | null
      story: string | null
      createdAt: Date
      updatedAt: Date
      status: $Enums.ScenarioStatus
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moodBoard<T extends Scenario$moodBoardArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$moodBoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly name: FieldRef<"Scenario", 'String'>
    readonly userId: FieldRef<"Scenario", 'String'>
    readonly notes: FieldRef<"Scenario", 'String'>
    readonly story: FieldRef<"Scenario", 'String'>
    readonly createdAt: FieldRef<"Scenario", 'DateTime'>
    readonly updatedAt: FieldRef<"Scenario", 'DateTime'>
    readonly status: FieldRef<"Scenario", 'ScenarioStatus'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario.moodBoard
   */
  export type Scenario$moodBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    where?: MoodBoardItemWhereInput
    orderBy?: MoodBoardItemOrderByWithRelationInput | MoodBoardItemOrderByWithRelationInput[]
    cursor?: MoodBoardItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodBoardItemScalarFieldEnum | MoodBoardItemScalarFieldEnum[]
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model MoodBoardItem
   */

  export type AggregateMoodBoardItem = {
    _count: MoodBoardItemCountAggregateOutputType | null
    _min: MoodBoardItemMinAggregateOutputType | null
    _max: MoodBoardItemMaxAggregateOutputType | null
  }

  export type MoodBoardItemMinAggregateOutputType = {
    id: string | null
    url: string | null
    scenarioId: string | null
  }

  export type MoodBoardItemMaxAggregateOutputType = {
    id: string | null
    url: string | null
    scenarioId: string | null
  }

  export type MoodBoardItemCountAggregateOutputType = {
    id: number
    url: number
    scenarioId: number
    _all: number
  }


  export type MoodBoardItemMinAggregateInputType = {
    id?: true
    url?: true
    scenarioId?: true
  }

  export type MoodBoardItemMaxAggregateInputType = {
    id?: true
    url?: true
    scenarioId?: true
  }

  export type MoodBoardItemCountAggregateInputType = {
    id?: true
    url?: true
    scenarioId?: true
    _all?: true
  }

  export type MoodBoardItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodBoardItem to aggregate.
     */
    where?: MoodBoardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoardItems to fetch.
     */
    orderBy?: MoodBoardItemOrderByWithRelationInput | MoodBoardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodBoardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodBoardItems
    **/
    _count?: true | MoodBoardItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodBoardItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodBoardItemMaxAggregateInputType
  }

  export type GetMoodBoardItemAggregateType<T extends MoodBoardItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodBoardItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodBoardItem[P]>
      : GetScalarType<T[P], AggregateMoodBoardItem[P]>
  }




  export type MoodBoardItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodBoardItemWhereInput
    orderBy?: MoodBoardItemOrderByWithAggregationInput | MoodBoardItemOrderByWithAggregationInput[]
    by: MoodBoardItemScalarFieldEnum[] | MoodBoardItemScalarFieldEnum
    having?: MoodBoardItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodBoardItemCountAggregateInputType | true
    _min?: MoodBoardItemMinAggregateInputType
    _max?: MoodBoardItemMaxAggregateInputType
  }

  export type MoodBoardItemGroupByOutputType = {
    id: string
    url: string
    scenarioId: string
    _count: MoodBoardItemCountAggregateOutputType | null
    _min: MoodBoardItemMinAggregateOutputType | null
    _max: MoodBoardItemMaxAggregateOutputType | null
  }

  type GetMoodBoardItemGroupByPayload<T extends MoodBoardItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodBoardItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodBoardItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodBoardItemGroupByOutputType[P]>
            : GetScalarType<T[P], MoodBoardItemGroupByOutputType[P]>
        }
      >
    >


  export type MoodBoardItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scenarioId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoardItem"]>

  export type MoodBoardItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scenarioId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoardItem"]>

  export type MoodBoardItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scenarioId?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoardItem"]>

  export type MoodBoardItemSelectScalar = {
    id?: boolean
    url?: boolean
    scenarioId?: boolean
  }

  export type MoodBoardItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "scenarioId", ExtArgs["result"]["moodBoardItem"]>
  export type MoodBoardItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type MoodBoardItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type MoodBoardItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }

  export type $MoodBoardItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodBoardItem"
    objects: {
      scenario: Prisma.$ScenarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      scenarioId: string
    }, ExtArgs["result"]["moodBoardItem"]>
    composites: {}
  }

  type MoodBoardItemGetPayload<S extends boolean | null | undefined | MoodBoardItemDefaultArgs> = $Result.GetResult<Prisma.$MoodBoardItemPayload, S>

  type MoodBoardItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodBoardItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodBoardItemCountAggregateInputType | true
    }

  export interface MoodBoardItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodBoardItem'], meta: { name: 'MoodBoardItem' } }
    /**
     * Find zero or one MoodBoardItem that matches the filter.
     * @param {MoodBoardItemFindUniqueArgs} args - Arguments to find a MoodBoardItem
     * @example
     * // Get one MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodBoardItemFindUniqueArgs>(args: SelectSubset<T, MoodBoardItemFindUniqueArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodBoardItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodBoardItemFindUniqueOrThrowArgs} args - Arguments to find a MoodBoardItem
     * @example
     * // Get one MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodBoardItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodBoardItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodBoardItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemFindFirstArgs} args - Arguments to find a MoodBoardItem
     * @example
     * // Get one MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodBoardItemFindFirstArgs>(args?: SelectSubset<T, MoodBoardItemFindFirstArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodBoardItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemFindFirstOrThrowArgs} args - Arguments to find a MoodBoardItem
     * @example
     * // Get one MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodBoardItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodBoardItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodBoardItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodBoardItems
     * const moodBoardItems = await prisma.moodBoardItem.findMany()
     * 
     * // Get first 10 MoodBoardItems
     * const moodBoardItems = await prisma.moodBoardItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodBoardItemWithIdOnly = await prisma.moodBoardItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodBoardItemFindManyArgs>(args?: SelectSubset<T, MoodBoardItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodBoardItem.
     * @param {MoodBoardItemCreateArgs} args - Arguments to create a MoodBoardItem.
     * @example
     * // Create one MoodBoardItem
     * const MoodBoardItem = await prisma.moodBoardItem.create({
     *   data: {
     *     // ... data to create a MoodBoardItem
     *   }
     * })
     * 
     */
    create<T extends MoodBoardItemCreateArgs>(args: SelectSubset<T, MoodBoardItemCreateArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodBoardItems.
     * @param {MoodBoardItemCreateManyArgs} args - Arguments to create many MoodBoardItems.
     * @example
     * // Create many MoodBoardItems
     * const moodBoardItem = await prisma.moodBoardItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodBoardItemCreateManyArgs>(args?: SelectSubset<T, MoodBoardItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodBoardItems and returns the data saved in the database.
     * @param {MoodBoardItemCreateManyAndReturnArgs} args - Arguments to create many MoodBoardItems.
     * @example
     * // Create many MoodBoardItems
     * const moodBoardItem = await prisma.moodBoardItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodBoardItems and only return the `id`
     * const moodBoardItemWithIdOnly = await prisma.moodBoardItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodBoardItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodBoardItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodBoardItem.
     * @param {MoodBoardItemDeleteArgs} args - Arguments to delete one MoodBoardItem.
     * @example
     * // Delete one MoodBoardItem
     * const MoodBoardItem = await prisma.moodBoardItem.delete({
     *   where: {
     *     // ... filter to delete one MoodBoardItem
     *   }
     * })
     * 
     */
    delete<T extends MoodBoardItemDeleteArgs>(args: SelectSubset<T, MoodBoardItemDeleteArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodBoardItem.
     * @param {MoodBoardItemUpdateArgs} args - Arguments to update one MoodBoardItem.
     * @example
     * // Update one MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodBoardItemUpdateArgs>(args: SelectSubset<T, MoodBoardItemUpdateArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodBoardItems.
     * @param {MoodBoardItemDeleteManyArgs} args - Arguments to filter MoodBoardItems to delete.
     * @example
     * // Delete a few MoodBoardItems
     * const { count } = await prisma.moodBoardItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodBoardItemDeleteManyArgs>(args?: SelectSubset<T, MoodBoardItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodBoardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodBoardItems
     * const moodBoardItem = await prisma.moodBoardItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodBoardItemUpdateManyArgs>(args: SelectSubset<T, MoodBoardItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodBoardItems and returns the data updated in the database.
     * @param {MoodBoardItemUpdateManyAndReturnArgs} args - Arguments to update many MoodBoardItems.
     * @example
     * // Update many MoodBoardItems
     * const moodBoardItem = await prisma.moodBoardItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodBoardItems and only return the `id`
     * const moodBoardItemWithIdOnly = await prisma.moodBoardItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodBoardItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodBoardItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodBoardItem.
     * @param {MoodBoardItemUpsertArgs} args - Arguments to update or create a MoodBoardItem.
     * @example
     * // Update or create a MoodBoardItem
     * const moodBoardItem = await prisma.moodBoardItem.upsert({
     *   create: {
     *     // ... data to create a MoodBoardItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodBoardItem we want to update
     *   }
     * })
     */
    upsert<T extends MoodBoardItemUpsertArgs>(args: SelectSubset<T, MoodBoardItemUpsertArgs<ExtArgs>>): Prisma__MoodBoardItemClient<$Result.GetResult<Prisma.$MoodBoardItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodBoardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemCountArgs} args - Arguments to filter MoodBoardItems to count.
     * @example
     * // Count the number of MoodBoardItems
     * const count = await prisma.moodBoardItem.count({
     *   where: {
     *     // ... the filter for the MoodBoardItems we want to count
     *   }
     * })
    **/
    count<T extends MoodBoardItemCountArgs>(
      args?: Subset<T, MoodBoardItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodBoardItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodBoardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodBoardItemAggregateArgs>(args: Subset<T, MoodBoardItemAggregateArgs>): Prisma.PrismaPromise<GetMoodBoardItemAggregateType<T>>

    /**
     * Group by MoodBoardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodBoardItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodBoardItemGroupByArgs['orderBy'] }
        : { orderBy?: MoodBoardItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodBoardItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodBoardItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodBoardItem model
   */
  readonly fields: MoodBoardItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodBoardItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodBoardItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodBoardItem model
   */
  interface MoodBoardItemFieldRefs {
    readonly id: FieldRef<"MoodBoardItem", 'String'>
    readonly url: FieldRef<"MoodBoardItem", 'String'>
    readonly scenarioId: FieldRef<"MoodBoardItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MoodBoardItem findUnique
   */
  export type MoodBoardItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoardItem to fetch.
     */
    where: MoodBoardItemWhereUniqueInput
  }

  /**
   * MoodBoardItem findUniqueOrThrow
   */
  export type MoodBoardItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoardItem to fetch.
     */
    where: MoodBoardItemWhereUniqueInput
  }

  /**
   * MoodBoardItem findFirst
   */
  export type MoodBoardItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoardItem to fetch.
     */
    where?: MoodBoardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoardItems to fetch.
     */
    orderBy?: MoodBoardItemOrderByWithRelationInput | MoodBoardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodBoardItems.
     */
    cursor?: MoodBoardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodBoardItems.
     */
    distinct?: MoodBoardItemScalarFieldEnum | MoodBoardItemScalarFieldEnum[]
  }

  /**
   * MoodBoardItem findFirstOrThrow
   */
  export type MoodBoardItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoardItem to fetch.
     */
    where?: MoodBoardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoardItems to fetch.
     */
    orderBy?: MoodBoardItemOrderByWithRelationInput | MoodBoardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodBoardItems.
     */
    cursor?: MoodBoardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodBoardItems.
     */
    distinct?: MoodBoardItemScalarFieldEnum | MoodBoardItemScalarFieldEnum[]
  }

  /**
   * MoodBoardItem findMany
   */
  export type MoodBoardItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoardItems to fetch.
     */
    where?: MoodBoardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoardItems to fetch.
     */
    orderBy?: MoodBoardItemOrderByWithRelationInput | MoodBoardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodBoardItems.
     */
    cursor?: MoodBoardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoardItems.
     */
    skip?: number
    distinct?: MoodBoardItemScalarFieldEnum | MoodBoardItemScalarFieldEnum[]
  }

  /**
   * MoodBoardItem create
   */
  export type MoodBoardItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodBoardItem.
     */
    data: XOR<MoodBoardItemCreateInput, MoodBoardItemUncheckedCreateInput>
  }

  /**
   * MoodBoardItem createMany
   */
  export type MoodBoardItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodBoardItems.
     */
    data: MoodBoardItemCreateManyInput | MoodBoardItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodBoardItem createManyAndReturn
   */
  export type MoodBoardItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * The data used to create many MoodBoardItems.
     */
    data: MoodBoardItemCreateManyInput | MoodBoardItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodBoardItem update
   */
  export type MoodBoardItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodBoardItem.
     */
    data: XOR<MoodBoardItemUpdateInput, MoodBoardItemUncheckedUpdateInput>
    /**
     * Choose, which MoodBoardItem to update.
     */
    where: MoodBoardItemWhereUniqueInput
  }

  /**
   * MoodBoardItem updateMany
   */
  export type MoodBoardItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodBoardItems.
     */
    data: XOR<MoodBoardItemUpdateManyMutationInput, MoodBoardItemUncheckedUpdateManyInput>
    /**
     * Filter which MoodBoardItems to update
     */
    where?: MoodBoardItemWhereInput
    /**
     * Limit how many MoodBoardItems to update.
     */
    limit?: number
  }

  /**
   * MoodBoardItem updateManyAndReturn
   */
  export type MoodBoardItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * The data used to update MoodBoardItems.
     */
    data: XOR<MoodBoardItemUpdateManyMutationInput, MoodBoardItemUncheckedUpdateManyInput>
    /**
     * Filter which MoodBoardItems to update
     */
    where?: MoodBoardItemWhereInput
    /**
     * Limit how many MoodBoardItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodBoardItem upsert
   */
  export type MoodBoardItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodBoardItem to update in case it exists.
     */
    where: MoodBoardItemWhereUniqueInput
    /**
     * In case the MoodBoardItem found by the `where` argument doesn't exist, create a new MoodBoardItem with this data.
     */
    create: XOR<MoodBoardItemCreateInput, MoodBoardItemUncheckedCreateInput>
    /**
     * In case the MoodBoardItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodBoardItemUpdateInput, MoodBoardItemUncheckedUpdateInput>
  }

  /**
   * MoodBoardItem delete
   */
  export type MoodBoardItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
    /**
     * Filter which MoodBoardItem to delete.
     */
    where: MoodBoardItemWhereUniqueInput
  }

  /**
   * MoodBoardItem deleteMany
   */
  export type MoodBoardItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodBoardItems to delete
     */
    where?: MoodBoardItemWhereInput
    /**
     * Limit how many MoodBoardItems to delete.
     */
    limit?: number
  }

  /**
   * MoodBoardItem without action
   */
  export type MoodBoardItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardItem
     */
    select?: MoodBoardItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoardItem
     */
    omit?: MoodBoardItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    avatar: 'avatar',
    refreshToken: 'refreshToken',
    passwordHash: 'passwordHash',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    notes: 'notes',
    story: 'story',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const MoodBoardItemScalarFieldEnum: {
    id: 'id',
    url: 'url',
    scenarioId: 'scenarioId'
  };

  export type MoodBoardItemScalarFieldEnum = (typeof MoodBoardItemScalarFieldEnum)[keyof typeof MoodBoardItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ScenarioStatus'
   */
  export type EnumScenarioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioStatus'>
    


  /**
   * Reference to a field of type 'ScenarioStatus[]'
   */
  export type ListEnumScenarioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    scenarios?: ScenarioListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    scenarios?: ScenarioOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    scenarios?: ScenarioListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    userId?: StringFilter<"Scenario"> | string
    notes?: StringNullableFilter<"Scenario"> | string | null
    story?: StringNullableFilter<"Scenario"> | string | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    status?: EnumScenarioStatusFilter<"Scenario"> | $Enums.ScenarioStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    moodBoard?: MoodBoardItemListRelationFilter
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    notes?: SortOrderInput | SortOrder
    story?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    moodBoard?: MoodBoardItemOrderByRelationAggregateInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    name?: StringFilter<"Scenario"> | string
    userId?: StringFilter<"Scenario"> | string
    notes?: StringNullableFilter<"Scenario"> | string | null
    story?: StringNullableFilter<"Scenario"> | string | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    status?: EnumScenarioStatusFilter<"Scenario"> | $Enums.ScenarioStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    moodBoard?: MoodBoardItemListRelationFilter
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    notes?: SortOrderInput | SortOrder
    story?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    name?: StringWithAggregatesFilter<"Scenario"> | string
    userId?: StringWithAggregatesFilter<"Scenario"> | string
    notes?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
    story?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    status?: EnumScenarioStatusWithAggregatesFilter<"Scenario"> | $Enums.ScenarioStatus
  }

  export type MoodBoardItemWhereInput = {
    AND?: MoodBoardItemWhereInput | MoodBoardItemWhereInput[]
    OR?: MoodBoardItemWhereInput[]
    NOT?: MoodBoardItemWhereInput | MoodBoardItemWhereInput[]
    id?: StringFilter<"MoodBoardItem"> | string
    url?: StringFilter<"MoodBoardItem"> | string
    scenarioId?: StringFilter<"MoodBoardItem"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }

  export type MoodBoardItemOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    scenarioId?: SortOrder
    scenario?: ScenarioOrderByWithRelationInput
  }

  export type MoodBoardItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodBoardItemWhereInput | MoodBoardItemWhereInput[]
    OR?: MoodBoardItemWhereInput[]
    NOT?: MoodBoardItemWhereInput | MoodBoardItemWhereInput[]
    url?: StringFilter<"MoodBoardItem"> | string
    scenarioId?: StringFilter<"MoodBoardItem"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
  }, "id">

  export type MoodBoardItemOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    scenarioId?: SortOrder
    _count?: MoodBoardItemCountOrderByAggregateInput
    _max?: MoodBoardItemMaxOrderByAggregateInput
    _min?: MoodBoardItemMinOrderByAggregateInput
  }

  export type MoodBoardItemScalarWhereWithAggregatesInput = {
    AND?: MoodBoardItemScalarWhereWithAggregatesInput | MoodBoardItemScalarWhereWithAggregatesInput[]
    OR?: MoodBoardItemScalarWhereWithAggregatesInput[]
    NOT?: MoodBoardItemScalarWhereWithAggregatesInput | MoodBoardItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodBoardItem"> | string
    url?: StringWithAggregatesFilter<"MoodBoardItem"> | string
    scenarioId?: StringWithAggregatesFilter<"MoodBoardItem"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    avatar?: string | null
    refreshToken?: string | null
    passwordHash: string
    role?: $Enums.Role
    scenarios?: ScenarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    avatar?: string | null
    refreshToken?: string | null
    passwordHash: string
    role?: $Enums.Role
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    scenarios?: ScenarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    scenarios?: ScenarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    avatar?: string | null
    refreshToken?: string | null
    passwordHash: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ScenarioCreateInput = {
    id?: string
    name: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
    user: UserCreateNestedOneWithoutScenariosInput
    moodBoard?: MoodBoardItemCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
    user?: UserUpdateOneRequiredWithoutScenariosNestedInput
    moodBoard?: MoodBoardItemUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioCreateManyInput = {
    id?: string
    name: string
    userId: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
  }

  export type MoodBoardItemCreateInput = {
    id?: string
    url: string
    scenario: ScenarioCreateNestedOneWithoutMoodBoardInput
  }

  export type MoodBoardItemUncheckedCreateInput = {
    id?: string
    url: string
    scenarioId: string
  }

  export type MoodBoardItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutMoodBoardNestedInput
  }

  export type MoodBoardItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodBoardItemCreateManyInput = {
    id?: string
    url: string
    scenarioId: string
  }

  export type MoodBoardItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MoodBoardItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ScenarioListRelationFilter = {
    every?: ScenarioWhereInput
    some?: ScenarioWhereInput
    none?: ScenarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    refreshToken?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    refreshToken?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    refreshToken?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumScenarioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioStatus | EnumScenarioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioStatusFilter<$PrismaModel> | $Enums.ScenarioStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MoodBoardItemListRelationFilter = {
    every?: MoodBoardItemWhereInput
    some?: MoodBoardItemWhereInput
    none?: MoodBoardItemWhereInput
  }

  export type MoodBoardItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    notes?: SortOrder
    story?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    notes?: SortOrder
    story?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    notes?: SortOrder
    story?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumScenarioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioStatus | EnumScenarioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioStatusFilter<$PrismaModel>
    _max?: NestedEnumScenarioStatusFilter<$PrismaModel>
  }

  export type ScenarioScalarRelationFilter = {
    is?: ScenarioWhereInput
    isNot?: ScenarioWhereInput
  }

  export type MoodBoardItemCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scenarioId?: SortOrder
  }

  export type MoodBoardItemMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scenarioId?: SortOrder
  }

  export type MoodBoardItemMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scenarioId?: SortOrder
  }

  export type ScenarioCreateNestedManyWithoutUserInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type ScenarioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ScenarioUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutUserInput | ScenarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutUserInput | ScenarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutUserInput | ScenarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type ScenarioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutUserInput | ScenarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutUserInput | ScenarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutUserInput | ScenarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutScenariosInput = {
    create?: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenariosInput
    connect?: UserWhereUniqueInput
  }

  export type MoodBoardItemCreateNestedManyWithoutScenarioInput = {
    create?: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput> | MoodBoardItemCreateWithoutScenarioInput[] | MoodBoardItemUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: MoodBoardItemCreateOrConnectWithoutScenarioInput | MoodBoardItemCreateOrConnectWithoutScenarioInput[]
    createMany?: MoodBoardItemCreateManyScenarioInputEnvelope
    connect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
  }

  export type MoodBoardItemUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput> | MoodBoardItemCreateWithoutScenarioInput[] | MoodBoardItemUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: MoodBoardItemCreateOrConnectWithoutScenarioInput | MoodBoardItemCreateOrConnectWithoutScenarioInput[]
    createMany?: MoodBoardItemCreateManyScenarioInputEnvelope
    connect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumScenarioStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScenarioStatus
  }

  export type UserUpdateOneRequiredWithoutScenariosNestedInput = {
    create?: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenariosInput
    upsert?: UserUpsertWithoutScenariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScenariosInput, UserUpdateWithoutScenariosInput>, UserUncheckedUpdateWithoutScenariosInput>
  }

  export type MoodBoardItemUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput> | MoodBoardItemCreateWithoutScenarioInput[] | MoodBoardItemUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: MoodBoardItemCreateOrConnectWithoutScenarioInput | MoodBoardItemCreateOrConnectWithoutScenarioInput[]
    upsert?: MoodBoardItemUpsertWithWhereUniqueWithoutScenarioInput | MoodBoardItemUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: MoodBoardItemCreateManyScenarioInputEnvelope
    set?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    disconnect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    delete?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    connect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    update?: MoodBoardItemUpdateWithWhereUniqueWithoutScenarioInput | MoodBoardItemUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: MoodBoardItemUpdateManyWithWhereWithoutScenarioInput | MoodBoardItemUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: MoodBoardItemScalarWhereInput | MoodBoardItemScalarWhereInput[]
  }

  export type MoodBoardItemUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput> | MoodBoardItemCreateWithoutScenarioInput[] | MoodBoardItemUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: MoodBoardItemCreateOrConnectWithoutScenarioInput | MoodBoardItemCreateOrConnectWithoutScenarioInput[]
    upsert?: MoodBoardItemUpsertWithWhereUniqueWithoutScenarioInput | MoodBoardItemUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: MoodBoardItemCreateManyScenarioInputEnvelope
    set?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    disconnect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    delete?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    connect?: MoodBoardItemWhereUniqueInput | MoodBoardItemWhereUniqueInput[]
    update?: MoodBoardItemUpdateWithWhereUniqueWithoutScenarioInput | MoodBoardItemUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: MoodBoardItemUpdateManyWithWhereWithoutScenarioInput | MoodBoardItemUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: MoodBoardItemScalarWhereInput | MoodBoardItemScalarWhereInput[]
  }

  export type ScenarioCreateNestedOneWithoutMoodBoardInput = {
    create?: XOR<ScenarioCreateWithoutMoodBoardInput, ScenarioUncheckedCreateWithoutMoodBoardInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutMoodBoardInput
    connect?: ScenarioWhereUniqueInput
  }

  export type ScenarioUpdateOneRequiredWithoutMoodBoardNestedInput = {
    create?: XOR<ScenarioCreateWithoutMoodBoardInput, ScenarioUncheckedCreateWithoutMoodBoardInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutMoodBoardInput
    upsert?: ScenarioUpsertWithoutMoodBoardInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutMoodBoardInput, ScenarioUpdateWithoutMoodBoardInput>, ScenarioUncheckedUpdateWithoutMoodBoardInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumScenarioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioStatus | EnumScenarioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioStatusFilter<$PrismaModel> | $Enums.ScenarioStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumScenarioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioStatus | EnumScenarioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioStatus[] | ListEnumScenarioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioStatusFilter<$PrismaModel>
    _max?: NestedEnumScenarioStatusFilter<$PrismaModel>
  }

  export type ScenarioCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput>
  }

  export type ScenarioCreateManyUserInputEnvelope = {
    data: ScenarioCreateManyUserInput | ScenarioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioUpsertWithWhereUniqueWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    update: XOR<ScenarioUpdateWithoutUserInput, ScenarioUncheckedUpdateWithoutUserInput>
    create: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput>
  }

  export type ScenarioUpdateWithWhereUniqueWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    data: XOR<ScenarioUpdateWithoutUserInput, ScenarioUncheckedUpdateWithoutUserInput>
  }

  export type ScenarioUpdateManyWithWhereWithoutUserInput = {
    where: ScenarioScalarWhereInput
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyWithoutUserInput>
  }

  export type ScenarioScalarWhereInput = {
    AND?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    OR?: ScenarioScalarWhereInput[]
    NOT?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    id?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    userId?: StringFilter<"Scenario"> | string
    notes?: StringNullableFilter<"Scenario"> | string | null
    story?: StringNullableFilter<"Scenario"> | string | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    status?: EnumScenarioStatusFilter<"Scenario"> | $Enums.ScenarioStatus
  }

  export type UserCreateWithoutScenariosInput = {
    id?: string
    email: string
    username: string
    avatar?: string | null
    refreshToken?: string | null
    passwordHash: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutScenariosInput = {
    id?: string
    email: string
    username: string
    avatar?: string | null
    refreshToken?: string | null
    passwordHash: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutScenariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
  }

  export type MoodBoardItemCreateWithoutScenarioInput = {
    id?: string
    url: string
  }

  export type MoodBoardItemUncheckedCreateWithoutScenarioInput = {
    id?: string
    url: string
  }

  export type MoodBoardItemCreateOrConnectWithoutScenarioInput = {
    where: MoodBoardItemWhereUniqueInput
    create: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput>
  }

  export type MoodBoardItemCreateManyScenarioInputEnvelope = {
    data: MoodBoardItemCreateManyScenarioInput | MoodBoardItemCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutScenariosInput = {
    update: XOR<UserUpdateWithoutScenariosInput, UserUncheckedUpdateWithoutScenariosInput>
    create: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScenariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScenariosInput, UserUncheckedUpdateWithoutScenariosInput>
  }

  export type UserUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MoodBoardItemUpsertWithWhereUniqueWithoutScenarioInput = {
    where: MoodBoardItemWhereUniqueInput
    update: XOR<MoodBoardItemUpdateWithoutScenarioInput, MoodBoardItemUncheckedUpdateWithoutScenarioInput>
    create: XOR<MoodBoardItemCreateWithoutScenarioInput, MoodBoardItemUncheckedCreateWithoutScenarioInput>
  }

  export type MoodBoardItemUpdateWithWhereUniqueWithoutScenarioInput = {
    where: MoodBoardItemWhereUniqueInput
    data: XOR<MoodBoardItemUpdateWithoutScenarioInput, MoodBoardItemUncheckedUpdateWithoutScenarioInput>
  }

  export type MoodBoardItemUpdateManyWithWhereWithoutScenarioInput = {
    where: MoodBoardItemScalarWhereInput
    data: XOR<MoodBoardItemUpdateManyMutationInput, MoodBoardItemUncheckedUpdateManyWithoutScenarioInput>
  }

  export type MoodBoardItemScalarWhereInput = {
    AND?: MoodBoardItemScalarWhereInput | MoodBoardItemScalarWhereInput[]
    OR?: MoodBoardItemScalarWhereInput[]
    NOT?: MoodBoardItemScalarWhereInput | MoodBoardItemScalarWhereInput[]
    id?: StringFilter<"MoodBoardItem"> | string
    url?: StringFilter<"MoodBoardItem"> | string
    scenarioId?: StringFilter<"MoodBoardItem"> | string
  }

  export type ScenarioCreateWithoutMoodBoardInput = {
    id?: string
    name: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
    user: UserCreateNestedOneWithoutScenariosInput
  }

  export type ScenarioUncheckedCreateWithoutMoodBoardInput = {
    id?: string
    name: string
    userId: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
  }

  export type ScenarioCreateOrConnectWithoutMoodBoardInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutMoodBoardInput, ScenarioUncheckedCreateWithoutMoodBoardInput>
  }

  export type ScenarioUpsertWithoutMoodBoardInput = {
    update: XOR<ScenarioUpdateWithoutMoodBoardInput, ScenarioUncheckedUpdateWithoutMoodBoardInput>
    create: XOR<ScenarioCreateWithoutMoodBoardInput, ScenarioUncheckedCreateWithoutMoodBoardInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutMoodBoardInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutMoodBoardInput, ScenarioUncheckedUpdateWithoutMoodBoardInput>
  }

  export type ScenarioUpdateWithoutMoodBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
    user?: UserUpdateOneRequiredWithoutScenariosNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutMoodBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
  }

  export type ScenarioCreateManyUserInput = {
    id?: string
    name: string
    notes?: string | null
    story?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ScenarioStatus
  }

  export type ScenarioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
    moodBoard?: MoodBoardItemUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    story?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScenarioStatusFieldUpdateOperationsInput | $Enums.ScenarioStatus
  }

  export type MoodBoardItemCreateManyScenarioInput = {
    id?: string
    url: string
  }

  export type MoodBoardItemUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MoodBoardItemUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MoodBoardItemUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}