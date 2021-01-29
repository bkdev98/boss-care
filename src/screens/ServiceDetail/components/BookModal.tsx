import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Typography from '@components/Typography';
import IconButton from '@components/IconButton';
import Rating from '@components/Rating';
import Button from '@components/Button';
import {Card} from '@components/Card';
import TimeStrip from '@components/TimeStrip';
import SelectInput from '@components/SelectInput';
import CloseIcon from '@components/Icon/Close';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import {ISpecialist} from '@entities/specialist';

import {TIMES} from '../ServiceDetail.view';

interface BookModalProps extends ModalizeProps {
  detail: any;
  data: ISpecialist;
}

const BookModal: React.FC<BookModalProps> = ({onClose, detail, data}) => {
  const modalize = useRef<Modalize>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const insets = useSafeAreaInsets();

  function handleClose() {
    onClose?.();
  }

  return (
    <Modalize
      ref={modalize}
      alwaysOpen={getScalableSize.h(108)}
      snapPoint={getScalableSize.h(108)}
      onPositionChange={(position) => setIsExpanded(position === 'top')}
      withHandle={false}
      modalTopOffset={Dimensions.get('window').height - (insets.bottom + getScalableSize.h(430))}
      onClose={handleClose}>
      {isExpanded && (
        <>
          <View style={styles.header}>
            <IconButton onPress={handleClose} style={styles.closeBtn}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h3" style={styles.title}>
              Booking confirmation
            </Typography>
          </View>
          <Card style={styles.card} data={data} hideExtra />
          <SelectInput wrapperStyle={styles.dateSelect} label="Date" options="dates" />
          <TimeStrip times={TIMES} />
        </>
      )}
      <View style={[styles.wrapper, {paddingBottom: insets.bottom}]}>
        <View style={styles.row}>
          <View>
            <View style={styles.inline}>
              <Typography variant="h2">$ {detail.firstVisitPrice}</Typography>
              <Typography variant="body1"> / first visit</Typography>
            </View>
            {!isExpanded && (
              <View style={[styles.inline, {marginTop: getScalableSize.h(3)}]}>
                <Rating rating={data.rating} />
                <Typography
                  variant="caption"
                  style={{color: theme.colors.gray, marginLeft: getScalableSize.w(5)}}>
                  {data.totalReview} Reviews
                </Typography>
              </View>
            )}
          </View>
          <Button label="Book" variant="primary" style={styles.bookBtn} />
        </View>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: getScalableSize.w(20),
    paddingTop: getScalableSize.h(30),
  },
  card: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    marginBottom: getScalableSize.h(16),
    marginHorizontal: getScalableSize.w(20),
  },
  header: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: getScalableSize.h(44),
    marginTop: getScalableSize.h(24),
    marginBottom: getScalableSize.h(17),
  },
  closeBtn: {
    position: 'absolute',
    left: 0,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookBtn: {
    minWidth: getScalableSize.w(150),
  },
  dateSelect: {
    marginHorizontal: getScalableSize.w(10),
    marginBottom: getScalableSize.h(16),
  },
});

export default BookModal;