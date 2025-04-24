
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
 * Model Pets
 * 
 */
export type Pets = $Result.DefaultSelection<Prisma.$PetsPayload>
/**
 * Model FoodTime
 * 
 */
export type FoodTime = $Result.DefaultSelection<Prisma.$FoodTimePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPets
 * 
 */
export type UserPets = $Result.DefaultSelection<Prisma.$UserPetsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pets
 * const pets = await prisma.pets.findMany()
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
   * // Fetch zero or more Pets
   * const pets = await prisma.pets.findMany()
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
   * `prisma.pets`: Exposes CRUD operations for the **Pets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pets.findMany()
    * ```
    */
  get pets(): Prisma.PetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodTime`: Exposes CRUD operations for the **FoodTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodTimes
    * const foodTimes = await prisma.foodTime.findMany()
    * ```
    */
  get foodTime(): Prisma.FoodTimeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userPets`: Exposes CRUD operations for the **UserPets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPets
    * const userPets = await prisma.userPets.findMany()
    * ```
    */
  get userPets(): Prisma.UserPetsDelegate<ExtArgs, ClientOptions>;
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
    Pets: 'Pets',
    FoodTime: 'FoodTime',
    User: 'User',
    UserPets: 'UserPets'
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
      modelProps: "pets" | "foodTime" | "user" | "userPets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pets: {
        payload: Prisma.$PetsPayload<ExtArgs>
        fields: Prisma.PetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          findFirst: {
            args: Prisma.PetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          findMany: {
            args: Prisma.PetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>[]
          }
          create: {
            args: Prisma.PetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          createMany: {
            args: Prisma.PetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>[]
          }
          delete: {
            args: Prisma.PetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          update: {
            args: Prisma.PetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          deleteMany: {
            args: Prisma.PetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>[]
          }
          upsert: {
            args: Prisma.PetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetsPayload>
          }
          aggregate: {
            args: Prisma.PetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePets>
          }
          groupBy: {
            args: Prisma.PetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetsCountArgs<ExtArgs>
            result: $Utils.Optional<PetsCountAggregateOutputType> | number
          }
        }
      }
      FoodTime: {
        payload: Prisma.$FoodTimePayload<ExtArgs>
        fields: Prisma.FoodTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          findFirst: {
            args: Prisma.FoodTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          findMany: {
            args: Prisma.FoodTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>[]
          }
          create: {
            args: Prisma.FoodTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          createMany: {
            args: Prisma.FoodTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>[]
          }
          delete: {
            args: Prisma.FoodTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          update: {
            args: Prisma.FoodTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          deleteMany: {
            args: Prisma.FoodTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>[]
          }
          upsert: {
            args: Prisma.FoodTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTimePayload>
          }
          aggregate: {
            args: Prisma.FoodTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodTime>
          }
          groupBy: {
            args: Prisma.FoodTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodTimeCountArgs<ExtArgs>
            result: $Utils.Optional<FoodTimeCountAggregateOutputType> | number
          }
        }
      }
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
      UserPets: {
        payload: Prisma.$UserPetsPayload<ExtArgs>
        fields: Prisma.UserPetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          findFirst: {
            args: Prisma.UserPetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          findMany: {
            args: Prisma.UserPetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>[]
          }
          create: {
            args: Prisma.UserPetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          createMany: {
            args: Prisma.UserPetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>[]
          }
          delete: {
            args: Prisma.UserPetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          update: {
            args: Prisma.UserPetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          deleteMany: {
            args: Prisma.UserPetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>[]
          }
          upsert: {
            args: Prisma.UserPetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetsPayload>
          }
          aggregate: {
            args: Prisma.UserPetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPets>
          }
          groupBy: {
            args: Prisma.UserPetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPetsCountArgs<ExtArgs>
            result: $Utils.Optional<UserPetsCountAggregateOutputType> | number
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
    pets?: PetsOmit
    foodTime?: FoodTimeOmit
    user?: UserOmit
    userPets?: UserPetsOmit
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
   * Count Type PetsCountOutputType
   */

  export type PetsCountOutputType = {
    users: number
  }

  export type PetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PetsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PetsCountOutputType without action
   */
  export type PetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetsCountOutputType
     */
    select?: PetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetsCountOutputType without action
   */
  export type PetsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | UserCountOutputTypeCountPetsArgs
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
  export type UserCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pets
   */

  export type AggregatePets = {
    _count: PetsCountAggregateOutputType | null
    _avg: PetsAvgAggregateOutputType | null
    _sum: PetsSumAggregateOutputType | null
    _min: PetsMinAggregateOutputType | null
    _max: PetsMaxAggregateOutputType | null
  }

  export type PetsAvgAggregateOutputType = {
    dailyFoodAmount: number | null
    lastMeal: number | null
    weight: number | null
  }

  export type PetsSumAggregateOutputType = {
    dailyFoodAmount: number | null
    lastMeal: number | null
    weight: number | null
  }

  export type PetsMinAggregateOutputType = {
    id: string | null
    name: string | null
    birth: Date | null
    dailyFoodAmount: number | null
    lastMeal: number | null
    weight: number | null
    foodName: string | null
    feedingTimes: string | null
    lastFeedingDateTime: Date | null
  }

  export type PetsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birth: Date | null
    dailyFoodAmount: number | null
    lastMeal: number | null
    weight: number | null
    foodName: string | null
    feedingTimes: string | null
    lastFeedingDateTime: Date | null
  }

  export type PetsCountAggregateOutputType = {
    id: number
    name: number
    birth: number
    dailyFoodAmount: number
    lastMeal: number
    weight: number
    foodName: number
    feedingTimes: number
    lastFeedingDateTime: number
    _all: number
  }


  export type PetsAvgAggregateInputType = {
    dailyFoodAmount?: true
    lastMeal?: true
    weight?: true
  }

  export type PetsSumAggregateInputType = {
    dailyFoodAmount?: true
    lastMeal?: true
    weight?: true
  }

  export type PetsMinAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    dailyFoodAmount?: true
    lastMeal?: true
    weight?: true
    foodName?: true
    feedingTimes?: true
    lastFeedingDateTime?: true
  }

  export type PetsMaxAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    dailyFoodAmount?: true
    lastMeal?: true
    weight?: true
    foodName?: true
    feedingTimes?: true
    lastFeedingDateTime?: true
  }

  export type PetsCountAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    dailyFoodAmount?: true
    lastMeal?: true
    weight?: true
    foodName?: true
    feedingTimes?: true
    lastFeedingDateTime?: true
    _all?: true
  }

  export type PetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to aggregate.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetsMaxAggregateInputType
  }

  export type GetPetsAggregateType<T extends PetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePets[P]>
      : GetScalarType<T[P], AggregatePets[P]>
  }




  export type PetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetsWhereInput
    orderBy?: PetsOrderByWithAggregationInput | PetsOrderByWithAggregationInput[]
    by: PetsScalarFieldEnum[] | PetsScalarFieldEnum
    having?: PetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetsCountAggregateInputType | true
    _avg?: PetsAvgAggregateInputType
    _sum?: PetsSumAggregateInputType
    _min?: PetsMinAggregateInputType
    _max?: PetsMaxAggregateInputType
  }

  export type PetsGroupByOutputType = {
    id: string
    name: string
    birth: Date
    dailyFoodAmount: number
    lastMeal: number
    weight: number
    foodName: string
    feedingTimes: string
    lastFeedingDateTime: Date | null
    _count: PetsCountAggregateOutputType | null
    _avg: PetsAvgAggregateOutputType | null
    _sum: PetsSumAggregateOutputType | null
    _min: PetsMinAggregateOutputType | null
    _max: PetsMaxAggregateOutputType | null
  }

  type GetPetsGroupByPayload<T extends PetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetsGroupByOutputType[P]>
            : GetScalarType<T[P], PetsGroupByOutputType[P]>
        }
      >
    >


  export type PetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    dailyFoodAmount?: boolean
    lastMeal?: boolean
    weight?: boolean
    foodName?: boolean
    feedingTimes?: boolean
    lastFeedingDateTime?: boolean
    users?: boolean | Pets$usersArgs<ExtArgs>
    _count?: boolean | PetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pets"]>

  export type PetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    dailyFoodAmount?: boolean
    lastMeal?: boolean
    weight?: boolean
    foodName?: boolean
    feedingTimes?: boolean
    lastFeedingDateTime?: boolean
  }, ExtArgs["result"]["pets"]>

  export type PetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    dailyFoodAmount?: boolean
    lastMeal?: boolean
    weight?: boolean
    foodName?: boolean
    feedingTimes?: boolean
    lastFeedingDateTime?: boolean
  }, ExtArgs["result"]["pets"]>

  export type PetsSelectScalar = {
    id?: boolean
    name?: boolean
    birth?: boolean
    dailyFoodAmount?: boolean
    lastMeal?: boolean
    weight?: boolean
    foodName?: boolean
    feedingTimes?: boolean
    lastFeedingDateTime?: boolean
  }

  export type PetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birth" | "dailyFoodAmount" | "lastMeal" | "weight" | "foodName" | "feedingTimes" | "lastFeedingDateTime", ExtArgs["result"]["pets"]>
  export type PetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Pets$usersArgs<ExtArgs>
    _count?: boolean | PetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pets"
    objects: {
      users: Prisma.$UserPetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      birth: Date
      dailyFoodAmount: number
      lastMeal: number
      weight: number
      foodName: string
      feedingTimes: string
      lastFeedingDateTime: Date | null
    }, ExtArgs["result"]["pets"]>
    composites: {}
  }

  type PetsGetPayload<S extends boolean | null | undefined | PetsDefaultArgs> = $Result.GetResult<Prisma.$PetsPayload, S>

  type PetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetsCountAggregateInputType | true
    }

  export interface PetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pets'], meta: { name: 'Pets' } }
    /**
     * Find zero or one Pets that matches the filter.
     * @param {PetsFindUniqueArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetsFindUniqueArgs>(args: SelectSubset<T, PetsFindUniqueArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetsFindUniqueOrThrowArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetsFindUniqueOrThrowArgs>(args: SelectSubset<T, PetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindFirstArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetsFindFirstArgs>(args?: SelectSubset<T, PetsFindFirstArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindFirstOrThrowArgs} args - Arguments to find a Pets
     * @example
     * // Get one Pets
     * const pets = await prisma.pets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetsFindFirstOrThrowArgs>(args?: SelectSubset<T, PetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pets.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petsWithIdOnly = await prisma.pets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetsFindManyArgs>(args?: SelectSubset<T, PetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pets.
     * @param {PetsCreateArgs} args - Arguments to create a Pets.
     * @example
     * // Create one Pets
     * const Pets = await prisma.pets.create({
     *   data: {
     *     // ... data to create a Pets
     *   }
     * })
     * 
     */
    create<T extends PetsCreateArgs>(args: SelectSubset<T, PetsCreateArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetsCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pets = await prisma.pets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetsCreateManyArgs>(args?: SelectSubset<T, PetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetsCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pets = await prisma.pets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petsWithIdOnly = await prisma.pets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetsCreateManyAndReturnArgs>(args?: SelectSubset<T, PetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pets.
     * @param {PetsDeleteArgs} args - Arguments to delete one Pets.
     * @example
     * // Delete one Pets
     * const Pets = await prisma.pets.delete({
     *   where: {
     *     // ... filter to delete one Pets
     *   }
     * })
     * 
     */
    delete<T extends PetsDeleteArgs>(args: SelectSubset<T, PetsDeleteArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pets.
     * @param {PetsUpdateArgs} args - Arguments to update one Pets.
     * @example
     * // Update one Pets
     * const pets = await prisma.pets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetsUpdateArgs>(args: SelectSubset<T, PetsUpdateArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetsDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetsDeleteManyArgs>(args?: SelectSubset<T, PetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pets = await prisma.pets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetsUpdateManyArgs>(args: SelectSubset<T, PetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetsUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pets = await prisma.pets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petsWithIdOnly = await prisma.pets.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetsUpdateManyAndReturnArgs>(args: SelectSubset<T, PetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pets.
     * @param {PetsUpsertArgs} args - Arguments to update or create a Pets.
     * @example
     * // Update or create a Pets
     * const pets = await prisma.pets.upsert({
     *   create: {
     *     // ... data to create a Pets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pets we want to update
     *   }
     * })
     */
    upsert<T extends PetsUpsertArgs>(args: SelectSubset<T, PetsUpsertArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pets.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetsCountArgs>(
      args?: Subset<T, PetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetsAggregateArgs>(args: Subset<T, PetsAggregateArgs>): Prisma.PrismaPromise<GetPetsAggregateType<T>>

    /**
     * Group by Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetsGroupByArgs} args - Group by arguments.
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
      T extends PetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetsGroupByArgs['orderBy'] }
        : { orderBy?: PetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pets model
   */
  readonly fields: PetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Pets$usersArgs<ExtArgs> = {}>(args?: Subset<T, Pets$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pets model
   */
  interface PetsFieldRefs {
    readonly id: FieldRef<"Pets", 'String'>
    readonly name: FieldRef<"Pets", 'String'>
    readonly birth: FieldRef<"Pets", 'DateTime'>
    readonly dailyFoodAmount: FieldRef<"Pets", 'Float'>
    readonly lastMeal: FieldRef<"Pets", 'Float'>
    readonly weight: FieldRef<"Pets", 'Float'>
    readonly foodName: FieldRef<"Pets", 'String'>
    readonly feedingTimes: FieldRef<"Pets", 'String'>
    readonly lastFeedingDateTime: FieldRef<"Pets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pets findUnique
   */
  export type PetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets findUniqueOrThrow
   */
  export type PetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets findFirst
   */
  export type PetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets findFirstOrThrow
   */
  export type PetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets findMany
   */
  export type PetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetsOrderByWithRelationInput | PetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetsScalarFieldEnum | PetsScalarFieldEnum[]
  }

  /**
   * Pets create
   */
  export type PetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Pets.
     */
    data: XOR<PetsCreateInput, PetsUncheckedCreateInput>
  }

  /**
   * Pets createMany
   */
  export type PetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetsCreateManyInput | PetsCreateManyInput[]
  }

  /**
   * Pets createManyAndReturn
   */
  export type PetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetsCreateManyInput | PetsCreateManyInput[]
  }

  /**
   * Pets update
   */
  export type PetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Pets.
     */
    data: XOR<PetsUpdateInput, PetsUncheckedUpdateInput>
    /**
     * Choose, which Pets to update.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets updateMany
   */
  export type PetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetsWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pets updateManyAndReturn
   */
  export type PetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetsUpdateManyMutationInput, PetsUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetsWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pets upsert
   */
  export type PetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Pets to update in case it exists.
     */
    where: PetsWhereUniqueInput
    /**
     * In case the Pets found by the `where` argument doesn't exist, create a new Pets with this data.
     */
    create: XOR<PetsCreateInput, PetsUncheckedCreateInput>
    /**
     * In case the Pets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetsUpdateInput, PetsUncheckedUpdateInput>
  }

  /**
   * Pets delete
   */
  export type PetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
    /**
     * Filter which Pets to delete.
     */
    where: PetsWhereUniqueInput
  }

  /**
   * Pets deleteMany
   */
  export type PetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetsWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pets.users
   */
  export type Pets$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    where?: UserPetsWhereInput
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    cursor?: UserPetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPetsScalarFieldEnum | UserPetsScalarFieldEnum[]
  }

  /**
   * Pets without action
   */
  export type PetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pets
     */
    select?: PetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pets
     */
    omit?: PetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetsInclude<ExtArgs> | null
  }


  /**
   * Model FoodTime
   */

  export type AggregateFoodTime = {
    _count: FoodTimeCountAggregateOutputType | null
    _min: FoodTimeMinAggregateOutputType | null
    _max: FoodTimeMaxAggregateOutputType | null
  }

  export type FoodTimeMinAggregateOutputType = {
    id: string | null
    time: string | null
  }

  export type FoodTimeMaxAggregateOutputType = {
    id: string | null
    time: string | null
  }

  export type FoodTimeCountAggregateOutputType = {
    id: number
    time: number
    _all: number
  }


  export type FoodTimeMinAggregateInputType = {
    id?: true
    time?: true
  }

  export type FoodTimeMaxAggregateInputType = {
    id?: true
    time?: true
  }

  export type FoodTimeCountAggregateInputType = {
    id?: true
    time?: true
    _all?: true
  }

  export type FoodTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodTime to aggregate.
     */
    where?: FoodTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTimes to fetch.
     */
    orderBy?: FoodTimeOrderByWithRelationInput | FoodTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodTimes
    **/
    _count?: true | FoodTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodTimeMaxAggregateInputType
  }

  export type GetFoodTimeAggregateType<T extends FoodTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodTime[P]>
      : GetScalarType<T[P], AggregateFoodTime[P]>
  }




  export type FoodTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodTimeWhereInput
    orderBy?: FoodTimeOrderByWithAggregationInput | FoodTimeOrderByWithAggregationInput[]
    by: FoodTimeScalarFieldEnum[] | FoodTimeScalarFieldEnum
    having?: FoodTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodTimeCountAggregateInputType | true
    _min?: FoodTimeMinAggregateInputType
    _max?: FoodTimeMaxAggregateInputType
  }

  export type FoodTimeGroupByOutputType = {
    id: string
    time: string
    _count: FoodTimeCountAggregateOutputType | null
    _min: FoodTimeMinAggregateOutputType | null
    _max: FoodTimeMaxAggregateOutputType | null
  }

  type GetFoodTimeGroupByPayload<T extends FoodTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodTimeGroupByOutputType[P]>
            : GetScalarType<T[P], FoodTimeGroupByOutputType[P]>
        }
      >
    >


  export type FoodTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
  }, ExtArgs["result"]["foodTime"]>

  export type FoodTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
  }, ExtArgs["result"]["foodTime"]>

  export type FoodTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
  }, ExtArgs["result"]["foodTime"]>

  export type FoodTimeSelectScalar = {
    id?: boolean
    time?: boolean
  }

  export type FoodTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time", ExtArgs["result"]["foodTime"]>

  export type $FoodTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodTime"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: string
    }, ExtArgs["result"]["foodTime"]>
    composites: {}
  }

  type FoodTimeGetPayload<S extends boolean | null | undefined | FoodTimeDefaultArgs> = $Result.GetResult<Prisma.$FoodTimePayload, S>

  type FoodTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodTimeCountAggregateInputType | true
    }

  export interface FoodTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodTime'], meta: { name: 'FoodTime' } }
    /**
     * Find zero or one FoodTime that matches the filter.
     * @param {FoodTimeFindUniqueArgs} args - Arguments to find a FoodTime
     * @example
     * // Get one FoodTime
     * const foodTime = await prisma.foodTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodTimeFindUniqueArgs>(args: SelectSubset<T, FoodTimeFindUniqueArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodTimeFindUniqueOrThrowArgs} args - Arguments to find a FoodTime
     * @example
     * // Get one FoodTime
     * const foodTime = await prisma.foodTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeFindFirstArgs} args - Arguments to find a FoodTime
     * @example
     * // Get one FoodTime
     * const foodTime = await prisma.foodTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodTimeFindFirstArgs>(args?: SelectSubset<T, FoodTimeFindFirstArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeFindFirstOrThrowArgs} args - Arguments to find a FoodTime
     * @example
     * // Get one FoodTime
     * const foodTime = await prisma.foodTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodTimes
     * const foodTimes = await prisma.foodTime.findMany()
     * 
     * // Get first 10 FoodTimes
     * const foodTimes = await prisma.foodTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodTimeWithIdOnly = await prisma.foodTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodTimeFindManyArgs>(args?: SelectSubset<T, FoodTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodTime.
     * @param {FoodTimeCreateArgs} args - Arguments to create a FoodTime.
     * @example
     * // Create one FoodTime
     * const FoodTime = await prisma.foodTime.create({
     *   data: {
     *     // ... data to create a FoodTime
     *   }
     * })
     * 
     */
    create<T extends FoodTimeCreateArgs>(args: SelectSubset<T, FoodTimeCreateArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodTimes.
     * @param {FoodTimeCreateManyArgs} args - Arguments to create many FoodTimes.
     * @example
     * // Create many FoodTimes
     * const foodTime = await prisma.foodTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodTimeCreateManyArgs>(args?: SelectSubset<T, FoodTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodTimes and returns the data saved in the database.
     * @param {FoodTimeCreateManyAndReturnArgs} args - Arguments to create many FoodTimes.
     * @example
     * // Create many FoodTimes
     * const foodTime = await prisma.foodTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodTimes and only return the `id`
     * const foodTimeWithIdOnly = await prisma.foodTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodTime.
     * @param {FoodTimeDeleteArgs} args - Arguments to delete one FoodTime.
     * @example
     * // Delete one FoodTime
     * const FoodTime = await prisma.foodTime.delete({
     *   where: {
     *     // ... filter to delete one FoodTime
     *   }
     * })
     * 
     */
    delete<T extends FoodTimeDeleteArgs>(args: SelectSubset<T, FoodTimeDeleteArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodTime.
     * @param {FoodTimeUpdateArgs} args - Arguments to update one FoodTime.
     * @example
     * // Update one FoodTime
     * const foodTime = await prisma.foodTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodTimeUpdateArgs>(args: SelectSubset<T, FoodTimeUpdateArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodTimes.
     * @param {FoodTimeDeleteManyArgs} args - Arguments to filter FoodTimes to delete.
     * @example
     * // Delete a few FoodTimes
     * const { count } = await prisma.foodTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodTimeDeleteManyArgs>(args?: SelectSubset<T, FoodTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodTimes
     * const foodTime = await prisma.foodTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodTimeUpdateManyArgs>(args: SelectSubset<T, FoodTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodTimes and returns the data updated in the database.
     * @param {FoodTimeUpdateManyAndReturnArgs} args - Arguments to update many FoodTimes.
     * @example
     * // Update many FoodTimes
     * const foodTime = await prisma.foodTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodTimes and only return the `id`
     * const foodTimeWithIdOnly = await prisma.foodTime.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodTime.
     * @param {FoodTimeUpsertArgs} args - Arguments to update or create a FoodTime.
     * @example
     * // Update or create a FoodTime
     * const foodTime = await prisma.foodTime.upsert({
     *   create: {
     *     // ... data to create a FoodTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodTime we want to update
     *   }
     * })
     */
    upsert<T extends FoodTimeUpsertArgs>(args: SelectSubset<T, FoodTimeUpsertArgs<ExtArgs>>): Prisma__FoodTimeClient<$Result.GetResult<Prisma.$FoodTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeCountArgs} args - Arguments to filter FoodTimes to count.
     * @example
     * // Count the number of FoodTimes
     * const count = await prisma.foodTime.count({
     *   where: {
     *     // ... the filter for the FoodTimes we want to count
     *   }
     * })
    **/
    count<T extends FoodTimeCountArgs>(
      args?: Subset<T, FoodTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodTimeAggregateArgs>(args: Subset<T, FoodTimeAggregateArgs>): Prisma.PrismaPromise<GetFoodTimeAggregateType<T>>

    /**
     * Group by FoodTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTimeGroupByArgs} args - Group by arguments.
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
      T extends FoodTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodTimeGroupByArgs['orderBy'] }
        : { orderBy?: FoodTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodTime model
   */
  readonly fields: FoodTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FoodTime model
   */
  interface FoodTimeFieldRefs {
    readonly id: FieldRef<"FoodTime", 'String'>
    readonly time: FieldRef<"FoodTime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodTime findUnique
   */
  export type FoodTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter, which FoodTime to fetch.
     */
    where: FoodTimeWhereUniqueInput
  }

  /**
   * FoodTime findUniqueOrThrow
   */
  export type FoodTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter, which FoodTime to fetch.
     */
    where: FoodTimeWhereUniqueInput
  }

  /**
   * FoodTime findFirst
   */
  export type FoodTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter, which FoodTime to fetch.
     */
    where?: FoodTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTimes to fetch.
     */
    orderBy?: FoodTimeOrderByWithRelationInput | FoodTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTimes.
     */
    cursor?: FoodTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTimes.
     */
    distinct?: FoodTimeScalarFieldEnum | FoodTimeScalarFieldEnum[]
  }

  /**
   * FoodTime findFirstOrThrow
   */
  export type FoodTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter, which FoodTime to fetch.
     */
    where?: FoodTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTimes to fetch.
     */
    orderBy?: FoodTimeOrderByWithRelationInput | FoodTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTimes.
     */
    cursor?: FoodTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTimes.
     */
    distinct?: FoodTimeScalarFieldEnum | FoodTimeScalarFieldEnum[]
  }

  /**
   * FoodTime findMany
   */
  export type FoodTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter, which FoodTimes to fetch.
     */
    where?: FoodTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTimes to fetch.
     */
    orderBy?: FoodTimeOrderByWithRelationInput | FoodTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodTimes.
     */
    cursor?: FoodTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTimes.
     */
    skip?: number
    distinct?: FoodTimeScalarFieldEnum | FoodTimeScalarFieldEnum[]
  }

  /**
   * FoodTime create
   */
  export type FoodTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * The data needed to create a FoodTime.
     */
    data: XOR<FoodTimeCreateInput, FoodTimeUncheckedCreateInput>
  }

  /**
   * FoodTime createMany
   */
  export type FoodTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodTimes.
     */
    data: FoodTimeCreateManyInput | FoodTimeCreateManyInput[]
  }

  /**
   * FoodTime createManyAndReturn
   */
  export type FoodTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * The data used to create many FoodTimes.
     */
    data: FoodTimeCreateManyInput | FoodTimeCreateManyInput[]
  }

  /**
   * FoodTime update
   */
  export type FoodTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * The data needed to update a FoodTime.
     */
    data: XOR<FoodTimeUpdateInput, FoodTimeUncheckedUpdateInput>
    /**
     * Choose, which FoodTime to update.
     */
    where: FoodTimeWhereUniqueInput
  }

  /**
   * FoodTime updateMany
   */
  export type FoodTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodTimes.
     */
    data: XOR<FoodTimeUpdateManyMutationInput, FoodTimeUncheckedUpdateManyInput>
    /**
     * Filter which FoodTimes to update
     */
    where?: FoodTimeWhereInput
    /**
     * Limit how many FoodTimes to update.
     */
    limit?: number
  }

  /**
   * FoodTime updateManyAndReturn
   */
  export type FoodTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * The data used to update FoodTimes.
     */
    data: XOR<FoodTimeUpdateManyMutationInput, FoodTimeUncheckedUpdateManyInput>
    /**
     * Filter which FoodTimes to update
     */
    where?: FoodTimeWhereInput
    /**
     * Limit how many FoodTimes to update.
     */
    limit?: number
  }

  /**
   * FoodTime upsert
   */
  export type FoodTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * The filter to search for the FoodTime to update in case it exists.
     */
    where: FoodTimeWhereUniqueInput
    /**
     * In case the FoodTime found by the `where` argument doesn't exist, create a new FoodTime with this data.
     */
    create: XOR<FoodTimeCreateInput, FoodTimeUncheckedCreateInput>
    /**
     * In case the FoodTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodTimeUpdateInput, FoodTimeUncheckedUpdateInput>
  }

  /**
   * FoodTime delete
   */
  export type FoodTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
    /**
     * Filter which FoodTime to delete.
     */
    where: FoodTimeWhereUniqueInput
  }

  /**
   * FoodTime deleteMany
   */
  export type FoodTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodTimes to delete
     */
    where?: FoodTimeWhereInput
    /**
     * Limit how many FoodTimes to delete.
     */
    limit?: number
  }

  /**
   * FoodTime without action
   */
  export type FoodTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTime
     */
    select?: FoodTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodTime
     */
    omit?: FoodTimeOmit<ExtArgs> | null
  }


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
    password: string | null
    name: string | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    linkingCode: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    linkingCode: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    emailVerified: number
    emailVerificationToken: number
    resetToken: number
    resetTokenExpiry: number
    linkingCode: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    emailVerificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    linkingCode?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    emailVerificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    linkingCode?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    emailVerificationToken?: true
    resetToken?: true
    resetTokenExpiry?: true
    linkingCode?: true
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
    password: string
    name: string
    emailVerified: boolean
    emailVerificationToken: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    linkingCode: string | null
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
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    linkingCode?: boolean
    pets?: boolean | User$petsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    linkingCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    linkingCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    linkingCode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "emailVerified" | "emailVerificationToken" | "resetToken" | "resetTokenExpiry" | "linkingCode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | User$petsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pets: Prisma.$UserPetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      emailVerified: boolean
      emailVerificationToken: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      linkingCode: string | null
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
    pets<T extends User$petsArgs<ExtArgs> = {}>(args?: Subset<T, User$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly linkingCode: FieldRef<"User", 'String'>
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
   * User.pets
   */
  export type User$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    where?: UserPetsWhereInput
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    cursor?: UserPetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPetsScalarFieldEnum | UserPetsScalarFieldEnum[]
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
   * Model UserPets
   */

  export type AggregateUserPets = {
    _count: UserPetsCountAggregateOutputType | null
    _min: UserPetsMinAggregateOutputType | null
    _max: UserPetsMaxAggregateOutputType | null
  }

  export type UserPetsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    petId: string | null
  }

  export type UserPetsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    petId: string | null
  }

  export type UserPetsCountAggregateOutputType = {
    id: number
    userId: number
    petId: number
    _all: number
  }


  export type UserPetsMinAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
  }

  export type UserPetsMaxAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
  }

  export type UserPetsCountAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
    _all?: true
  }

  export type UserPetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPets to aggregate.
     */
    where?: UserPetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPets
    **/
    _count?: true | UserPetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPetsMaxAggregateInputType
  }

  export type GetUserPetsAggregateType<T extends UserPetsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPets[P]>
      : GetScalarType<T[P], AggregateUserPets[P]>
  }




  export type UserPetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetsWhereInput
    orderBy?: UserPetsOrderByWithAggregationInput | UserPetsOrderByWithAggregationInput[]
    by: UserPetsScalarFieldEnum[] | UserPetsScalarFieldEnum
    having?: UserPetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPetsCountAggregateInputType | true
    _min?: UserPetsMinAggregateInputType
    _max?: UserPetsMaxAggregateInputType
  }

  export type UserPetsGroupByOutputType = {
    id: string
    userId: string
    petId: string
    _count: UserPetsCountAggregateOutputType | null
    _min: UserPetsMinAggregateOutputType | null
    _max: UserPetsMaxAggregateOutputType | null
  }

  type GetUserPetsGroupByPayload<T extends UserPetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPetsGroupByOutputType[P]>
            : GetScalarType<T[P], UserPetsGroupByOutputType[P]>
        }
      >
    >


  export type UserPetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPets"]>

  export type UserPetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPets"]>

  export type UserPetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPets"]>

  export type UserPetsSelectScalar = {
    id?: boolean
    userId?: boolean
    petId?: boolean
  }

  export type UserPetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "petId", ExtArgs["result"]["userPets"]>
  export type UserPetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }
  export type UserPetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }
  export type UserPetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetsDefaultArgs<ExtArgs>
  }

  export type $UserPetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPets"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pet: Prisma.$PetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      petId: string
    }, ExtArgs["result"]["userPets"]>
    composites: {}
  }

  type UserPetsGetPayload<S extends boolean | null | undefined | UserPetsDefaultArgs> = $Result.GetResult<Prisma.$UserPetsPayload, S>

  type UserPetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPetsCountAggregateInputType | true
    }

  export interface UserPetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPets'], meta: { name: 'UserPets' } }
    /**
     * Find zero or one UserPets that matches the filter.
     * @param {UserPetsFindUniqueArgs} args - Arguments to find a UserPets
     * @example
     * // Get one UserPets
     * const userPets = await prisma.userPets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPetsFindUniqueArgs>(args: SelectSubset<T, UserPetsFindUniqueArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPetsFindUniqueOrThrowArgs} args - Arguments to find a UserPets
     * @example
     * // Get one UserPets
     * const userPets = await prisma.userPets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPetsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsFindFirstArgs} args - Arguments to find a UserPets
     * @example
     * // Get one UserPets
     * const userPets = await prisma.userPets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPetsFindFirstArgs>(args?: SelectSubset<T, UserPetsFindFirstArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsFindFirstOrThrowArgs} args - Arguments to find a UserPets
     * @example
     * // Get one UserPets
     * const userPets = await prisma.userPets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPetsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPets
     * const userPets = await prisma.userPets.findMany()
     * 
     * // Get first 10 UserPets
     * const userPets = await prisma.userPets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPetsWithIdOnly = await prisma.userPets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPetsFindManyArgs>(args?: SelectSubset<T, UserPetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPets.
     * @param {UserPetsCreateArgs} args - Arguments to create a UserPets.
     * @example
     * // Create one UserPets
     * const UserPets = await prisma.userPets.create({
     *   data: {
     *     // ... data to create a UserPets
     *   }
     * })
     * 
     */
    create<T extends UserPetsCreateArgs>(args: SelectSubset<T, UserPetsCreateArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPets.
     * @param {UserPetsCreateManyArgs} args - Arguments to create many UserPets.
     * @example
     * // Create many UserPets
     * const userPets = await prisma.userPets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPetsCreateManyArgs>(args?: SelectSubset<T, UserPetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPets and returns the data saved in the database.
     * @param {UserPetsCreateManyAndReturnArgs} args - Arguments to create many UserPets.
     * @example
     * // Create many UserPets
     * const userPets = await prisma.userPets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPets and only return the `id`
     * const userPetsWithIdOnly = await prisma.userPets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPetsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPets.
     * @param {UserPetsDeleteArgs} args - Arguments to delete one UserPets.
     * @example
     * // Delete one UserPets
     * const UserPets = await prisma.userPets.delete({
     *   where: {
     *     // ... filter to delete one UserPets
     *   }
     * })
     * 
     */
    delete<T extends UserPetsDeleteArgs>(args: SelectSubset<T, UserPetsDeleteArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPets.
     * @param {UserPetsUpdateArgs} args - Arguments to update one UserPets.
     * @example
     * // Update one UserPets
     * const userPets = await prisma.userPets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPetsUpdateArgs>(args: SelectSubset<T, UserPetsUpdateArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPets.
     * @param {UserPetsDeleteManyArgs} args - Arguments to filter UserPets to delete.
     * @example
     * // Delete a few UserPets
     * const { count } = await prisma.userPets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPetsDeleteManyArgs>(args?: SelectSubset<T, UserPetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPets
     * const userPets = await prisma.userPets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPetsUpdateManyArgs>(args: SelectSubset<T, UserPetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPets and returns the data updated in the database.
     * @param {UserPetsUpdateManyAndReturnArgs} args - Arguments to update many UserPets.
     * @example
     * // Update many UserPets
     * const userPets = await prisma.userPets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPets and only return the `id`
     * const userPetsWithIdOnly = await prisma.userPets.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPetsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPets.
     * @param {UserPetsUpsertArgs} args - Arguments to update or create a UserPets.
     * @example
     * // Update or create a UserPets
     * const userPets = await prisma.userPets.upsert({
     *   create: {
     *     // ... data to create a UserPets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPets we want to update
     *   }
     * })
     */
    upsert<T extends UserPetsUpsertArgs>(args: SelectSubset<T, UserPetsUpsertArgs<ExtArgs>>): Prisma__UserPetsClient<$Result.GetResult<Prisma.$UserPetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsCountArgs} args - Arguments to filter UserPets to count.
     * @example
     * // Count the number of UserPets
     * const count = await prisma.userPets.count({
     *   where: {
     *     // ... the filter for the UserPets we want to count
     *   }
     * })
    **/
    count<T extends UserPetsCountArgs>(
      args?: Subset<T, UserPetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPetsAggregateArgs>(args: Subset<T, UserPetsAggregateArgs>): Prisma.PrismaPromise<GetUserPetsAggregateType<T>>

    /**
     * Group by UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetsGroupByArgs} args - Group by arguments.
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
      T extends UserPetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPetsGroupByArgs['orderBy'] }
        : { orderBy?: UserPetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPets model
   */
  readonly fields: UserPetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends PetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetsDefaultArgs<ExtArgs>>): Prisma__PetsClient<$Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPets model
   */
  interface UserPetsFieldRefs {
    readonly id: FieldRef<"UserPets", 'String'>
    readonly userId: FieldRef<"UserPets", 'String'>
    readonly petId: FieldRef<"UserPets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPets findUnique
   */
  export type UserPetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where: UserPetsWhereUniqueInput
  }

  /**
   * UserPets findUniqueOrThrow
   */
  export type UserPetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where: UserPetsWhereUniqueInput
  }

  /**
   * UserPets findFirst
   */
  export type UserPetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where?: UserPetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPets.
     */
    cursor?: UserPetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPets.
     */
    distinct?: UserPetsScalarFieldEnum | UserPetsScalarFieldEnum[]
  }

  /**
   * UserPets findFirstOrThrow
   */
  export type UserPetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where?: UserPetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPets.
     */
    cursor?: UserPetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPets.
     */
    distinct?: UserPetsScalarFieldEnum | UserPetsScalarFieldEnum[]
  }

  /**
   * UserPets findMany
   */
  export type UserPetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where?: UserPetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetsOrderByWithRelationInput | UserPetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPets.
     */
    cursor?: UserPetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    distinct?: UserPetsScalarFieldEnum | UserPetsScalarFieldEnum[]
  }

  /**
   * UserPets create
   */
  export type UserPetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPets.
     */
    data: XOR<UserPetsCreateInput, UserPetsUncheckedCreateInput>
  }

  /**
   * UserPets createMany
   */
  export type UserPetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPets.
     */
    data: UserPetsCreateManyInput | UserPetsCreateManyInput[]
  }

  /**
   * UserPets createManyAndReturn
   */
  export type UserPetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * The data used to create many UserPets.
     */
    data: UserPetsCreateManyInput | UserPetsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPets update
   */
  export type UserPetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPets.
     */
    data: XOR<UserPetsUpdateInput, UserPetsUncheckedUpdateInput>
    /**
     * Choose, which UserPets to update.
     */
    where: UserPetsWhereUniqueInput
  }

  /**
   * UserPets updateMany
   */
  export type UserPetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPets.
     */
    data: XOR<UserPetsUpdateManyMutationInput, UserPetsUncheckedUpdateManyInput>
    /**
     * Filter which UserPets to update
     */
    where?: UserPetsWhereInput
    /**
     * Limit how many UserPets to update.
     */
    limit?: number
  }

  /**
   * UserPets updateManyAndReturn
   */
  export type UserPetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * The data used to update UserPets.
     */
    data: XOR<UserPetsUpdateManyMutationInput, UserPetsUncheckedUpdateManyInput>
    /**
     * Filter which UserPets to update
     */
    where?: UserPetsWhereInput
    /**
     * Limit how many UserPets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPets upsert
   */
  export type UserPetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPets to update in case it exists.
     */
    where: UserPetsWhereUniqueInput
    /**
     * In case the UserPets found by the `where` argument doesn't exist, create a new UserPets with this data.
     */
    create: XOR<UserPetsCreateInput, UserPetsUncheckedCreateInput>
    /**
     * In case the UserPets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPetsUpdateInput, UserPetsUncheckedUpdateInput>
  }

  /**
   * UserPets delete
   */
  export type UserPetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
    /**
     * Filter which UserPets to delete.
     */
    where: UserPetsWhereUniqueInput
  }

  /**
   * UserPets deleteMany
   */
  export type UserPetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPets to delete
     */
    where?: UserPetsWhereInput
    /**
     * Limit how many UserPets to delete.
     */
    limit?: number
  }

  /**
   * UserPets without action
   */
  export type UserPetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPets
     */
    select?: UserPetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPets
     */
    omit?: UserPetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PetsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birth: 'birth',
    dailyFoodAmount: 'dailyFoodAmount',
    lastMeal: 'lastMeal',
    weight: 'weight',
    foodName: 'foodName',
    feedingTimes: 'feedingTimes',
    lastFeedingDateTime: 'lastFeedingDateTime'
  };

  export type PetsScalarFieldEnum = (typeof PetsScalarFieldEnum)[keyof typeof PetsScalarFieldEnum]


  export const FoodTimeScalarFieldEnum: {
    id: 'id',
    time: 'time'
  };

  export type FoodTimeScalarFieldEnum = (typeof FoodTimeScalarFieldEnum)[keyof typeof FoodTimeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    emailVerified: 'emailVerified',
    emailVerificationToken: 'emailVerificationToken',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    linkingCode: 'linkingCode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPetsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    petId: 'petId'
  };

  export type UserPetsScalarFieldEnum = (typeof UserPetsScalarFieldEnum)[keyof typeof UserPetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type PetsWhereInput = {
    AND?: PetsWhereInput | PetsWhereInput[]
    OR?: PetsWhereInput[]
    NOT?: PetsWhereInput | PetsWhereInput[]
    id?: StringFilter<"Pets"> | string
    name?: StringFilter<"Pets"> | string
    birth?: DateTimeFilter<"Pets"> | Date | string
    dailyFoodAmount?: FloatFilter<"Pets"> | number
    lastMeal?: FloatFilter<"Pets"> | number
    weight?: FloatFilter<"Pets"> | number
    foodName?: StringFilter<"Pets"> | string
    feedingTimes?: StringFilter<"Pets"> | string
    lastFeedingDateTime?: DateTimeNullableFilter<"Pets"> | Date | string | null
    users?: UserPetsListRelationFilter
  }

  export type PetsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
    foodName?: SortOrder
    feedingTimes?: SortOrder
    lastFeedingDateTime?: SortOrderInput | SortOrder
    users?: UserPetsOrderByRelationAggregateInput
  }

  export type PetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetsWhereInput | PetsWhereInput[]
    OR?: PetsWhereInput[]
    NOT?: PetsWhereInput | PetsWhereInput[]
    name?: StringFilter<"Pets"> | string
    birth?: DateTimeFilter<"Pets"> | Date | string
    dailyFoodAmount?: FloatFilter<"Pets"> | number
    lastMeal?: FloatFilter<"Pets"> | number
    weight?: FloatFilter<"Pets"> | number
    foodName?: StringFilter<"Pets"> | string
    feedingTimes?: StringFilter<"Pets"> | string
    lastFeedingDateTime?: DateTimeNullableFilter<"Pets"> | Date | string | null
    users?: UserPetsListRelationFilter
  }, "id">

  export type PetsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
    foodName?: SortOrder
    feedingTimes?: SortOrder
    lastFeedingDateTime?: SortOrderInput | SortOrder
    _count?: PetsCountOrderByAggregateInput
    _avg?: PetsAvgOrderByAggregateInput
    _max?: PetsMaxOrderByAggregateInput
    _min?: PetsMinOrderByAggregateInput
    _sum?: PetsSumOrderByAggregateInput
  }

  export type PetsScalarWhereWithAggregatesInput = {
    AND?: PetsScalarWhereWithAggregatesInput | PetsScalarWhereWithAggregatesInput[]
    OR?: PetsScalarWhereWithAggregatesInput[]
    NOT?: PetsScalarWhereWithAggregatesInput | PetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pets"> | string
    name?: StringWithAggregatesFilter<"Pets"> | string
    birth?: DateTimeWithAggregatesFilter<"Pets"> | Date | string
    dailyFoodAmount?: FloatWithAggregatesFilter<"Pets"> | number
    lastMeal?: FloatWithAggregatesFilter<"Pets"> | number
    weight?: FloatWithAggregatesFilter<"Pets"> | number
    foodName?: StringWithAggregatesFilter<"Pets"> | string
    feedingTimes?: StringWithAggregatesFilter<"Pets"> | string
    lastFeedingDateTime?: DateTimeNullableWithAggregatesFilter<"Pets"> | Date | string | null
  }

  export type FoodTimeWhereInput = {
    AND?: FoodTimeWhereInput | FoodTimeWhereInput[]
    OR?: FoodTimeWhereInput[]
    NOT?: FoodTimeWhereInput | FoodTimeWhereInput[]
    id?: StringFilter<"FoodTime"> | string
    time?: StringFilter<"FoodTime"> | string
  }

  export type FoodTimeOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type FoodTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodTimeWhereInput | FoodTimeWhereInput[]
    OR?: FoodTimeWhereInput[]
    NOT?: FoodTimeWhereInput | FoodTimeWhereInput[]
    time?: StringFilter<"FoodTime"> | string
  }, "id">

  export type FoodTimeOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    _count?: FoodTimeCountOrderByAggregateInput
    _max?: FoodTimeMaxOrderByAggregateInput
    _min?: FoodTimeMinOrderByAggregateInput
  }

  export type FoodTimeScalarWhereWithAggregatesInput = {
    AND?: FoodTimeScalarWhereWithAggregatesInput | FoodTimeScalarWhereWithAggregatesInput[]
    OR?: FoodTimeScalarWhereWithAggregatesInput[]
    NOT?: FoodTimeScalarWhereWithAggregatesInput | FoodTimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodTime"> | string
    time?: StringWithAggregatesFilter<"FoodTime"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    linkingCode?: StringNullableFilter<"User"> | string | null
    pets?: UserPetsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    linkingCode?: SortOrderInput | SortOrder
    pets?: UserPetsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    linkingCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    pets?: UserPetsListRelationFilter
  }, "id" | "email" | "linkingCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    linkingCode?: SortOrderInput | SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    linkingCode?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserPetsWhereInput = {
    AND?: UserPetsWhereInput | UserPetsWhereInput[]
    OR?: UserPetsWhereInput[]
    NOT?: UserPetsWhereInput | UserPetsWhereInput[]
    id?: StringFilter<"UserPets"> | string
    userId?: StringFilter<"UserPets"> | string
    petId?: StringFilter<"UserPets"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pet?: XOR<PetsScalarRelationFilter, PetsWhereInput>
  }

  export type UserPetsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    user?: UserOrderByWithRelationInput
    pet?: PetsOrderByWithRelationInput
  }

  export type UserPetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_petId?: UserPetsUserIdPetIdCompoundUniqueInput
    AND?: UserPetsWhereInput | UserPetsWhereInput[]
    OR?: UserPetsWhereInput[]
    NOT?: UserPetsWhereInput | UserPetsWhereInput[]
    userId?: StringFilter<"UserPets"> | string
    petId?: StringFilter<"UserPets"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pet?: XOR<PetsScalarRelationFilter, PetsWhereInput>
  }, "id" | "userId_petId">

  export type UserPetsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    _count?: UserPetsCountOrderByAggregateInput
    _max?: UserPetsMaxOrderByAggregateInput
    _min?: UserPetsMinOrderByAggregateInput
  }

  export type UserPetsScalarWhereWithAggregatesInput = {
    AND?: UserPetsScalarWhereWithAggregatesInput | UserPetsScalarWhereWithAggregatesInput[]
    OR?: UserPetsScalarWhereWithAggregatesInput[]
    NOT?: UserPetsScalarWhereWithAggregatesInput | UserPetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPets"> | string
    userId?: StringWithAggregatesFilter<"UserPets"> | string
    petId?: StringWithAggregatesFilter<"UserPets"> | string
  }

  export type PetsCreateInput = {
    id?: string
    name: string
    birth: Date | string
    dailyFoodAmount: number
    lastMeal?: number
    weight?: number
    foodName?: string
    feedingTimes?: string
    lastFeedingDateTime?: Date | string | null
    users?: UserPetsCreateNestedManyWithoutPetInput
  }

  export type PetsUncheckedCreateInput = {
    id?: string
    name: string
    birth: Date | string
    dailyFoodAmount: number
    lastMeal?: number
    weight?: number
    foodName?: string
    feedingTimes?: string
    lastFeedingDateTime?: Date | string | null
    users?: UserPetsUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserPetsUpdateManyWithoutPetNestedInput
  }

  export type PetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserPetsUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetsCreateManyInput = {
    id?: string
    name: string
    birth: Date | string
    dailyFoodAmount: number
    lastMeal?: number
    weight?: number
    foodName?: string
    feedingTimes?: string
    lastFeedingDateTime?: Date | string | null
  }

  export type PetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FoodTimeCreateInput = {
    id?: string
    time: string
  }

  export type FoodTimeUncheckedCreateInput = {
    id?: string
    time: string
  }

  export type FoodTimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTimeCreateManyInput = {
    id?: string
    time: string
  }

  export type FoodTimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    emailVerified?: boolean
    emailVerificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    linkingCode?: string | null
    pets?: UserPetsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    emailVerified?: boolean
    emailVerificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    linkingCode?: string | null
    pets?: UserPetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: UserPetsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: UserPetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    emailVerified?: boolean
    emailVerificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    linkingCode?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPetsCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutPetsInput
    pet: PetsCreateNestedOneWithoutUsersInput
  }

  export type UserPetsUncheckedCreateInput = {
    id?: string
    userId: string
    petId: string
  }

  export type UserPetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    pet?: PetsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPetsCreateManyInput = {
    id?: string
    userId: string
    petId: string
  }

  export type UserPetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserPetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserPetsListRelationFilter = {
    every?: UserPetsWhereInput
    some?: UserPetsWhereInput
    none?: UserPetsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
    foodName?: SortOrder
    feedingTimes?: SortOrder
    lastFeedingDateTime?: SortOrder
  }

  export type PetsAvgOrderByAggregateInput = {
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
  }

  export type PetsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
    foodName?: SortOrder
    feedingTimes?: SortOrder
    lastFeedingDateTime?: SortOrder
  }

  export type PetsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
    foodName?: SortOrder
    feedingTimes?: SortOrder
    lastFeedingDateTime?: SortOrder
  }

  export type PetsSumOrderByAggregateInput = {
    dailyFoodAmount?: SortOrder
    lastMeal?: SortOrder
    weight?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FoodTimeCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type FoodTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type FoodTimeMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    linkingCode?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    linkingCode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    linkingCode?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetsScalarRelationFilter = {
    is?: PetsWhereInput
    isNot?: PetsWhereInput
  }

  export type UserPetsUserIdPetIdCompoundUniqueInput = {
    userId: string
    petId: string
  }

  export type UserPetsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type UserPetsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type UserPetsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type UserPetsCreateNestedManyWithoutPetInput = {
    create?: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput> | UserPetsCreateWithoutPetInput[] | UserPetsUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutPetInput | UserPetsCreateOrConnectWithoutPetInput[]
    createMany?: UserPetsCreateManyPetInputEnvelope
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
  }

  export type UserPetsUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput> | UserPetsCreateWithoutPetInput[] | UserPetsUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutPetInput | UserPetsCreateOrConnectWithoutPetInput[]
    createMany?: UserPetsCreateManyPetInputEnvelope
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserPetsUpdateManyWithoutPetNestedInput = {
    create?: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput> | UserPetsCreateWithoutPetInput[] | UserPetsUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutPetInput | UserPetsCreateOrConnectWithoutPetInput[]
    upsert?: UserPetsUpsertWithWhereUniqueWithoutPetInput | UserPetsUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: UserPetsCreateManyPetInputEnvelope
    set?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    disconnect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    delete?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    update?: UserPetsUpdateWithWhereUniqueWithoutPetInput | UserPetsUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: UserPetsUpdateManyWithWhereWithoutPetInput | UserPetsUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
  }

  export type UserPetsUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput> | UserPetsCreateWithoutPetInput[] | UserPetsUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutPetInput | UserPetsCreateOrConnectWithoutPetInput[]
    upsert?: UserPetsUpsertWithWhereUniqueWithoutPetInput | UserPetsUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: UserPetsCreateManyPetInputEnvelope
    set?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    disconnect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    delete?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    update?: UserPetsUpdateWithWhereUniqueWithoutPetInput | UserPetsUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: UserPetsUpdateManyWithWhereWithoutPetInput | UserPetsUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
  }

  export type UserPetsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput> | UserPetsCreateWithoutUserInput[] | UserPetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutUserInput | UserPetsCreateOrConnectWithoutUserInput[]
    createMany?: UserPetsCreateManyUserInputEnvelope
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
  }

  export type UserPetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput> | UserPetsCreateWithoutUserInput[] | UserPetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutUserInput | UserPetsCreateOrConnectWithoutUserInput[]
    createMany?: UserPetsCreateManyUserInputEnvelope
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput> | UserPetsCreateWithoutUserInput[] | UserPetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutUserInput | UserPetsCreateOrConnectWithoutUserInput[]
    upsert?: UserPetsUpsertWithWhereUniqueWithoutUserInput | UserPetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPetsCreateManyUserInputEnvelope
    set?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    disconnect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    delete?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    update?: UserPetsUpdateWithWhereUniqueWithoutUserInput | UserPetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPetsUpdateManyWithWhereWithoutUserInput | UserPetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
  }

  export type UserPetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput> | UserPetsCreateWithoutUserInput[] | UserPetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetsCreateOrConnectWithoutUserInput | UserPetsCreateOrConnectWithoutUserInput[]
    upsert?: UserPetsUpsertWithWhereUniqueWithoutUserInput | UserPetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPetsCreateManyUserInputEnvelope
    set?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    disconnect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    delete?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    connect?: UserPetsWhereUniqueInput | UserPetsWhereUniqueInput[]
    update?: UserPetsUpdateWithWhereUniqueWithoutUserInput | UserPetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPetsUpdateManyWithWhereWithoutUserInput | UserPetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPetsInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    connect?: UserWhereUniqueInput
  }

  export type PetsCreateNestedOneWithoutUsersInput = {
    create?: XOR<PetsCreateWithoutUsersInput, PetsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PetsCreateOrConnectWithoutUsersInput
    connect?: PetsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    upsert?: UserUpsertWithoutPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsInput, UserUpdateWithoutPetsInput>, UserUncheckedUpdateWithoutPetsInput>
  }

  export type PetsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PetsCreateWithoutUsersInput, PetsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PetsCreateOrConnectWithoutUsersInput
    upsert?: PetsUpsertWithoutUsersInput
    connect?: PetsWhereUniqueInput
    update?: XOR<XOR<PetsUpdateToOneWithWhereWithoutUsersInput, PetsUpdateWithoutUsersInput>, PetsUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserPetsCreateWithoutPetInput = {
    id?: string
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type UserPetsUncheckedCreateWithoutPetInput = {
    id?: string
    userId: string
  }

  export type UserPetsCreateOrConnectWithoutPetInput = {
    where: UserPetsWhereUniqueInput
    create: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput>
  }

  export type UserPetsCreateManyPetInputEnvelope = {
    data: UserPetsCreateManyPetInput | UserPetsCreateManyPetInput[]
  }

  export type UserPetsUpsertWithWhereUniqueWithoutPetInput = {
    where: UserPetsWhereUniqueInput
    update: XOR<UserPetsUpdateWithoutPetInput, UserPetsUncheckedUpdateWithoutPetInput>
    create: XOR<UserPetsCreateWithoutPetInput, UserPetsUncheckedCreateWithoutPetInput>
  }

  export type UserPetsUpdateWithWhereUniqueWithoutPetInput = {
    where: UserPetsWhereUniqueInput
    data: XOR<UserPetsUpdateWithoutPetInput, UserPetsUncheckedUpdateWithoutPetInput>
  }

  export type UserPetsUpdateManyWithWhereWithoutPetInput = {
    where: UserPetsScalarWhereInput
    data: XOR<UserPetsUpdateManyMutationInput, UserPetsUncheckedUpdateManyWithoutPetInput>
  }

  export type UserPetsScalarWhereInput = {
    AND?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
    OR?: UserPetsScalarWhereInput[]
    NOT?: UserPetsScalarWhereInput | UserPetsScalarWhereInput[]
    id?: StringFilter<"UserPets"> | string
    userId?: StringFilter<"UserPets"> | string
    petId?: StringFilter<"UserPets"> | string
  }

  export type UserPetsCreateWithoutUserInput = {
    id?: string
    pet: PetsCreateNestedOneWithoutUsersInput
  }

  export type UserPetsUncheckedCreateWithoutUserInput = {
    id?: string
    petId: string
  }

  export type UserPetsCreateOrConnectWithoutUserInput = {
    where: UserPetsWhereUniqueInput
    create: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput>
  }

  export type UserPetsCreateManyUserInputEnvelope = {
    data: UserPetsCreateManyUserInput | UserPetsCreateManyUserInput[]
  }

  export type UserPetsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPetsWhereUniqueInput
    update: XOR<UserPetsUpdateWithoutUserInput, UserPetsUncheckedUpdateWithoutUserInput>
    create: XOR<UserPetsCreateWithoutUserInput, UserPetsUncheckedCreateWithoutUserInput>
  }

  export type UserPetsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPetsWhereUniqueInput
    data: XOR<UserPetsUpdateWithoutUserInput, UserPetsUncheckedUpdateWithoutUserInput>
  }

  export type UserPetsUpdateManyWithWhereWithoutUserInput = {
    where: UserPetsScalarWhereInput
    data: XOR<UserPetsUpdateManyMutationInput, UserPetsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutPetsInput = {
    id?: string
    email: string
    password: string
    name: string
    emailVerified?: boolean
    emailVerificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    linkingCode?: string | null
  }

  export type UserUncheckedCreateWithoutPetsInput = {
    id?: string
    email: string
    password: string
    name: string
    emailVerified?: boolean
    emailVerificationToken?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    linkingCode?: string | null
  }

  export type UserCreateOrConnectWithoutPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
  }

  export type PetsCreateWithoutUsersInput = {
    id?: string
    name: string
    birth: Date | string
    dailyFoodAmount: number
    lastMeal?: number
    weight?: number
    foodName?: string
    feedingTimes?: string
    lastFeedingDateTime?: Date | string | null
  }

  export type PetsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    birth: Date | string
    dailyFoodAmount: number
    lastMeal?: number
    weight?: number
    foodName?: string
    feedingTimes?: string
    lastFeedingDateTime?: Date | string | null
  }

  export type PetsCreateOrConnectWithoutUsersInput = {
    where: PetsWhereUniqueInput
    create: XOR<PetsCreateWithoutUsersInput, PetsUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutPetsInput = {
    update: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkingCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetsUpsertWithoutUsersInput = {
    update: XOR<PetsUpdateWithoutUsersInput, PetsUncheckedUpdateWithoutUsersInput>
    create: XOR<PetsCreateWithoutUsersInput, PetsUncheckedCreateWithoutUsersInput>
    where?: PetsWhereInput
  }

  export type PetsUpdateToOneWithWhereWithoutUsersInput = {
    where?: PetsWhereInput
    data: XOR<PetsUpdateWithoutUsersInput, PetsUncheckedUpdateWithoutUsersInput>
  }

  export type PetsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyFoodAmount?: FloatFieldUpdateOperationsInput | number
    lastMeal?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    feedingTimes?: StringFieldUpdateOperationsInput | string
    lastFeedingDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPetsCreateManyPetInput = {
    id?: string
    userId: string
  }

  export type UserPetsUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type UserPetsUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPetsUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPetsCreateManyUserInput = {
    id?: string
    petId: string
  }

  export type UserPetsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pet?: PetsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserPetsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPetsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
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