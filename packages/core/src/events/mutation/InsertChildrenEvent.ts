import { ICustomEvent } from '@nokecy/designable-shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class InsertChildrenEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'insert:children'
}
