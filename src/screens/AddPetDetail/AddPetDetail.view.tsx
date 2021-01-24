import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import theme from '@theme';
import {RootState} from '@reducers';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Button from '@components/Button';
import Avatar from '@components/Avatar';
import Typography from '@components/Typography';
import ImagePicker from '@components/ImagePicker';

import {petValidationSchema} from '@utils/validationSchema';
import {
  FormikForm,
  FormikSelectInput,
  FormikGenderInput,
  FormikSwitchInput,
} from '@components/Formik';
import {FormikTextInputWithoutAutoFocus} from '@components/Formik/FormikTextInput';
import PlusIcon from '@components/Icon/Plus';

import ReminderInputList from './components/ReminderInputList';

import styles from './styles';

interface AddPetDetailViewProps {
  initial?: boolean;
  loading?: boolean;
  onAddPet?: (payload: any) => void;
}

const AddPetDetailView: React.FC<AddPetDetailViewProps> = ({loading, initial, onAddPet}) => {
  const BREEDS = useSelector((state: RootState) => state.app.breeds);
  const SPECIES = useSelector((state: RootState) => state.app.species);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  function renderEditAvatar() {
    return (
      <TouchableOpacity
        onPress={() => setShowAvatarPicker(true)}
        activeOpacity={1}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
        style={styles.editAvatarWrapper}>
        <LinearGradient colors={theme.colors.blueViolet} style={styles.editAvatar}>
          <PlusIcon style={theme.effects.blueShadow} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function handleSubmit(values: any) {
    console.log(values);
    onAddPet?.({...values, id: Date.now()});
  }

  return (
    <Layout>
      <StatusBar backgroundColor={theme.colors.background} translucent={false} />
      <Header
        bordered
        showBack
        title="Add pet detail"
        rightButton={initial ? <Button size="small" variant="ghost" label="Skip" /> : undefined}
      />
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
          <Formik
            initialValues={{
              avatar: '',
              name: '',
              species: null,
              breed: null,
              gender: null,
              reminders: [],
            }}
            validationSchema={petValidationSchema}
            onSubmit={handleSubmit}>
            {(formikProps) => (
              <FormikForm style={styles.formWrapper}>
                <View style={styles.section}>
                  <Avatar
                    boss
                    wrapperStyle={styles.avatar}
                    extra={renderEditAvatar()}
                    uri={formikProps.values.avatar}
                  />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    General information
                  </Typography>
                  <FormikTextInputWithoutAutoFocus
                    name="name"
                    label="Pet's name"
                    wrapperStyle={styles.formInput}
                    autoCapitalize="words"
                    autoFocus
                    returnKeyType="next"
                  />
                  <FormikSelectInput
                    name="species"
                    label="Species of your pet"
                    wrapperStyle={styles.formInput}
                    options={SPECIES}
                    onSelect={(value: any) =>
                      value.key !== formikProps.values.species &&
                      formikProps.setFieldValue('breed', null)
                    }
                  />
                  <FormikSelectInput
                    name="breed"
                    label="Breed"
                    wrapperStyle={styles.formInput}
                    options={
                      formikProps.values.species
                        ? (BREEDS as any)[formikProps.values.species || '']
                        : []
                    }
                  />
                  <FormikGenderInput name="gender" label="Gender" wrapperStyle={styles.formInput} />
                  <FormikSelectInput
                    name="birthdate"
                    label="Day of birth"
                    wrapperStyle={styles.formInput}
                    options="dates"
                  />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    Additional information
                  </Typography>
                  <FormikSwitchInput
                    label="Neutered"
                    name="isNeutered"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Vaccinated"
                    name="isVaccinated"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with dogs"
                    name="isFriendlyWithDogs"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with cats"
                    name="isFriendlyWithCats"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with kids"
                    name="isFriendlyWithKids"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Microchipped"
                    name="isMicrochipped"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Purebred"
                    name="isPurebred"
                    wrapperStyle={[styles.formInput]}
                  />
                  <FormikTextInputWithoutAutoFocus
                    name="nurseryName"
                    label="Pet's nursery name (optional)"
                    wrapperStyle={styles.formInput}
                    autoCapitalize="words"
                    returnKeyType="next"
                  />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    Reminders
                  </Typography>
                  <Typography variant="body1">
                    Add vaccines, haircuts, pills, estrus, etc. and you will receive notifications
                    for the next event.
                  </Typography>
                  <ReminderInputList
                    data={formikProps.values.reminders}
                    onChange={(data) => formikProps.setFieldValue('reminders', data)}
                  />
                  <Button
                    label="Save"
                    variant="primary"
                    disabled={loading}
                    onPress={formikProps.handleSubmit}
                  />
                </View>
                <ImagePicker
                  label="Select avatar"
                  open={showAvatarPicker}
                  onSelect={(uri) => {
                    formikProps.setFieldValue('avatar', uri);
                    setShowAvatarPicker(false);
                  }}
                />
              </FormikForm>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default AddPetDetailView;
