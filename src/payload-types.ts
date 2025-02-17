/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    admins: Admin;
    operators: Operator;
    users: User;
    coupons: Coupon;
    purchases: Purchase;
    sectors: Sector;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  name: string;
  cpf: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "operators".
 */
export interface Operator {
  id: string;
  name: string;
  cpf: string;
  status?: ('active' | 'inactive') | null;
  sector: string | Sector;
  registeredBy?: (string | null) | Admin;
  updatedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sectors".
 */
export interface Sector {
  id: string;
  title: string;
  registeredBy?: (string | null) | Admin;
  updatedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name: string;
  cpf: string;
  oab: string;
  score?: number | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coupons".
 */
export interface Coupon {
  id: string;
  title: string;
  description?: string | null;
  sector: string | Sector;
  value: number;
  expirationDays: number;
  registeredBy?: (string | null) | Admin;
  updatedBy?: (string | null) | Admin;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "purchases".
 */
export interface Purchase {
  id: string;
  title: string;
  description?: string | null;
  user: string | User;
  coupon: string | Coupon;
  status?: ('active' | 'inactive') | null;
  acquisitionDate?: string | null;
  expirationDate?: string | null;
  registeredBy?: (string | null) | Operator;
  updatedBy?: (string | null) | Operator;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'admins';
        value: string | Admin;
      }
    | {
        relationTo: 'operators';
        value: string | Operator;
      }
    | {
        relationTo: 'users';
        value: string | User;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}