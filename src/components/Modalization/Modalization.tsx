import React, {useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

import {hideModalize} from '@actions';
import {RootState} from '@reducers';

import Typography from '@components/Typography';
import IconButton from '@components/IconButton';
import CloseIcon from '@components/Icon/Close';
import getScalableSize from '@utils/getScalableSize';

interface ModalizationProps extends ModalizeProps {
  useInternalProps?: boolean;
  open?: boolean;
  content?: JSX.Element;
  title?: string;
}

const Modalization: React.FC<ModalizationProps> = (props) => {
  const modalize = useRef<Modalize>(null);
  const insets = useSafeAreaInsets();
  const modalizeStore = useSelector((state: RootState) => state.modalize);
  const dispatch = useDispatch();

  const open = props.useInternalProps ? props.open : modalizeStore.open;
  const content = props.useInternalProps ? props.content : modalizeStore.content;
  const title = props.useInternalProps ? props.title : modalizeStore.title;

  const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: getScalableSize.h(24) + insets.bottom,
    },
    header: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: getScalableSize.h(44),
      marginVertical: getScalableSize.h(24),
    },
    closeBtn: {
      position: 'absolute',
      left: 0,
    },
    title: {
      textAlign: 'center',
      alignSelf: 'center',
    },
  });

  useEffect(() => {
    if (open) {
      modalize?.current?.open();
    } else {
      modalize?.current?.close();
    }
  }, [open]);

  function handleClose() {
    props.onClose?.();
    !props.useInternalProps && dispatch(hideModalize());
  }

  return (
    <Modalize ref={modalize} adjustToContentHeight onClose={handleClose} {...props}>
      <View style={styles.header}>
        <IconButton onPress={handleClose} style={styles.closeBtn}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h3" style={styles.title}>
          {title}
        </Typography>
      </View>
      <View style={styles.wrapper}>{content}</View>
    </Modalize>
  );
};

export default Modalization;
