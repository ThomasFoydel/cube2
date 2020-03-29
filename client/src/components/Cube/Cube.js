import React, { useContext } from 'react';
import './Cube.scss';
import { GlobalContext } from 'context/GlobalContext';
import { useSpring, animated, config } from 'react-spring';
import CubeSide from 'components/Cube/CubeSide.js';

const Cube = () => {
  const { springConfig, currentTransform } = useContext(GlobalContext);

  const animationProps = useSpring({
    from: { transform: 'rotate3d(0, 100, 0, 270deg)' },
    transform: currentTransform,
    config: config[springConfig]
  });

  return (
    <div className='scene'>
      <animated.div className='cube' style={animationProps}>
        <CubeSide side='right' pageTitle='home' />
        <CubeSide side='front' pageTitle='products' />
        <CubeSide side='back' pageTitle='about' />
        <CubeSide side='left' pageTitle='contact' />
        <CubeSide side='bottom' pageTitle='login' />
        <CubeSide side='top' pageTitle='register' />
      </animated.div>
    </div>
  );
};

export default Cube;
