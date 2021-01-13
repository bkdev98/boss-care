import React from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import theme from '@theme';
import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';
import FacebookIcon from '@components/Icon/Facebook';
import GoogleIcon from '@components/Icon/Google';

import styles from './styles';

interface RegistrationSocialViewProps {
  loading: boolean;
  onContinueFacebook?: any;
  onContinueGoogle?: any;
  onRegisterEmail?: any;
  onSignIn?: any;
}

const RegistrationSocialView: React.FC<RegistrationSocialViewProps> = ({
  onContinueFacebook,
  onContinueGoogle,
  onRegisterEmail,
  onSignIn,
  loading,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={theme.colors.blueViolet}
        start={{x: 0, y: 0}}
        end={{x: 0.9, y: 0.5}}
        style={[styles.wrapper, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <ScrollView contentContainerStyle={styles.container}>
          <Typography variant="title" style={styles.welcome}>
            {'Welcome\n'}to <Text style={{color: theme.colors.yellow}}>Boss Care</Text>
          </Typography>
          <Button
            label={
              <>
                <Text style={{fontFamily: theme.fonts.regular}}>Continue with </Text>
                <Text style={{fontFamily: theme.fonts.bold}}>Facebook</Text>
              </>
            }
            leftIcon={<FacebookIcon />}
            variant="white"
            disabled={loading}
            onPress={onContinueFacebook}
            style={styles.facebookBtn}
            labelStyle={styles.clearFontFam}
          />
          <Button
            label={
              <>
                <Text style={{fontFamily: theme.fonts.regular}}>Continue with </Text>
                <Text style={{fontFamily: theme.fonts.bold}}>Google</Text>
              </>
            }
            leftIcon={<GoogleIcon />}
            variant="white"
            disabled={loading}
            onPress={onContinueGoogle}
            style={styles.googleBtn}
            labelStyle={styles.clearFontFam}
          />
          <Button
            label="Register with Email"
            variant="ghostOutline"
            onPress={onRegisterEmail}
            style={styles.emailBtn}
          />
          <Button
            label={
              <>
                <Text style={{fontFamily: theme.fonts.regular}}>Already have an account? </Text>
                <Text style={{fontFamily: theme.fonts.bold}}>Sign In</Text>
              </>
            }
            variant="ghostWhite"
            onPress={onSignIn}
            labelStyle={styles.clearFontFam}
          />
        </ScrollView>
      </LinearGradient>
    </Layout>
  );
};

export default RegistrationSocialView;
