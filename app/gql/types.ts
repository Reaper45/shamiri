import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type CharacterFragment = { __typename?: 'Character', id?: string | null, name?: string | null, type?: string | null, created?: string | null, status?: string | null, gender?: string | null, image?: string | null, species?: string | null };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, created?: string | null, dimension?: string | null, residents: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, type?: string | null, created?: string | null, status?: string | null, gender?: string | null, image?: string | null, species?: string | null, origin?: { __typename?: 'Location', name?: string | null } | null } | null> } | null };

export type GetLocationsQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetLocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', info?: { __typename?: 'Info', count?: number | null, next?: number | null, prev?: number | null, pages?: number | null } | null, results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, created?: string | null } | null> | null } | null };

export type GetResidentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetResidentByIdQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, name?: string | null, type?: string | null, created?: string | null, status?: string | null, gender?: string | null, image?: string | null, species?: string | null, episodes: Array<{ __typename?: 'Episode', id?: string | null, episode?: string | null, name?: string | null } | null> } | null };

export const CharacterFragmentDoc = gql`
    fragment character on Character {
  id
  name
  type
  created
  status
  gender
  image
  species
}
    `;
export const GetLocationByIdDocument = gql`
    query GetLocationById($id: ID!) {
  location(id: $id) {
    id
    name
    type
    created
    dimension
    residents {
      ...character
      origin {
        name
      }
    }
  }
}
    ${CharacterFragmentDoc}`;

/**
 * __useGetLocationByIdQuery__
 *
 * To run a query within a React component, call `useGetLocationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables> & ({ variables: GetLocationByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
      }
export function useGetLocationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
        }
export function useGetLocationByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
        }
export type GetLocationByIdQueryHookResult = ReturnType<typeof useGetLocationByIdQuery>;
export type GetLocationByIdLazyQueryHookResult = ReturnType<typeof useGetLocationByIdLazyQuery>;
export type GetLocationByIdSuspenseQueryHookResult = ReturnType<typeof useGetLocationByIdSuspenseQuery>;
export type GetLocationByIdQueryResult = Apollo.QueryResult<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($name: String, $page: Int, $type: String) {
  locations(page: $page, filter: {name: $name, type: $type}) {
    info {
      count
      next
      prev
      pages
    }
    results {
      id
      name
      type
      created
    }
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      page: // value for 'page'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export function useGetLocationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsSuspenseQueryHookResult = ReturnType<typeof useGetLocationsSuspenseQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetResidentByIdDocument = gql`
    query GetResidentById($id: ID!) {
  character(id: $id) {
    id
    ...character
    episodes: episode {
      id
      episode
      name
    }
  }
}
    ${CharacterFragmentDoc}`;

/**
 * __useGetResidentByIdQuery__
 *
 * To run a query within a React component, call `useGetResidentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResidentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResidentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetResidentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetResidentByIdQuery, GetResidentByIdQueryVariables> & ({ variables: GetResidentByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResidentByIdQuery, GetResidentByIdQueryVariables>(GetResidentByIdDocument, options);
      }
export function useGetResidentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResidentByIdQuery, GetResidentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResidentByIdQuery, GetResidentByIdQueryVariables>(GetResidentByIdDocument, options);
        }
export function useGetResidentByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetResidentByIdQuery, GetResidentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResidentByIdQuery, GetResidentByIdQueryVariables>(GetResidentByIdDocument, options);
        }
export type GetResidentByIdQueryHookResult = ReturnType<typeof useGetResidentByIdQuery>;
export type GetResidentByIdLazyQueryHookResult = ReturnType<typeof useGetResidentByIdLazyQuery>;
export type GetResidentByIdSuspenseQueryHookResult = ReturnType<typeof useGetResidentByIdSuspenseQuery>;
export type GetResidentByIdQueryResult = Apollo.QueryResult<GetResidentByIdQuery, GetResidentByIdQueryVariables>;