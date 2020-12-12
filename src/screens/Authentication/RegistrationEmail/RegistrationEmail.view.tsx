import React from 'react';
import {ScrollView, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import theme from '@theme';
import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';
import CheckBox from '@components/CheckBox';
import IconButton from '@components/IconButton';
import ArrowLeftIcon from '@components/Icon/ArrowLeft';
import FacebookLiteIcon from '@components/Icon/FacebookLite';
import GoogleLiteIcon from '@components/Icon/GoogleLite';

import {FormikForm, FormikTextInput} from '@components/Formik';
import {registerValidationSchema} from '@utils/validationSchema';
import {IRegisterCredential} from '@entities/credential';

import styles from './styles';

interface RegistrationEmailViewProps {
  loading: boolean;
  onGoBack: () => void;
  onContinueFacebook: () => void;
  onContinueGoogle: () => void;
  onSignIn: () => void;
  onRegister: (values: IRegisterCredential) => void;
}

const RegistrationEmailView: React.FC<RegistrationEmailViewProps> = ({
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
            Registration
          </Typography>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              acceptRules: false,
              receiveNewsletter: false,
            }}
            validationSchema={registerValidationSchema}
            onSubmit={onRegister}>
            {(formikProps) => (
              <FormikForm style={styles.formWrapper}>
                <FormikTextInput
                  name="fullName"
                  label="Full name"
                  wrapperStyle={styles.formInput}
                  autoCapitalize="words"
                />
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
                <View style={styles.formCheckBoxWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      formikProps.setFieldValue('acceptRules', !formikProps.values.acceptRules)
                    }
                    style={styles.formCheckBox}>
                    <CheckBox
                      value={formikProps.values.acceptRules}
                      onValueChange={() =>
                        formikProps.setFieldValue('acceptRules', !formikProps.values.acceptRules)
                      }
                      style={styles.checkBox}
                    />
                    <Typography variant="body3">I agree with the rules</Typography>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      formikProps.setFieldValue(
                        'receiveNewsletter',
                        !formikProps.values.receiveNewsletter,
                      )
                    }
                    style={styles.formCheckBox}>
                    <CheckBox
                      value={formikProps.values.receiveNewsletter}
                      onValueChange={() =>
                        formikProps.setFieldValue(
                          'receiveNewsletter',
                          !formikProps.values.receiveNewsletter,
                        )
                      }
                      style={styles.checkBox}
                    />
                    <Typography variant="body3">I do not want to receive newsletter</Typography>
                  </TouchableOpacity>
                </View>
                <Button
                  label="Sign Up"
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
          <TouchableOpacity activeOpacity={0.7} onPress={onSignIn}>
            <Typography variant="body1" style={styles.haveAccountTxt}>
              Already have an account? <Text style={styles.signInTxt}>Sign In</Text>
            </Typography>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default RegistrationEmailView;
