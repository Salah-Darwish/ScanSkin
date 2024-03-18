import {ScaledSheet} from 'react-native-size-matters';
import { colors } from '../../utls/colors';

const badgeWrapperDim = 20;

const styles = ScaledSheet.create({
  badgeWrapper: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'red',
    width: badgeWrapperDim,
    height: badgeWrapperDim,
    borderRadius: 0.5 * badgeWrapperDim,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
  },
  icon: {
    fontSize: 24,
  },
  focusedIcon: {
    color: colors.Actdot,
  },
});

export default styles;
