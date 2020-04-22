import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'

export default Chip = props => {
  if (props.line) {
    return (
      <View
        style={{ ...styles.mainChip, ...styles.lineChip }}
      >
        <Text style={styles.chipText}>{props.text}</Text>
      </View>
    )
  }

  if (props.sport) {
    return (
      <View
        style={{ ...styles.mainChip, ...styles.sportChip }}
      >
        <Text style={styles.chipText}>
          {sportsEmoji[props.text] ? sportsEmoji[props.text] : ''}
          {props.text}
        </Text>
      </View>
    )
  }
  if (props.status) {
    return (
      <View
        style={{ ...styles.mainChip, ...styles.statusChip }}
      >
        <Text style={styles.chipText}>
          {statusEmoji[props.text] ? statusEmoji[props.text] : ''}
          {props.text}
        </Text>
      </View>
    )
  } else {
    return (
      <View
        style={{
          ...styles.mainChip, ...{
            backgroundColor: 'whitesmoke',
            borderColor: 'black',
          }
        }}
      >
        <Text style={styles.chipText}>{props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainChip: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    paddingVertical: 2
  },
  chipText: { fontSize: 14 },
  lineChip: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
  },
  sportChip: {
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
  },
  statusChip: {
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
  }
})

const statusEmoji = {
  Upcoming: '⏱',
  WIN: '✅',
  LOSE: '❌'
}

const sportsEmoji = {
  Basketball: '🏀',
  Football: '🏈',
  Soccer: '⚽️',
  Hockey: '🏒'
}
