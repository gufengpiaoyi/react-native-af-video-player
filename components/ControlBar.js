import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { ToggleIcon, Time, Scrubber } from './'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
})

const ControlBar = (props) => {
  const {
    onSeek,
    onSeekRelease,
    progress,
    currentTime,
    duration,
    muted,
    fullscreen,
    theme,
    inlineOnly,
    hideFullScreenControl,
    barStyle
  } = props

  return (
    <View style={[styles.container,barStyle,{borderTopLeftRadius: 0, borderTopRightRadius: 0}]}>
      <Time time={currentTime} theme={theme.seconds} />
      <Scrubber
        onSeek={pos => onSeek(pos)}
        onSeekRelease={pos => onSeekRelease(pos)}
        progress={progress}
        theme={{ scrubberThumb: theme.scrubberThumb, scrubberBar: theme.scrubberBar }}
      />
      <ToggleIcon
        paddingLeft
        theme={theme.volume}
        onPress={() => props.toggleMute()}
        isOn={muted}
        iconOff="volume-up"
        iconOn="volume-mute"
        size={20}
      />
      <Time time={duration} theme={theme.duration} />
      { (!inlineOnly || !hideFullScreenControl) &&
      <ToggleIcon
        paddingRight
        onPress={() => props.toggleFS()}
        iconOff="fullscreen"
        iconOn="fullscreen-exit"
        isOn={fullscreen}
        theme={theme.fullscreen}
      />}
    </View>
  )
}

ControlBar.propTypes = {
  toggleFS: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  inlineOnly: PropTypes.bool.isRequired,
  hideFullScreenControl: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
  barStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
}

export { ControlBar }
