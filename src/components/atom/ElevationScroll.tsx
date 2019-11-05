import * as React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

class ElevationScroll extends React.Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { children, window } = this.props as Props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }
}

export { ElevationScroll }
