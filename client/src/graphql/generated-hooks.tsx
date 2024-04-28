/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  author: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type LoggedInUser = {
  __typename?: 'LoggedInUser';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  occupation?: Maybe<Scalars['String']['output']>;
};

export type LongBook = Book & {
  __typename?: 'LongBook';
  author: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  whyitslong?: Maybe<Scalars['String']['output']>;
};

export type NormalBook = Book & {
  __typename?: 'NormalBook';
  author: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Book>>;
  loggedInUser?: Maybe<LoggedInUser>;
};

export type BooksQueryVariables = Exact<{ [key: string]: never }>;

export type BooksQuery = {
  __typename?: 'Query';
  books?: Array<
    | {
        __typename?: 'LongBook';
        whyitslong?: string | null;
        id: number;
        author: string;
        title: string;
      }
    | { __typename?: 'NormalBook'; id: number; author: string; title: string }
  > | null;
};

export type LoggedInUserQueryVariables = Exact<{ [key: string]: never }>;

export type LoggedInUserQuery = {
  __typename?: 'Query';
  loggedInUser?: {
    __typename?: 'LoggedInUser';
    id: string;
    name: string;
    occupation?: string | null;
  } | null;
};

export type UserFragmentFragment = {
  __typename?: 'LoggedInUser';
  id: string;
  name: string;
  occupation?: string | null;
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on LoggedInUser {
    id
    name
    occupation
  }
`;
export const BooksDocument = gql`
  query Books {
    books {
      id
      author
      title
      ... on LongBook {
        whyitslong
      }
    }
  }
`;
export type BooksComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<BooksQuery, BooksQueryVariables>,
  'query'
>;

export const BooksComponent = (props: BooksComponentProps) => (
  <ApolloReactComponents.Query<BooksQuery, BooksQueryVariables> query={BooksDocument} {...props} />
);

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export function useBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export function useBooksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksSuspenseQueryHookResult = ReturnType<typeof useBooksSuspenseQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const LoggedInUserDocument = gql`
  query LoggedInUser {
    loggedInUser {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type LoggedInUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<LoggedInUserQuery, LoggedInUserQueryVariables>,
  'query'
>;

export const LoggedInUserComponent = (props: LoggedInUserComponentProps) => (
  <ApolloReactComponents.Query<LoggedInUserQuery, LoggedInUserQueryVariables>
    query={LoggedInUserDocument}
    {...props}
  />
);

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(
  baseOptions?: Apollo.QueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(
    LoggedInUserDocument,
    options
  );
}
export function useLoggedInUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(
    LoggedInUserDocument,
    options
  );
}
export function useLoggedInUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(
    LoggedInUserDocument,
    options
  );
}
export type LoggedInUserQueryHookResult = ReturnType<typeof useLoggedInUserQuery>;
export type LoggedInUserLazyQueryHookResult = ReturnType<typeof useLoggedInUserLazyQuery>;
export type LoggedInUserSuspenseQueryHookResult = ReturnType<typeof useLoggedInUserSuspenseQuery>;
export type LoggedInUserQueryResult = Apollo.QueryResult<
  LoggedInUserQuery,
  LoggedInUserQueryVariables
>;
