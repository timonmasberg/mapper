import { createInitialMapping } from './create-initial-mapping';
import { get } from './get';
import { isPrimitiveArrayEqual } from './is-primitive-array-equal';
import { getStrategy } from './strategy';
import type {
    Dictionary,
    Mapping,
    MappingConfiguration,
    MappingTransformation,
    ModelIdentifier,
    Selector,
} from './types';
import {
    MapFnClassId,
    MappingClassId,
    MappingPropertiesClassId,
    MappingPropertyClassId,
    MappingTransformationClassId,
    MetadataIdentifier,
} from './types';

export function forSelf<
    TSource extends Dictionary<TSource>,
    TDestination extends Dictionary<TDestination>,
    TSelfSource extends Dictionary<TSelfSource>
>(
    sourceOrMapping:
        | ModelIdentifier<TSelfSource>
        | Mapping<TSelfSource, TDestination>,
    selector: Selector<TSource, TSelfSource>
): MappingConfiguration<TSource, TDestination> {
    let selfMapping = Array.isArray(sourceOrMapping)
        ? sourceOrMapping
        : undefined;

    return (mapping) => {
        if (selfMapping == undefined) {
            const [, destinationIdentifier] =
                mapping[MappingClassId.identifiers];
            const mapper = mapping[MappingClassId.mapper];
            const strategy = getStrategy(mapper);
            // turn string into symbol for identifier
            const sourceIdentifier: MetadataIdentifier<TSource> =
                typeof sourceOrMapping === 'string'
                    ? Symbol.for(sourceOrMapping)
                    : (sourceOrMapping as MetadataIdentifier<TSource>);
            strategy.exploreMetadata(sourceIdentifier);
            selfMapping = createInitialMapping(
                mapper,
                sourceIdentifier,
                destinationIdentifier
            );
        }

        const selfMapProperties = selfMapping[MappingClassId.properties];

        for (let i = 0, length = selfMapProperties.length; i < length; i++) {
            const mapProperty = selfMapProperties[i];
            if (
                mapping[MappingClassId.properties].some((property) =>
                    isPrimitiveArrayEqual(
                        property[MappingPropertiesClassId.path],
                        mapProperty[MappingPropertiesClassId.path]
                    )
                )
            ) {
                continue;
            }
            const transformation: MappingTransformation =
                mapProperty[MappingPropertiesClassId.mappingProperty][
                    MappingPropertyClassId.transformation
                ];
            transformation[MappingTransformationClassId.memberMapFn][
                MapFnClassId.fn
            ] = (sourceObj: any) =>
                get(
                    selector(sourceObj),
                    mapProperty[MappingPropertiesClassId.path]
                );
            mapping[MappingClassId.properties].push([
                mapProperty[MappingPropertiesClassId.path],
                [mapProperty[MappingPropertiesClassId.path], transformation],
                mapProperty[MappingPropertiesClassId.nestedMappingPair],
            ]);
        }
    };
}