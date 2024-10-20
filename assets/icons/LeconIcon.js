import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeconIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <Path d="m16 6 4 14" />
    <Path d="M12 6v14" />
    <Path d="M8 8v12" />
    <Path d="M4 4v16" />
  </Svg>
);

export default LeconIcon;