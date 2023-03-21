import { ICustomEvent } from '@nokecy/designable-shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class UpdateChildrenEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'update:children'
}
