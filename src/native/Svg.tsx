import React, { Component, isValidElement } from 'react'
import { Animated } from 'react-native'
import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

class NativeSvg extends Component<IContentLoaderProps> {
  static defaultProps = {
    animate: true,
    backgroundColor: '#f5f6f7',
    backgroundOpacity: 1,
    foregroundColor: '#eee',
    foregroundOpacity: 1,
    rtl: false,
    speed: 1.2,
    interval: 0.25,
    style: {},
    beforeMask: null,
  }

  animatedValue = new Animated.Value(-1)

  fixedId = this.props.uniqueKey || uid()

  idClip = `${this.fixedId}-diff`

  idGradient = `${this.fixedId}-animated-diff`

  unmounted = false

  setAnimation = () => {
      throw new Error("STUB");
  }

  componentDidMount = () => {
      throw new Error("STUB");
  }

  componentDidUpdate(prevProps: IContentLoaderProps) {
      throw new Error("STUB");
  }

  componentWillUnmount() {
      throw new Error("STUB");
  }

  render() {
      throw new Error("STUB");
  }
}

export default NativeSvg
