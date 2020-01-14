import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

import { ToggleIcon } from './'
import { checkSource } from './utils'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25
  }
})

const TopBar = (props) => {
  const {
    logo,
    more,
    title,
    theme,
    onMorePress,
    barStyle
  } = props
  return (
    <View style={[styles.container,barStyle,{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
      <View style={styles.row}>
        { logo && <Image style={styles.logo} resizeMode="contain" {...checkSource(logo)} />}
        <Text
          style={[styles.title, { color: theme.title }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        { more &&
          <ToggleIcon
            style={styles.more}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme.more}
            size={25}
          />
        }
      </View>
    </View>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  barStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
}

export { TopBar }
