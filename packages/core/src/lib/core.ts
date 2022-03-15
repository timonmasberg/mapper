import { mapReturn } from './map';
import { getMapping } from './mappings';
import {
    ERROR_HANDLER,
    MAPPINGS,
    METADATA_MAP,
    NAMING_CONVENTIONS,
    PROFILE_CONFIGURATION_CONTEXT,
    RECURSIVE_COUNT,
    RECURSIVE_DEPTH,
    STRATEGY,
} from './symbols';
import type {
    ArrayKeyedMap,
    ErrorHandler,
    Mapper,
    Mapping,
    MappingConfiguration,
    MappingStrategy,
    MappingStrategyInitializer,
    Metadata,
    MetadataIdentifier,
    NamingConvention,
} from './types';
import { Dictionary, MapOptions, ModelIdentifier } from './types';

export interface CreateMapperOptions {
    strategyInitializer: MappingStrategyInitializer<MetadataIdentifier>;
    errorHandler?: ErrorHandler;
    namingConventions?:
        | NamingConvention
        | {
              source: NamingConvention;
              destination: NamingConvention;
          };
}

export function createMapper({
    strategyInitializer,
    errorHandler,
    namingConventions,
}: CreateMapperOptions): Mapper {
    let strategy: MappingStrategy<MetadataIdentifier>;

    // this mapper is responsible for all mappings
    let mappings: Map<MetadataIdentifier, Map<MetadataIdentifier, Mapping>>;

    // this mapper is responsible for all metadata
    let metadata: Map<MetadataIdentifier, Array<Metadata>>;

    // this mapper is responsible for recursive depths and counts
    let recursiveDepth: Map<MetadataIdentifier, ArrayKeyedMap>;
    let recursiveCount: Map<MetadataIdentifier, ArrayKeyedMap>;

    // this mapper is tracking some context about the MappingProfile
    let profileConfigurationContext: Set<MappingConfiguration>;

    // return the Proxy
    return new Proxy<Mapper>({} as Mapper, {
        get(target, p: string | symbol, receiver: any): any {
            if (p === STRATEGY) {
                if (!strategy) {
                    strategy = strategyInitializer(receiver);
                }
                return strategy;
            }

            if (p === PROFILE_CONFIGURATION_CONTEXT) {
                if (!profileConfigurationContext) {
                    profileConfigurationContext = new Set();
                }
                return profileConfigurationContext;
            }

            if (p === MAPPINGS) {
                if (!mappings) {
                    mappings = new Map();
                }
                return mappings;
            }

            if (p === METADATA_MAP) {
                if (!metadata) {
                    metadata = new Map();
                }
                return metadata;
            }

            if (p === ERROR_HANDLER) {
                if (!errorHandler) {
                    errorHandler = {
                        handle: console.error.bind(console, '[AutoMapper]'),
                    };
                }
                return errorHandler;
            }

            if (p === NAMING_CONVENTIONS) {
                return namingConventions;
            }

            if (p === RECURSIVE_DEPTH) {
                if (!recursiveDepth) {
                    recursiveDepth = new Map();
                }
                return recursiveDepth;
            }

            if (p === RECURSIVE_COUNT) {
                if (!recursiveCount) {
                    recursiveCount = new Map();
                }
                return recursiveCount;
            }

            if (p === 'dispose') {
                return () => {
                    mappings?.clear();
                    metadata?.clear();
                    recursiveDepth?.clear();
                    recursiveCount?.clear();
                    profileConfigurationContext?.clear();
                };
            }

            if (p === 'map') {
                return <
                    TSource extends Dictionary<TSource>,
                    TDestination extends Dictionary<TDestination>
                >(
                    sourceObject: TSource,
                    sourceIdentifier: ModelIdentifier<TSource>,
                    destinationIdentifier: ModelIdentifier<TDestination>,
                    options?: MapOptions<TSource, TDestination>
                ): TDestination => {
                    if (sourceObject == null)
                        return sourceObject as TDestination;

                    const mapping = getMapping(
                        receiver,
                        sourceIdentifier,
                        destinationIdentifier
                    );

                    return mapReturn(mapping, sourceObject, options || {});
                };
            }

            if (p === 'mapAsync') {
                return <
                    TSource extends Dictionary<TSource>,
                    TDestination extends Dictionary<TDestination>
                >(
                    sourceObject: TSource,
                    sourceIdentifier: ModelIdentifier<TSource>,
                    destinationIdentifier: ModelIdentifier<TDestination>,
                    options?: MapOptions<TSource, TDestination>
                ): Promise<TDestination> => {
                    return Promise.resolve().then(() =>
                        Reflect.get(
                            target,
                            (p as string).replace('Async', ''),
                            receiver
                        )(
                            sourceObject,
                            sourceIdentifier,
                            destinationIdentifier,
                            options
                        )
                    );
                };
            }

            if (p === 'mapArray') {
                return () => {};
            }

            if (p === 'mapArrayAsync') {
                return () => {};
            }

            if (p === 'mutate') {
                return () => {};
            }
            if (p === 'mutateAsync') {
                return () => {};
            }

            if (p === 'mutateArray') {
                return () => {};
            }

            if (p === 'mutateArrayAsync') {
                return () => {};
            }

            return Reflect.get(target, p, receiver);
        },
    });
}