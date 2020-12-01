import React from 'react';
import {ScrollView} from 'react-native';

import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';
import styles from './styles';

interface SettingViewProps {
  onPressBack?: any;
  onLogout?: any;
  onPressWebsite?: any;
}

const SettingView: React.FC<SettingViewProps> = ({onPressBack, onLogout, onPressWebsite}) => {
  return (
    <Layout>
      <Button label="Back" style={styles.backBtn} onPress={onPressBack} />
      <ScrollView contentContainerStyle={styles.content}>
        <Button
          label="Logout"
          variant="ghost"
          style={styles.button}
          labelStyle={styles.logoutLabel}
          onPress={onLogout}
        />
        <Button label="Website" style={styles.button} onPress={onPressWebsite} />
        <Typography variant="caption" style={styles.credit}>
          Crafted with coffee and cigarette at
        </Typography>
        <Typography variant="title">InApps</Typography>
      </ScrollView>
    </Layout>
  );
};

export default SettingView;
