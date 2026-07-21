import * as React from 'react'

import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate = true,
  backgroundColor = '#f5f6f7',
  backgroundOpacity = 1,
  baseUrl = '',
  children,
  foregroundColor = '#eee',
  foregroundOpacity = 1,
  gradientRatio = 2,
  uniqueKey,
  rtl = false,
  speed = 1.2,
  style = {},
  title = 'Loading...',
  beforeMask = null,
  ...props
}) => {
    throw new Error("STUB");
}

export default SVG
