/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Represents the minimum and maximum value of a lease’s property. */
export type Boundary = {
  __typename?: 'Boundary';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

/** A range of accepted values for properties of a lease. */
export type LeaseBoundaries = {
  __typename?: 'LeaseBoundaries';
  /** The range of accepted values for an object’s year of construction. */
  objectYear: YearBoundary;
  /** The range of accepted values for the purchase price, the price to pay in order to buy the given piece of equipment. */
  purchasePrice: Boundary;
};

/** Type representing a successful lease calculation. */
export type LeaseCalculation = {
  __typename?: 'LeaseCalculation';
  /** The lump sum at the end of the lease period. */
  balloonPayment: Scalars['Float']['output'];
  /** The initial payment that is required to lease the piece of equipment. */
  downPayment: Scalars['Float']['output'];
  /** The amount Beequip charges to process the lease. */
  handlingFee: Scalars['Float']['output'];
  /** The amount the customer has to pay each month for the lease. */
  monthlyPayment: Scalars['Float']['output'];
  /** The duration of the lease, in months. */
  tenor: Scalars['Int']['output'];
  /** The sum of all costs paid during the lease. */
  totalCosts: Scalars['Float']['output'];
};

/** Input type for looking up a calculation. */
export type LeaseCalculationInput = {
  /** The details of the piece of equipment to be leased. */
  object: ObjectInput;
  /** The price to pay in order to buy the given piece of equipment. */
  purchasePrice: Scalars['Float']['input'];
};

/** Input type for an object. */
export type ObjectInput = {
  /** The brand of the equipment, e.g. DAF. */
  brand: Scalars['String']['input'];
  /** The type of the equipment, e.g. XF480. */
  type: Scalars['String']['input'];
  /** The production year of the equipment. */
  year: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve the minimum and maximum allowed values for the lease's properties. */
  boundaries: LeaseBoundaries;
  /** Perform a calculation of the lease price of an object. */
  leaseCalculation: LeaseCalculation;
};


export type QueryLeaseCalculationArgs = {
  input: LeaseCalculationInput;
};

/** Represents the minimum and maximum year value of a lease’s property. */
export type YearBoundary = {
  __typename?: 'YearBoundary';
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
};

export type LeaseCalculationQueryVariables = Exact<{
  input: LeaseCalculationInput;
}>;


export type LeaseCalculationQuery = { __typename?: 'Query', leaseCalculation: { __typename?: 'LeaseCalculation', tenor: number, totalCosts: number, monthlyPayment: number, balloonPayment: number, handlingFee: number, downPayment: number } };

export type BoundariesQueryVariables = Exact<{ [key: string]: never; }>;


export type BoundariesQuery = { __typename?: 'Query', boundaries: { __typename?: 'LeaseBoundaries', objectYear: { __typename?: 'YearBoundary', max: number, min: number }, purchasePrice: { __typename?: 'Boundary', max: number, min: number } } };


export const LeaseCalculationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LeaseCalculation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaseCalculationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaseCalculation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenor"}},{"kind":"Field","name":{"kind":"Name","value":"totalCosts"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyPayment"}},{"kind":"Field","name":{"kind":"Name","value":"balloonPayment"}},{"kind":"Field","name":{"kind":"Name","value":"handlingFee"}},{"kind":"Field","name":{"kind":"Name","value":"downPayment"}}]}}]}}]} as unknown as DocumentNode<LeaseCalculationQuery, LeaseCalculationQueryVariables>;
export const BoundariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Boundaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boundaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"objectYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}}]}}]} as unknown as DocumentNode<BoundariesQuery, BoundariesQueryVariables>;