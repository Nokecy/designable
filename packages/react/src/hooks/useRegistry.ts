import { GlobalRegistry, IDesignerRegistry } from '@nokecy/designable-core'
import { globalThisPolyfill } from '@nokecy/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
