import React from 'react';

import { Button } from '../../components';
import { NavigationWrapper } from './Navigation.style';

const Navigation = ({ prev, next }) => {
  return (
    <NavigationWrapper>
      <Button type="button" color="dark" onClick={prev}>
        Prev
      </Button>
      <Button type="button" color="primary" onClick={next}>
        Next
      </Button>
    </NavigationWrapper>
  );
};

export default Navigation;
