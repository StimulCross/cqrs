import { AggregateRootStorage } from '../storages/aggregate-root.storage';

/**
 * Merges event publisher with the decorated class.
 * Implements the `publish` and `publishAll` methods in a similar way to {@link EventPublisher#mergeClassContext}.
 */
export function Publishable(): ClassDecorator {
  return (target: any) => {
    AggregateRootStorage.add(target);
  };
}
