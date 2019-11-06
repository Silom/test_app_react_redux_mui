import * as React from 'react'
import { TestIds } from '../consts'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div data-testid={TestIds.app.about}>
        Hi!
        <p>
          I was just testing some new things with this little project.
        </p>
      </div>
    )
  }
}

export { About }
