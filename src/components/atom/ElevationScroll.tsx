import * as React from 'react'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

class ElevationScroll extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, window } = this.props

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    })
  }
}

export { ElevationScroll }
