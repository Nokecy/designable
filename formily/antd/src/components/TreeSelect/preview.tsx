import React from 'react'
import { TreeSelect as FormilyTreeSelect } from '@formily/antd-v5'
import { createBehavior, createResource } from '@nokecy/designable-core'
import { DnFC } from '@nokecy/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const TreeSelect: DnFC<React.ComponentProps<typeof FormilyTreeSelect>> =
  FormilyTreeSelect

TreeSelect.Behavior = createBehavior({
  name: 'TreeSelect',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'TreeSelect',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.TreeSelect),
  },
  designerLocales: AllLocales.TreeSelect,
})

TreeSelect.Resource = createResource('Inputs', {
  icon: 'TreeSelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'TreeSelect',
        'x-decorator': 'FormItem',
        'x-component': 'TreeSelect',
      },
    },
  ],
})
