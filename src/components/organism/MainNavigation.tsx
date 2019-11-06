import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { default as MuiLink } from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { TestIds, Routes } from '../../consts'

// TODO Move to atoms
const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref} {...props} />
))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      margin: theme.spacing(1),
    }
  })
)

export default function MainNavigation(props) {
  const classes = useStyles('')// TS thinks I need an agrument.. already love this
  const linksTpl = Object.entries(Routes).map(([key, value]) => {
    return (
      <MuiLink
        key={key}
        data-testid={TestIds.navigation[key]}
        className={classes.link}
        component={RouterLink}
        to={value.url}>{value.label}</MuiLink>
    )
  })
  return (
    <Toolbar>
      <Typography variant="h6">
        <nav style={{ display: 'flex' }}>
          { linksTpl }
        </nav>
      </Typography>
    </Toolbar>
  )
}

export { MainNavigation }
