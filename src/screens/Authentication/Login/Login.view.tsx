import React from 'react';
import {ScrollView, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import theme from '@theme';
import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import ArrowLeftIcon from '@components/Icon/ArrowLeft';
import FacebookLiteIcon from '@components/Icon/FacebookLite';
import GoogleLiteIcon from '@components/Icon/GoogleLite';

import {FormikForm, FormikTextInput} from '@components/Formik';
import {loginValidationSchema} from '@utils/validationSchema';
import {ISignInCredential} from '@entities/credential';

import styles from './styles';

interface LoginViewProps {
  loading: boolean;
  onGoBack: () => void;
  onContinueFacebook: () => void;
  onContinueGoogle: () => void;
  onSignIn: (values: ISignInCredential) => void;
  onRegister: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  onGoBack,
  onSignIn,
  onRegister,
  loading,
  onContinueFacebook,
  onContinueGoogle,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={theme.colors.blueViolet}
        start={{x: 0, y: 0}}
        end={{x: 0.9, y: 0.5}}
        style={[styles.gradientBg]}
      />
      <View style={[styles.wrapper, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <View style={styles.header}>
          <IconButton onPress={onGoBack}>
            <ArrowLeftIcon />
          </IconButton>
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Typography variant="h1" style={styles.title}>
            Sign In
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginValidationSchema}
            onSubmit={onSignIn}>
            {(formikProps) => (
              <FormikForm style={styles.formWrapper}>
                <FormikTextInput
                  name="email"
                  label="Email"
                  keyboardType="email-address"
                  wrapperStyle={styles.formInput}
                  autoCapitalize="none"
                />
                <FormikTextInput
                  name="password"
                  label="Password"
                  wrapperStyle={styles.formInput}
                  secureTextEntry
                />
                <TouchableOpacity activeOpacity={0.7}>
                  <Typography variant="body3" style={styles.forgotPassword}>
                    Do not remember the password?
                  </Typography>
                </TouchableOpacity>
                <Button
                  label="Sign In"
                  variant="primary"
                  disabled={loading}
                  onPress={formikProps.handleSubmit}
                  style={styles.formBtn}
                />
              </FormikForm>
            )}
          </Formik>
          <View style={styles.footerWrapper}>
            <View style={styles.orWrapper}>
              <View style={styles.orDivider} />
              <Typography variant="body1" style={styles.orTxt}>
                or continue with
              </Typography>
              <View style={styles.orDivider} />
            </View>
            <View style={styles.socialActions}>
              <IconButton style={styles.facebookBtn} onPress={onContinueFacebook}>
                <FacebookLiteIcon />
              </IconButton>
              <IconButton style={styles.googleBtn} onPress={onContinueGoogle}>
                <GoogleLiteIcon />
              </IconButton>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={onRegister}>
            <Typography variant="body1" style={styles.haveAccountTxt}>
              Don't have account yet? <Text style={styles.signInTxt}>Registration</Text>
            </Typography>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default LoginView;
