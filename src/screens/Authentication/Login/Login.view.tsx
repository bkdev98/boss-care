import React from 'react';
import {ScrollView} from 'react-native';
import {Formik} from 'formik';

import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';

import {FormikForm, FormikTextInput} from '@components/Formik';
import {loginValidationSchema} from '@utils/validationSchema';
import {ICredential} from '@entities/credential';

import styles from './styles';

interface LoginViewProps {
  onLogin: (values: ICredential) => void;
  loading: boolean;
  onRegister?: any;
}

const LoginView: React.FC<LoginViewProps> = ({onLogin, onRegister, loading}) => {
  return (
    <Layout>
      <ScrollView>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={onLogin}>
          {(formikProps) => (
            <FormikForm style={styles.formWrapper}>
              <Typography variant="title" style={styles.logo}>
                InApps
              </Typography>
              <FormikTextInput
                name="username"
                label="Username"
                wrapperStyle={styles.formInput}
                autoCapitalize="none"
              />
              <FormikTextInput
                name="password"
                label="Password"
                wrapperStyle={styles.formInput}
                secureTextEntry
              />
              <Button
                label="Login"
                disabled={loading}
                onPress={formikProps.handleSubmit}
                style={styles.formBtn}
              />
              <Button label="Register" variant="ghost" onPress={onRegister} />
            </FormikForm>
          )}
        </Formik>
      </ScrollView>
    </Layout>
  );
};

export default LoginView;
