/** @jsx h */
import { h } from 'preact'
import { uiFactory } from '../ui-factory'

export default uiFactory({
  direction: 'Left',
  icon: (
    <svg>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2 3H4V13H2V14H4.5H5V13.5V2.5V2H4.5H2V3ZM12 2H12.5H15V3H13V13H15V14H12.5H12V13.5V2.5V2ZM8 11V5H9V11H8Z'
      />
    </svg>
  )
})
