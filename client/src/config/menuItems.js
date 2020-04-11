import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DaschboardIcon from '@material-ui/icons/Dashboard'
import LanguageIcon from '@material-ui/icons/Language'
import LockIcon from '@material-ui/icons/Lock'
import React from 'react'
import StyleIcon from '@material-ui/icons/Style'
import allLocales from './locales'
import allThemes from './themes'

const getMenuItems = props => {
  const {
    locale,
    updateTheme,
    updateLocale,
    intl,
    themeSource,
    auth,
    isGranted,
    deferredPrompt,
    isAppInstallable,
    isAppInstalled,
    isAuthMenu,
    handleSignOut
  } = props

  const isAuthorised = auth.isAuthorised

  const themeItems = allThemes.map(t => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        updateTheme(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />
    }
  })

  const localeItems = allLocales.map(l => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
      },
      leftIcon: <LanguageIcon />
    }
  })

  if (isAuthMenu) {
    return [
      {
        value: '/my_account',
        primaryText: intl.formatMessage({ id: 'my_account' }),
        leftIcon: <AccountBoxIcon />
      },
      {
        value: '/signin',
        onClick: handleSignOut,
        primaryText: intl.formatMessage({ id: 'sign_out' }),
        leftIcon: <LockIcon />
      }
    ]
  }

  return [
    {
      value: '/shopping-list',
      visible: isAuthorised,
      primaryText: intl.formatMessage({ id: 'shopping-list' }),
      leftIcon: <DaschboardIcon />
    }
  ]
}

export default getMenuItems
