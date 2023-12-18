
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model FillRequest
 * 
 */
export type FillRequest = $Result.DefaultSelection<Prisma.$FillRequestPayload>
/**
 * Model WithdrawRequests
 * 
 */
export type WithdrawRequests = $Result.DefaultSelection<Prisma.$WithdrawRequestsPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FillStatus: {
  Accepted: 'Accepted',
  Declined: 'Declined',
  Waiting: 'Waiting'
};

export type FillStatus = (typeof FillStatus)[keyof typeof FillStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FillStatus = $Enums.FillStatus

export const FillStatus: typeof $Enums.FillStatus

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.fillRequest`: Exposes CRUD operations for the **FillRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FillRequests
    * const fillRequests = await prisma.fillRequest.findMany()
    * ```
    */
  get fillRequest(): Prisma.FillRequestDelegate<ExtArgs>;

  /**
   * `prisma.withdrawRequests`: Exposes CRUD operations for the **WithdrawRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawRequests
    * const withdrawRequests = await prisma.withdrawRequests.findMany()
    * ```
    */
  get withdrawRequests(): Prisma.WithdrawRequestsDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    FillRequest: 'FillRequest',
    WithdrawRequests: 'WithdrawRequests',
    Blog: 'Blog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'fillRequest' | 'withdrawRequests' | 'blog'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FillRequest: {
        payload: Prisma.$FillRequestPayload<ExtArgs>
        fields: Prisma.FillRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FillRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FillRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          findFirst: {
            args: Prisma.FillRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FillRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          findMany: {
            args: Prisma.FillRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>[]
          }
          create: {
            args: Prisma.FillRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          createMany: {
            args: Prisma.FillRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FillRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          update: {
            args: Prisma.FillRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          deleteMany: {
            args: Prisma.FillRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FillRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FillRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FillRequestPayload>
          }
          aggregate: {
            args: Prisma.FillRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFillRequest>
          }
          groupBy: {
            args: Prisma.FillRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FillRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FillRequestFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FillRequestAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FillRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<FillRequestCountAggregateOutputType> | number
          }
        }
      }
      WithdrawRequests: {
        payload: Prisma.$WithdrawRequestsPayload<ExtArgs>
        fields: Prisma.WithdrawRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawRequestsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawRequestsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          findFirst: {
            args: Prisma.WithdrawRequestsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawRequestsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          findMany: {
            args: Prisma.WithdrawRequestsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>[]
          }
          create: {
            args: Prisma.WithdrawRequestsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          createMany: {
            args: Prisma.WithdrawRequestsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WithdrawRequestsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          update: {
            args: Prisma.WithdrawRequestsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawRequestsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawRequestsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawRequestsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawRequestsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWithdrawRequests>
          }
          groupBy: {
            args: Prisma.WithdrawRequestsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WithdrawRequestsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WithdrawRequestsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WithdrawRequestsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WithdrawRequestsCountArgs<ExtArgs>,
            result: $Utils.Optional<WithdrawRequestsCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlogFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlogAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    FillRequests: number
    WithdrawRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FillRequests?: boolean | UserCountOutputTypeCountFillRequestsArgs
    WithdrawRequests?: boolean | UserCountOutputTypeCountWithdrawRequestsArgs
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
  export type UserCountOutputTypeCountFillRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawRequestsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    emailVerified: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
    passwordRecoverCode: string | null
    phone: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blocked: boolean | null
    role: $Enums.Role | null
    balance: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    emailVerified: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
    passwordRecoverCode: string | null
    phone: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blocked: boolean | null
    role: $Enums.Role | null
    balance: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    email: number
    emailVerified: number
    verifyToken: number
    verifyTokenExpiry: number
    passwordRecoverCode: number
    phone: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    blocked: number
    role: number
    balance: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    verifyToken?: true
    verifyTokenExpiry?: true
    passwordRecoverCode?: true
    phone?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    blocked?: true
    role?: true
    balance?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    verifyToken?: true
    verifyTokenExpiry?: true
    passwordRecoverCode?: true
    phone?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    blocked?: true
    role?: true
    balance?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    verifyToken?: true
    verifyTokenExpiry?: true
    passwordRecoverCode?: true
    phone?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    blocked?: true
    role?: true
    balance?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified: Date | null
    verifyToken: string | null
    verifyTokenExpiry: Date | null
    passwordRecoverCode: string | null
    phone: string
    hashedPassword: string
    createdAt: Date
    updatedAt: Date
    blocked: boolean
    role: $Enums.Role
    balance: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    verifyToken?: boolean
    verifyTokenExpiry?: boolean
    passwordRecoverCode?: boolean
    phone?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blocked?: boolean
    role?: boolean
    balance?: boolean
    FillRequests?: boolean | User$FillRequestsArgs<ExtArgs>
    WithdrawRequests?: boolean | User$WithdrawRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    verifyToken?: boolean
    verifyTokenExpiry?: boolean
    passwordRecoverCode?: boolean
    phone?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blocked?: boolean
    role?: boolean
    balance?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FillRequests?: boolean | User$FillRequestsArgs<ExtArgs>
    WithdrawRequests?: boolean | User$WithdrawRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      FillRequests: Prisma.$FillRequestPayload<ExtArgs>[]
      WithdrawRequests: Prisma.$WithdrawRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      firstname: string
      lastname: string
      email: string
      emailVerified: Date | null
      verifyToken: string | null
      verifyTokenExpiry: Date | null
      passwordRecoverCode: string | null
      phone: string
      hashedPassword: string
      createdAt: Date
      updatedAt: Date
      blocked: boolean
      role: $Enums.Role
      balance: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    FillRequests<T extends User$FillRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$FillRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    WithdrawRequests<T extends User$WithdrawRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$WithdrawRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly verifyToken: FieldRef<"User", 'String'>
    readonly verifyTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly passwordRecoverCode: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly blocked: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly balance: FieldRef<"User", 'Float'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.FillRequests
   */
  export type User$FillRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    where?: FillRequestWhereInput
    orderBy?: FillRequestOrderByWithRelationInput | FillRequestOrderByWithRelationInput[]
    cursor?: FillRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillRequestScalarFieldEnum | FillRequestScalarFieldEnum[]
  }


  /**
   * User.WithdrawRequests
   */
  export type User$WithdrawRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    where?: WithdrawRequestsWhereInput
    orderBy?: WithdrawRequestsOrderByWithRelationInput | WithdrawRequestsOrderByWithRelationInput[]
    cursor?: WithdrawRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawRequestsScalarFieldEnum | WithdrawRequestsScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model FillRequest
   */

  export type AggregateFillRequest = {
    _count: FillRequestCountAggregateOutputType | null
    _avg: FillRequestAvgAggregateOutputType | null
    _sum: FillRequestSumAggregateOutputType | null
    _min: FillRequestMinAggregateOutputType | null
    _max: FillRequestMaxAggregateOutputType | null
  }

  export type FillRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type FillRequestSumAggregateOutputType = {
    amount: number | null
  }

  export type FillRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.FillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.FillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillRequestCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FillRequestAvgAggregateInputType = {
    amount?: true
  }

  export type FillRequestSumAggregateInputType = {
    amount?: true
  }

  export type FillRequestMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillRequestCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FillRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillRequest to aggregate.
     */
    where?: FillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillRequests to fetch.
     */
    orderBy?: FillRequestOrderByWithRelationInput | FillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FillRequests
    **/
    _count?: true | FillRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FillRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FillRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FillRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FillRequestMaxAggregateInputType
  }

  export type GetFillRequestAggregateType<T extends FillRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFillRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFillRequest[P]>
      : GetScalarType<T[P], AggregateFillRequest[P]>
  }




  export type FillRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillRequestWhereInput
    orderBy?: FillRequestOrderByWithAggregationInput | FillRequestOrderByWithAggregationInput[]
    by: FillRequestScalarFieldEnum[] | FillRequestScalarFieldEnum
    having?: FillRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FillRequestCountAggregateInputType | true
    _avg?: FillRequestAvgAggregateInputType
    _sum?: FillRequestSumAggregateInputType
    _min?: FillRequestMinAggregateInputType
    _max?: FillRequestMaxAggregateInputType
  }

  export type FillRequestGroupByOutputType = {
    id: string
    userId: string
    amount: number
    status: $Enums.FillStatus
    createdAt: Date
    updatedAt: Date
    _count: FillRequestCountAggregateOutputType | null
    _avg: FillRequestAvgAggregateOutputType | null
    _sum: FillRequestSumAggregateOutputType | null
    _min: FillRequestMinAggregateOutputType | null
    _max: FillRequestMaxAggregateOutputType | null
  }

  type GetFillRequestGroupByPayload<T extends FillRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FillRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FillRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FillRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FillRequestGroupByOutputType[P]>
        }
      >
    >


  export type FillRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | FillRequest$userArgs<ExtArgs>
  }, ExtArgs["result"]["fillRequest"]>

  export type FillRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FillRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FillRequest$userArgs<ExtArgs>
  }


  export type $FillRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FillRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      status: $Enums.FillStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fillRequest"]>
    composites: {}
  }


  type FillRequestGetPayload<S extends boolean | null | undefined | FillRequestDefaultArgs> = $Result.GetResult<Prisma.$FillRequestPayload, S>

  type FillRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FillRequestFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FillRequestCountAggregateInputType | true
    }

  export interface FillRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FillRequest'], meta: { name: 'FillRequest' } }
    /**
     * Find zero or one FillRequest that matches the filter.
     * @param {FillRequestFindUniqueArgs} args - Arguments to find a FillRequest
     * @example
     * // Get one FillRequest
     * const fillRequest = await prisma.fillRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FillRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FillRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FillRequestFindUniqueOrThrowArgs} args - Arguments to find a FillRequest
     * @example
     * // Get one FillRequest
     * const fillRequest = await prisma.fillRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FillRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FillRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestFindFirstArgs} args - Arguments to find a FillRequest
     * @example
     * // Get one FillRequest
     * const fillRequest = await prisma.fillRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FillRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestFindFirstArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FillRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestFindFirstOrThrowArgs} args - Arguments to find a FillRequest
     * @example
     * // Get one FillRequest
     * const fillRequest = await prisma.fillRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FillRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FillRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FillRequests
     * const fillRequests = await prisma.fillRequest.findMany()
     * 
     * // Get first 10 FillRequests
     * const fillRequests = await prisma.fillRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fillRequestWithIdOnly = await prisma.fillRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FillRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FillRequest.
     * @param {FillRequestCreateArgs} args - Arguments to create a FillRequest.
     * @example
     * // Create one FillRequest
     * const FillRequest = await prisma.fillRequest.create({
     *   data: {
     *     // ... data to create a FillRequest
     *   }
     * })
     * 
    **/
    create<T extends FillRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestCreateArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FillRequests.
     *     @param {FillRequestCreateManyArgs} args - Arguments to create many FillRequests.
     *     @example
     *     // Create many FillRequests
     *     const fillRequest = await prisma.fillRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FillRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FillRequest.
     * @param {FillRequestDeleteArgs} args - Arguments to delete one FillRequest.
     * @example
     * // Delete one FillRequest
     * const FillRequest = await prisma.fillRequest.delete({
     *   where: {
     *     // ... filter to delete one FillRequest
     *   }
     * })
     * 
    **/
    delete<T extends FillRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestDeleteArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FillRequest.
     * @param {FillRequestUpdateArgs} args - Arguments to update one FillRequest.
     * @example
     * // Update one FillRequest
     * const fillRequest = await prisma.fillRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FillRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestUpdateArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FillRequests.
     * @param {FillRequestDeleteManyArgs} args - Arguments to filter FillRequests to delete.
     * @example
     * // Delete a few FillRequests
     * const { count } = await prisma.fillRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FillRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FillRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FillRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FillRequests
     * const fillRequest = await prisma.fillRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FillRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FillRequest.
     * @param {FillRequestUpsertArgs} args - Arguments to update or create a FillRequest.
     * @example
     * // Update or create a FillRequest
     * const fillRequest = await prisma.fillRequest.upsert({
     *   create: {
     *     // ... data to create a FillRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FillRequest we want to update
     *   }
     * })
    **/
    upsert<T extends FillRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FillRequestUpsertArgs<ExtArgs>>
    ): Prisma__FillRequestClient<$Result.GetResult<Prisma.$FillRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more FillRequests that matches the filter.
     * @param {FillRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fillRequest = await prisma.fillRequest.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FillRequestFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FillRequest.
     * @param {FillRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fillRequest = await prisma.fillRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FillRequestAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FillRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestCountArgs} args - Arguments to filter FillRequests to count.
     * @example
     * // Count the number of FillRequests
     * const count = await prisma.fillRequest.count({
     *   where: {
     *     // ... the filter for the FillRequests we want to count
     *   }
     * })
    **/
    count<T extends FillRequestCountArgs>(
      args?: Subset<T, FillRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FillRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FillRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FillRequestAggregateArgs>(args: Subset<T, FillRequestAggregateArgs>): Prisma.PrismaPromise<GetFillRequestAggregateType<T>>

    /**
     * Group by FillRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillRequestGroupByArgs} args - Group by arguments.
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
      T extends FillRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FillRequestGroupByArgs['orderBy'] }
        : { orderBy?: FillRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FillRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFillRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FillRequest model
   */
  readonly fields: FillRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FillRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FillRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends FillRequest$userArgs<ExtArgs> = {}>(args?: Subset<T, FillRequest$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FillRequest model
   */ 
  interface FillRequestFieldRefs {
    readonly id: FieldRef<"FillRequest", 'String'>
    readonly userId: FieldRef<"FillRequest", 'String'>
    readonly amount: FieldRef<"FillRequest", 'Float'>
    readonly status: FieldRef<"FillRequest", 'FillStatus'>
    readonly createdAt: FieldRef<"FillRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"FillRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FillRequest findUnique
   */
  export type FillRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter, which FillRequest to fetch.
     */
    where: FillRequestWhereUniqueInput
  }


  /**
   * FillRequest findUniqueOrThrow
   */
  export type FillRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter, which FillRequest to fetch.
     */
    where: FillRequestWhereUniqueInput
  }


  /**
   * FillRequest findFirst
   */
  export type FillRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter, which FillRequest to fetch.
     */
    where?: FillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillRequests to fetch.
     */
    orderBy?: FillRequestOrderByWithRelationInput | FillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillRequests.
     */
    cursor?: FillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillRequests.
     */
    distinct?: FillRequestScalarFieldEnum | FillRequestScalarFieldEnum[]
  }


  /**
   * FillRequest findFirstOrThrow
   */
  export type FillRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter, which FillRequest to fetch.
     */
    where?: FillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillRequests to fetch.
     */
    orderBy?: FillRequestOrderByWithRelationInput | FillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillRequests.
     */
    cursor?: FillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillRequests.
     */
    distinct?: FillRequestScalarFieldEnum | FillRequestScalarFieldEnum[]
  }


  /**
   * FillRequest findMany
   */
  export type FillRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter, which FillRequests to fetch.
     */
    where?: FillRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillRequests to fetch.
     */
    orderBy?: FillRequestOrderByWithRelationInput | FillRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FillRequests.
     */
    cursor?: FillRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillRequests.
     */
    skip?: number
    distinct?: FillRequestScalarFieldEnum | FillRequestScalarFieldEnum[]
  }


  /**
   * FillRequest create
   */
  export type FillRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FillRequest.
     */
    data: XOR<FillRequestCreateInput, FillRequestUncheckedCreateInput>
  }


  /**
   * FillRequest createMany
   */
  export type FillRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FillRequests.
     */
    data: FillRequestCreateManyInput | FillRequestCreateManyInput[]
  }


  /**
   * FillRequest update
   */
  export type FillRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FillRequest.
     */
    data: XOR<FillRequestUpdateInput, FillRequestUncheckedUpdateInput>
    /**
     * Choose, which FillRequest to update.
     */
    where: FillRequestWhereUniqueInput
  }


  /**
   * FillRequest updateMany
   */
  export type FillRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FillRequests.
     */
    data: XOR<FillRequestUpdateManyMutationInput, FillRequestUncheckedUpdateManyInput>
    /**
     * Filter which FillRequests to update
     */
    where?: FillRequestWhereInput
  }


  /**
   * FillRequest upsert
   */
  export type FillRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FillRequest to update in case it exists.
     */
    where: FillRequestWhereUniqueInput
    /**
     * In case the FillRequest found by the `where` argument doesn't exist, create a new FillRequest with this data.
     */
    create: XOR<FillRequestCreateInput, FillRequestUncheckedCreateInput>
    /**
     * In case the FillRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FillRequestUpdateInput, FillRequestUncheckedUpdateInput>
  }


  /**
   * FillRequest delete
   */
  export type FillRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
    /**
     * Filter which FillRequest to delete.
     */
    where: FillRequestWhereUniqueInput
  }


  /**
   * FillRequest deleteMany
   */
  export type FillRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillRequests to delete
     */
    where?: FillRequestWhereInput
  }


  /**
   * FillRequest findRaw
   */
  export type FillRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FillRequest aggregateRaw
   */
  export type FillRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FillRequest.user
   */
  export type FillRequest$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * FillRequest without action
   */
  export type FillRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillRequest
     */
    select?: FillRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FillRequestInclude<ExtArgs> | null
  }



  /**
   * Model WithdrawRequests
   */

  export type AggregateWithdrawRequests = {
    _count: WithdrawRequestsCountAggregateOutputType | null
    _avg: WithdrawRequestsAvgAggregateOutputType | null
    _sum: WithdrawRequestsSumAggregateOutputType | null
    _min: WithdrawRequestsMinAggregateOutputType | null
    _max: WithdrawRequestsMaxAggregateOutputType | null
  }

  export type WithdrawRequestsAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawRequestsSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawRequestsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.FillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawRequestsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.FillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawRequestsCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawRequestsAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestsSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestsMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawRequestsMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawRequestsCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequests to aggregate.
     */
    where?: WithdrawRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestsOrderByWithRelationInput | WithdrawRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawRequests
    **/
    _count?: true | WithdrawRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawRequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawRequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawRequestsMaxAggregateInputType
  }

  export type GetWithdrawRequestsAggregateType<T extends WithdrawRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawRequests[P]>
      : GetScalarType<T[P], AggregateWithdrawRequests[P]>
  }




  export type WithdrawRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawRequestsWhereInput
    orderBy?: WithdrawRequestsOrderByWithAggregationInput | WithdrawRequestsOrderByWithAggregationInput[]
    by: WithdrawRequestsScalarFieldEnum[] | WithdrawRequestsScalarFieldEnum
    having?: WithdrawRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawRequestsCountAggregateInputType | true
    _avg?: WithdrawRequestsAvgAggregateInputType
    _sum?: WithdrawRequestsSumAggregateInputType
    _min?: WithdrawRequestsMinAggregateInputType
    _max?: WithdrawRequestsMaxAggregateInputType
  }

  export type WithdrawRequestsGroupByOutputType = {
    id: string
    userId: string
    amount: number
    status: $Enums.FillStatus
    createdAt: Date
    updatedAt: Date
    _count: WithdrawRequestsCountAggregateOutputType | null
    _avg: WithdrawRequestsAvgAggregateOutputType | null
    _sum: WithdrawRequestsSumAggregateOutputType | null
    _min: WithdrawRequestsMinAggregateOutputType | null
    _max: WithdrawRequestsMaxAggregateOutputType | null
  }

  type GetWithdrawRequestsGroupByPayload<T extends WithdrawRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawRequestsGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WithdrawRequests$userArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawRequests"]>

  export type WithdrawRequestsSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WithdrawRequests$userArgs<ExtArgs>
  }


  export type $WithdrawRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawRequests"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      status: $Enums.FillStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawRequests"]>
    composites: {}
  }


  type WithdrawRequestsGetPayload<S extends boolean | null | undefined | WithdrawRequestsDefaultArgs> = $Result.GetResult<Prisma.$WithdrawRequestsPayload, S>

  type WithdrawRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WithdrawRequestsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WithdrawRequestsCountAggregateInputType | true
    }

  export interface WithdrawRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawRequests'], meta: { name: 'WithdrawRequests' } }
    /**
     * Find zero or one WithdrawRequests that matches the filter.
     * @param {WithdrawRequestsFindUniqueArgs} args - Arguments to find a WithdrawRequests
     * @example
     * // Get one WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WithdrawRequestsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsFindUniqueArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WithdrawRequests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WithdrawRequestsFindUniqueOrThrowArgs} args - Arguments to find a WithdrawRequests
     * @example
     * // Get one WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WithdrawRequestsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WithdrawRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsFindFirstArgs} args - Arguments to find a WithdrawRequests
     * @example
     * // Get one WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WithdrawRequestsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsFindFirstArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WithdrawRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsFindFirstOrThrowArgs} args - Arguments to find a WithdrawRequests
     * @example
     * // Get one WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WithdrawRequestsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WithdrawRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findMany()
     * 
     * // Get first 10 WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawRequestsWithIdOnly = await prisma.withdrawRequests.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WithdrawRequestsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WithdrawRequests.
     * @param {WithdrawRequestsCreateArgs} args - Arguments to create a WithdrawRequests.
     * @example
     * // Create one WithdrawRequests
     * const WithdrawRequests = await prisma.withdrawRequests.create({
     *   data: {
     *     // ... data to create a WithdrawRequests
     *   }
     * })
     * 
    **/
    create<T extends WithdrawRequestsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsCreateArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WithdrawRequests.
     *     @param {WithdrawRequestsCreateManyArgs} args - Arguments to create many WithdrawRequests.
     *     @example
     *     // Create many WithdrawRequests
     *     const withdrawRequests = await prisma.withdrawRequests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WithdrawRequestsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawRequests.
     * @param {WithdrawRequestsDeleteArgs} args - Arguments to delete one WithdrawRequests.
     * @example
     * // Delete one WithdrawRequests
     * const WithdrawRequests = await prisma.withdrawRequests.delete({
     *   where: {
     *     // ... filter to delete one WithdrawRequests
     *   }
     * })
     * 
    **/
    delete<T extends WithdrawRequestsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsDeleteArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WithdrawRequests.
     * @param {WithdrawRequestsUpdateArgs} args - Arguments to update one WithdrawRequests.
     * @example
     * // Update one WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WithdrawRequestsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsUpdateArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WithdrawRequests.
     * @param {WithdrawRequestsDeleteManyArgs} args - Arguments to filter WithdrawRequests to delete.
     * @example
     * // Delete a few WithdrawRequests
     * const { count } = await prisma.withdrawRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WithdrawRequestsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawRequestsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WithdrawRequestsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawRequests.
     * @param {WithdrawRequestsUpsertArgs} args - Arguments to update or create a WithdrawRequests.
     * @example
     * // Update or create a WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequests.upsert({
     *   create: {
     *     // ... data to create a WithdrawRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawRequests we want to update
     *   }
     * })
    **/
    upsert<T extends WithdrawRequestsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawRequestsUpsertArgs<ExtArgs>>
    ): Prisma__WithdrawRequestsClient<$Result.GetResult<Prisma.$WithdrawRequestsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more WithdrawRequests that matches the filter.
     * @param {WithdrawRequestsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const withdrawRequests = await prisma.withdrawRequests.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WithdrawRequestsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WithdrawRequests.
     * @param {WithdrawRequestsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const withdrawRequests = await prisma.withdrawRequests.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WithdrawRequestsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsCountArgs} args - Arguments to filter WithdrawRequests to count.
     * @example
     * // Count the number of WithdrawRequests
     * const count = await prisma.withdrawRequests.count({
     *   where: {
     *     // ... the filter for the WithdrawRequests we want to count
     *   }
     * })
    **/
    count<T extends WithdrawRequestsCountArgs>(
      args?: Subset<T, WithdrawRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawRequestsAggregateArgs>(args: Subset<T, WithdrawRequestsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawRequestsAggregateType<T>>

    /**
     * Group by WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestsGroupByArgs} args - Group by arguments.
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
      T extends WithdrawRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawRequestsGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawRequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawRequests model
   */
  readonly fields: WithdrawRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends WithdrawRequests$userArgs<ExtArgs> = {}>(args?: Subset<T, WithdrawRequests$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WithdrawRequests model
   */ 
  interface WithdrawRequestsFieldRefs {
    readonly id: FieldRef<"WithdrawRequests", 'String'>
    readonly userId: FieldRef<"WithdrawRequests", 'String'>
    readonly amount: FieldRef<"WithdrawRequests", 'Float'>
    readonly status: FieldRef<"WithdrawRequests", 'FillStatus'>
    readonly createdAt: FieldRef<"WithdrawRequests", 'DateTime'>
    readonly updatedAt: FieldRef<"WithdrawRequests", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WithdrawRequests findUnique
   */
  export type WithdrawRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where: WithdrawRequestsWhereUniqueInput
  }


  /**
   * WithdrawRequests findUniqueOrThrow
   */
  export type WithdrawRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where: WithdrawRequestsWhereUniqueInput
  }


  /**
   * WithdrawRequests findFirst
   */
  export type WithdrawRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where?: WithdrawRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestsOrderByWithRelationInput | WithdrawRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestsScalarFieldEnum | WithdrawRequestsScalarFieldEnum[]
  }


  /**
   * WithdrawRequests findFirstOrThrow
   */
  export type WithdrawRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where?: WithdrawRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestsOrderByWithRelationInput | WithdrawRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestsScalarFieldEnum | WithdrawRequestsScalarFieldEnum[]
  }


  /**
   * WithdrawRequests findMany
   */
  export type WithdrawRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where?: WithdrawRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestsOrderByWithRelationInput | WithdrawRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawRequests.
     */
    cursor?: WithdrawRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    distinct?: WithdrawRequestsScalarFieldEnum | WithdrawRequestsScalarFieldEnum[]
  }


  /**
   * WithdrawRequests create
   */
  export type WithdrawRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a WithdrawRequests.
     */
    data: XOR<WithdrawRequestsCreateInput, WithdrawRequestsUncheckedCreateInput>
  }


  /**
   * WithdrawRequests createMany
   */
  export type WithdrawRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawRequests.
     */
    data: WithdrawRequestsCreateManyInput | WithdrawRequestsCreateManyInput[]
  }


  /**
   * WithdrawRequests update
   */
  export type WithdrawRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a WithdrawRequests.
     */
    data: XOR<WithdrawRequestsUpdateInput, WithdrawRequestsUncheckedUpdateInput>
    /**
     * Choose, which WithdrawRequests to update.
     */
    where: WithdrawRequestsWhereUniqueInput
  }


  /**
   * WithdrawRequests updateMany
   */
  export type WithdrawRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawRequests.
     */
    data: XOR<WithdrawRequestsUpdateManyMutationInput, WithdrawRequestsUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawRequests to update
     */
    where?: WithdrawRequestsWhereInput
  }


  /**
   * WithdrawRequests upsert
   */
  export type WithdrawRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the WithdrawRequests to update in case it exists.
     */
    where: WithdrawRequestsWhereUniqueInput
    /**
     * In case the WithdrawRequests found by the `where` argument doesn't exist, create a new WithdrawRequests with this data.
     */
    create: XOR<WithdrawRequestsCreateInput, WithdrawRequestsUncheckedCreateInput>
    /**
     * In case the WithdrawRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawRequestsUpdateInput, WithdrawRequestsUncheckedUpdateInput>
  }


  /**
   * WithdrawRequests delete
   */
  export type WithdrawRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
    /**
     * Filter which WithdrawRequests to delete.
     */
    where: WithdrawRequestsWhereUniqueInput
  }


  /**
   * WithdrawRequests deleteMany
   */
  export type WithdrawRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequests to delete
     */
    where?: WithdrawRequestsWhereInput
  }


  /**
   * WithdrawRequests findRaw
   */
  export type WithdrawRequestsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WithdrawRequests aggregateRaw
   */
  export type WithdrawRequestsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WithdrawRequests.user
   */
  export type WithdrawRequests$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * WithdrawRequests without action
   */
  export type WithdrawRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequests
     */
    select?: WithdrawRequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawRequestsInclude<ExtArgs> | null
  }



  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    image: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    image: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    image: number
    theme: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    image?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    image?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    image?: true
    theme?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    image: string
    theme: string[]
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    theme?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    image?: boolean
    theme?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string
      theme: string[]
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }


  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends BlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogCreateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogs.
     *     @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends BlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends BlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * @param {BlogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blog = await prisma.blog.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BlogFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Blog.
     * @param {BlogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blog = await prisma.blog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BlogAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly theme: FieldRef<"Blog", 'String[]'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }


  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }


  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }


  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }


  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }


  /**
   * Blog findRaw
   */
  export type BlogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Blog aggregateRaw
   */
  export type BlogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    emailVerified: 'emailVerified',
    verifyToken: 'verifyToken',
    verifyTokenExpiry: 'verifyTokenExpiry',
    passwordRecoverCode: 'passwordRecoverCode',
    phone: 'phone',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    blocked: 'blocked',
    role: 'role',
    balance: 'balance'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FillRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FillRequestScalarFieldEnum = (typeof FillRequestScalarFieldEnum)[keyof typeof FillRequestScalarFieldEnum]


  export const WithdrawRequestsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawRequestsScalarFieldEnum = (typeof WithdrawRequestsScalarFieldEnum)[keyof typeof WithdrawRequestsScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    image: 'image',
    theme: 'theme',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FillStatus'
   */
  export type EnumFillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FillStatus'>
    


  /**
   * Reference to a field of type 'FillStatus[]'
   */
  export type ListEnumFillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FillStatus[]'>
    


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
    username?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordRecoverCode?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blocked?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    balance?: FloatFilter<"User"> | number
    FillRequests?: FillRequestListRelationFilter
    WithdrawRequests?: WithdrawRequestsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
    passwordRecoverCode?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocked?: SortOrder
    role?: SortOrder
    balance?: SortOrder
    FillRequests?: FillRequestOrderByRelationAggregateInput
    WithdrawRequests?: WithdrawRequestsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordRecoverCode?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blocked?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    balance?: FloatFilter<"User"> | number
    FillRequests?: FillRequestListRelationFilter
    WithdrawRequests?: WithdrawRequestsListRelationFilter
  }, "id" | "username" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
    passwordRecoverCode?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocked?: SortOrder
    role?: SortOrder
    balance?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verifyTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordRecoverCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    blocked?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    balance?: FloatWithAggregatesFilter<"User"> | number
  }

  export type FillRequestWhereInput = {
    AND?: FillRequestWhereInput | FillRequestWhereInput[]
    OR?: FillRequestWhereInput[]
    NOT?: FillRequestWhereInput | FillRequestWhereInput[]
    id?: StringFilter<"FillRequest"> | string
    userId?: StringFilter<"FillRequest"> | string
    amount?: FloatFilter<"FillRequest"> | number
    status?: EnumFillStatusFilter<"FillRequest"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"FillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FillRequest"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FillRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FillRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FillRequestWhereInput | FillRequestWhereInput[]
    OR?: FillRequestWhereInput[]
    NOT?: FillRequestWhereInput | FillRequestWhereInput[]
    userId?: StringFilter<"FillRequest"> | string
    amount?: FloatFilter<"FillRequest"> | number
    status?: EnumFillStatusFilter<"FillRequest"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"FillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FillRequest"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type FillRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FillRequestCountOrderByAggregateInput
    _avg?: FillRequestAvgOrderByAggregateInput
    _max?: FillRequestMaxOrderByAggregateInput
    _min?: FillRequestMinOrderByAggregateInput
    _sum?: FillRequestSumOrderByAggregateInput
  }

  export type FillRequestScalarWhereWithAggregatesInput = {
    AND?: FillRequestScalarWhereWithAggregatesInput | FillRequestScalarWhereWithAggregatesInput[]
    OR?: FillRequestScalarWhereWithAggregatesInput[]
    NOT?: FillRequestScalarWhereWithAggregatesInput | FillRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FillRequest"> | string
    userId?: StringWithAggregatesFilter<"FillRequest"> | string
    amount?: FloatWithAggregatesFilter<"FillRequest"> | number
    status?: EnumFillStatusWithAggregatesFilter<"FillRequest"> | $Enums.FillStatus
    createdAt?: DateTimeWithAggregatesFilter<"FillRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FillRequest"> | Date | string
  }

  export type WithdrawRequestsWhereInput = {
    AND?: WithdrawRequestsWhereInput | WithdrawRequestsWhereInput[]
    OR?: WithdrawRequestsWhereInput[]
    NOT?: WithdrawRequestsWhereInput | WithdrawRequestsWhereInput[]
    id?: StringFilter<"WithdrawRequests"> | string
    userId?: StringFilter<"WithdrawRequests"> | string
    amount?: FloatFilter<"WithdrawRequests"> | number
    status?: EnumFillStatusFilter<"WithdrawRequests"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type WithdrawRequestsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawRequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawRequestsWhereInput | WithdrawRequestsWhereInput[]
    OR?: WithdrawRequestsWhereInput[]
    NOT?: WithdrawRequestsWhereInput | WithdrawRequestsWhereInput[]
    userId?: StringFilter<"WithdrawRequests"> | string
    amount?: FloatFilter<"WithdrawRequests"> | number
    status?: EnumFillStatusFilter<"WithdrawRequests"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type WithdrawRequestsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawRequestsCountOrderByAggregateInput
    _avg?: WithdrawRequestsAvgOrderByAggregateInput
    _max?: WithdrawRequestsMaxOrderByAggregateInput
    _min?: WithdrawRequestsMinOrderByAggregateInput
    _sum?: WithdrawRequestsSumOrderByAggregateInput
  }

  export type WithdrawRequestsScalarWhereWithAggregatesInput = {
    AND?: WithdrawRequestsScalarWhereWithAggregatesInput | WithdrawRequestsScalarWhereWithAggregatesInput[]
    OR?: WithdrawRequestsScalarWhereWithAggregatesInput[]
    NOT?: WithdrawRequestsScalarWhereWithAggregatesInput | WithdrawRequestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WithdrawRequests"> | string
    userId?: StringWithAggregatesFilter<"WithdrawRequests"> | string
    amount?: FloatWithAggregatesFilter<"WithdrawRequests"> | number
    status?: EnumFillStatusWithAggregatesFilter<"WithdrawRequests"> | $Enums.FillStatus
    createdAt?: DateTimeWithAggregatesFilter<"WithdrawRequests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WithdrawRequests"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    theme?: StringNullableListFilter<"Blog">
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    theme?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    image?: StringFilter<"Blog"> | string
    theme?: StringNullableListFilter<"Blog">
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    theme?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringWithAggregatesFilter<"Blog"> | string
    theme?: StringNullableListFilter<"Blog">
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    FillRequests?: FillRequestCreateNestedManyWithoutUserInput
    WithdrawRequests?: WithdrawRequestsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    FillRequests?: FillRequestUncheckedCreateNestedManyWithoutUserInput
    WithdrawRequests?: WithdrawRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    FillRequests?: FillRequestUpdateManyWithoutUserNestedInput
    WithdrawRequests?: WithdrawRequestsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    FillRequests?: FillRequestUncheckedUpdateManyWithoutUserNestedInput
    WithdrawRequests?: WithdrawRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FillRequestCreateInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutFillRequestsInput
  }

  export type FillRequestUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillRequestUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFillRequestsNestedInput
  }

  export type FillRequestUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillRequestCreateManyInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillRequestUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillRequestUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsCreateInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutWithdrawRequestsInput
  }

  export type WithdrawRequestsUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestsUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutWithdrawRequestsNestedInput
  }

  export type WithdrawRequestsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsCreateManyInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestsUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    image: string
    theme?: BlogCreatethemeInput | string[]
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    image: string
    theme?: BlogCreatethemeInput | string[]
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    theme?: BlogUpdatethemeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    theme?: BlogUpdatethemeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: string
    image: string
    theme?: BlogCreatethemeInput | string[]
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    theme?: BlogUpdatethemeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    image?: StringFieldUpdateOperationsInput | string
    theme?: BlogUpdatethemeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FillRequestListRelationFilter = {
    every?: FillRequestWhereInput
    some?: FillRequestWhereInput
    none?: FillRequestWhereInput
  }

  export type WithdrawRequestsListRelationFilter = {
    every?: WithdrawRequestsWhereInput
    some?: WithdrawRequestsWhereInput
    none?: WithdrawRequestsWhereInput
  }

  export type FillRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
    passwordRecoverCode?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocked?: SortOrder
    role?: SortOrder
    balance?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
    passwordRecoverCode?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocked?: SortOrder
    role?: SortOrder
    balance?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
    verifyTokenExpiry?: SortOrder
    passwordRecoverCode?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blocked?: SortOrder
    role?: SortOrder
    balance?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumFillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FillStatus | EnumFillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFillStatusFilter<$PrismaModel> | $Enums.FillStatus
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FillRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FillRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumFillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FillStatus | EnumFillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFillStatusWithAggregatesFilter<$PrismaModel> | $Enums.FillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFillStatusFilter<$PrismaModel>
    _max?: NestedEnumFillStatusFilter<$PrismaModel>
  }

  export type WithdrawRequestsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawRequestsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawRequestsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    theme?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput> | FillRequestCreateWithoutUserInput[] | FillRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FillRequestCreateOrConnectWithoutUserInput | FillRequestCreateOrConnectWithoutUserInput[]
    createMany?: FillRequestCreateManyUserInputEnvelope
    connect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
  }

  export type WithdrawRequestsCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput> | WithdrawRequestsCreateWithoutUserInput[] | WithdrawRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestsCreateOrConnectWithoutUserInput | WithdrawRequestsCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawRequestsCreateManyUserInputEnvelope
    connect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
  }

  export type FillRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput> | FillRequestCreateWithoutUserInput[] | FillRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FillRequestCreateOrConnectWithoutUserInput | FillRequestCreateOrConnectWithoutUserInput[]
    createMany?: FillRequestCreateManyUserInputEnvelope
    connect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
  }

  export type WithdrawRequestsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput> | WithdrawRequestsCreateWithoutUserInput[] | WithdrawRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestsCreateOrConnectWithoutUserInput | WithdrawRequestsCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawRequestsCreateManyUserInputEnvelope
    connect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FillRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput> | FillRequestCreateWithoutUserInput[] | FillRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FillRequestCreateOrConnectWithoutUserInput | FillRequestCreateOrConnectWithoutUserInput[]
    upsert?: FillRequestUpsertWithWhereUniqueWithoutUserInput | FillRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FillRequestCreateManyUserInputEnvelope
    set?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    disconnect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    delete?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    connect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    update?: FillRequestUpdateWithWhereUniqueWithoutUserInput | FillRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FillRequestUpdateManyWithWhereWithoutUserInput | FillRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FillRequestScalarWhereInput | FillRequestScalarWhereInput[]
  }

  export type WithdrawRequestsUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput> | WithdrawRequestsCreateWithoutUserInput[] | WithdrawRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestsCreateOrConnectWithoutUserInput | WithdrawRequestsCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawRequestsUpsertWithWhereUniqueWithoutUserInput | WithdrawRequestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawRequestsCreateManyUserInputEnvelope
    set?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    disconnect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    delete?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    connect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    update?: WithdrawRequestsUpdateWithWhereUniqueWithoutUserInput | WithdrawRequestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawRequestsUpdateManyWithWhereWithoutUserInput | WithdrawRequestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawRequestsScalarWhereInput | WithdrawRequestsScalarWhereInput[]
  }

  export type FillRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput> | FillRequestCreateWithoutUserInput[] | FillRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FillRequestCreateOrConnectWithoutUserInput | FillRequestCreateOrConnectWithoutUserInput[]
    upsert?: FillRequestUpsertWithWhereUniqueWithoutUserInput | FillRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FillRequestCreateManyUserInputEnvelope
    set?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    disconnect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    delete?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    connect?: FillRequestWhereUniqueInput | FillRequestWhereUniqueInput[]
    update?: FillRequestUpdateWithWhereUniqueWithoutUserInput | FillRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FillRequestUpdateManyWithWhereWithoutUserInput | FillRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FillRequestScalarWhereInput | FillRequestScalarWhereInput[]
  }

  export type WithdrawRequestsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput> | WithdrawRequestsCreateWithoutUserInput[] | WithdrawRequestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestsCreateOrConnectWithoutUserInput | WithdrawRequestsCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawRequestsUpsertWithWhereUniqueWithoutUserInput | WithdrawRequestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawRequestsCreateManyUserInputEnvelope
    set?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    disconnect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    delete?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    connect?: WithdrawRequestsWhereUniqueInput | WithdrawRequestsWhereUniqueInput[]
    update?: WithdrawRequestsUpdateWithWhereUniqueWithoutUserInput | WithdrawRequestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawRequestsUpdateManyWithWhereWithoutUserInput | WithdrawRequestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawRequestsScalarWhereInput | WithdrawRequestsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFillRequestsInput = {
    create?: XOR<UserCreateWithoutFillRequestsInput, UserUncheckedCreateWithoutFillRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFillRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFillStatusFieldUpdateOperationsInput = {
    set?: $Enums.FillStatus
  }

  export type UserUpdateOneWithoutFillRequestsNestedInput = {
    create?: XOR<UserCreateWithoutFillRequestsInput, UserUncheckedCreateWithoutFillRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFillRequestsInput
    upsert?: UserUpsertWithoutFillRequestsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFillRequestsInput, UserUpdateWithoutFillRequestsInput>, UserUncheckedUpdateWithoutFillRequestsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawRequestsInput = {
    create?: XOR<UserCreateWithoutWithdrawRequestsInput, UserUncheckedCreateWithoutWithdrawRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutWithdrawRequestsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawRequestsInput, UserUncheckedCreateWithoutWithdrawRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawRequestsInput
    upsert?: UserUpsertWithoutWithdrawRequestsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawRequestsInput, UserUpdateWithoutWithdrawRequestsInput>, UserUncheckedUpdateWithoutWithdrawRequestsInput>
  }

  export type BlogCreatethemeInput = {
    set: string[]
  }

  export type BlogUpdatethemeInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumFillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FillStatus | EnumFillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFillStatusFilter<$PrismaModel> | $Enums.FillStatus
  }

  export type NestedEnumFillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FillStatus | EnumFillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FillStatus[] | ListEnumFillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFillStatusWithAggregatesFilter<$PrismaModel> | $Enums.FillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFillStatusFilter<$PrismaModel>
    _max?: NestedEnumFillStatusFilter<$PrismaModel>
  }

  export type FillRequestCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillRequestUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillRequestCreateOrConnectWithoutUserInput = {
    where: FillRequestWhereUniqueInput
    create: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput>
  }

  export type FillRequestCreateManyUserInputEnvelope = {
    data: FillRequestCreateManyUserInput | FillRequestCreateManyUserInput[]
  }

  export type WithdrawRequestsCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestsUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestsCreateOrConnectWithoutUserInput = {
    where: WithdrawRequestsWhereUniqueInput
    create: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput>
  }

  export type WithdrawRequestsCreateManyUserInputEnvelope = {
    data: WithdrawRequestsCreateManyUserInput | WithdrawRequestsCreateManyUserInput[]
  }

  export type FillRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: FillRequestWhereUniqueInput
    update: XOR<FillRequestUpdateWithoutUserInput, FillRequestUncheckedUpdateWithoutUserInput>
    create: XOR<FillRequestCreateWithoutUserInput, FillRequestUncheckedCreateWithoutUserInput>
  }

  export type FillRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: FillRequestWhereUniqueInput
    data: XOR<FillRequestUpdateWithoutUserInput, FillRequestUncheckedUpdateWithoutUserInput>
  }

  export type FillRequestUpdateManyWithWhereWithoutUserInput = {
    where: FillRequestScalarWhereInput
    data: XOR<FillRequestUpdateManyMutationInput, FillRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type FillRequestScalarWhereInput = {
    AND?: FillRequestScalarWhereInput | FillRequestScalarWhereInput[]
    OR?: FillRequestScalarWhereInput[]
    NOT?: FillRequestScalarWhereInput | FillRequestScalarWhereInput[]
    id?: StringFilter<"FillRequest"> | string
    userId?: StringFilter<"FillRequest"> | string
    amount?: FloatFilter<"FillRequest"> | number
    status?: EnumFillStatusFilter<"FillRequest"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"FillRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FillRequest"> | Date | string
  }

  export type WithdrawRequestsUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawRequestsWhereUniqueInput
    update: XOR<WithdrawRequestsUpdateWithoutUserInput, WithdrawRequestsUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawRequestsCreateWithoutUserInput, WithdrawRequestsUncheckedCreateWithoutUserInput>
  }

  export type WithdrawRequestsUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawRequestsWhereUniqueInput
    data: XOR<WithdrawRequestsUpdateWithoutUserInput, WithdrawRequestsUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawRequestsUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawRequestsScalarWhereInput
    data: XOR<WithdrawRequestsUpdateManyMutationInput, WithdrawRequestsUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawRequestsScalarWhereInput = {
    AND?: WithdrawRequestsScalarWhereInput | WithdrawRequestsScalarWhereInput[]
    OR?: WithdrawRequestsScalarWhereInput[]
    NOT?: WithdrawRequestsScalarWhereInput | WithdrawRequestsScalarWhereInput[]
    id?: StringFilter<"WithdrawRequests"> | string
    userId?: StringFilter<"WithdrawRequests"> | string
    amount?: FloatFilter<"WithdrawRequests"> | number
    status?: EnumFillStatusFilter<"WithdrawRequests"> | $Enums.FillStatus
    createdAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
    updatedAt?: DateTimeFilter<"WithdrawRequests"> | Date | string
  }

  export type UserCreateWithoutFillRequestsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    WithdrawRequests?: WithdrawRequestsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFillRequestsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    WithdrawRequests?: WithdrawRequestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFillRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFillRequestsInput, UserUncheckedCreateWithoutFillRequestsInput>
  }

  export type UserUpsertWithoutFillRequestsInput = {
    update: XOR<UserUpdateWithoutFillRequestsInput, UserUncheckedUpdateWithoutFillRequestsInput>
    create: XOR<UserCreateWithoutFillRequestsInput, UserUncheckedCreateWithoutFillRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFillRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFillRequestsInput, UserUncheckedUpdateWithoutFillRequestsInput>
  }

  export type UserUpdateWithoutFillRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    WithdrawRequests?: WithdrawRequestsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFillRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    WithdrawRequests?: WithdrawRequestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawRequestsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    FillRequests?: FillRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawRequestsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    verifyToken?: string | null
    verifyTokenExpiry?: Date | string | null
    passwordRecoverCode?: string | null
    phone: string
    hashedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blocked?: boolean
    role?: $Enums.Role
    balance?: number
    FillRequests?: FillRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawRequestsInput, UserUncheckedCreateWithoutWithdrawRequestsInput>
  }

  export type UserUpsertWithoutWithdrawRequestsInput = {
    update: XOR<UserUpdateWithoutWithdrawRequestsInput, UserUncheckedUpdateWithoutWithdrawRequestsInput>
    create: XOR<UserCreateWithoutWithdrawRequestsInput, UserUncheckedCreateWithoutWithdrawRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawRequestsInput, UserUncheckedUpdateWithoutWithdrawRequestsInput>
  }

  export type UserUpdateWithoutWithdrawRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    FillRequests?: FillRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    verifyTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordRecoverCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    balance?: FloatFieldUpdateOperationsInput | number
    FillRequests?: FillRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FillRequestCreateManyUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawRequestsCreateManyUserInput = {
    id?: string
    amount: number
    status?: $Enums.FillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillRequestUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillRequestUncheckedUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillRequestUncheckedUpdateManyWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsUncheckedUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestsUncheckedUpdateManyWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumFillStatusFieldUpdateOperationsInput | $Enums.FillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FillRequestDefaultArgs instead
     */
    export type FillRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FillRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawRequestsDefaultArgs instead
     */
    export type WithdrawRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawRequestsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogDefaultArgs instead
     */
    export type BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogDefaultArgs<ExtArgs>

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