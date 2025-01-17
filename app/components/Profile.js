import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import Screen from "./Screen";
import Modal from "./Modal";
import  validationSchema  from "../../util/validationSchema";


function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const InitialValues = {
    name: "",
    projectDescription: "",
    projectLink: "",
  };

  // Steps/questions for the form
  const steps = [
    {
      label: "Project Name",
      render: (
        <AppFormField
          name="name"
          width='100%'
          
        />
      ),
    },
    {
      label: "Project Description",
      render: (
        <AppFormField
          name="projectDescription"
          
          width="100%"
        />
      ),
    },
    {
      label: "Project Link",
      render: (
        <AppFormField
          name="projectLink"
          
          width="100%"
        />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("End of steps");
    }
  };

  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Screen>


    <View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal style={styles.modal} visible={modalVisible} onClose={() => setModalVisible(true)}>
        <AppForm
          initialValues={InitialValues}
          onSubmit={(values) => {
            console.log(values);
             // Close modal on submission
          }}
          validationSchema={validationSchema}
        >
          <Text style={styles.heading}>{steps[currentStep].label}</Text>
          {steps[currentStep].render}

          <View style={styles.buttonContainer}>
            <Button title="Next" onPress={handleNext} />
            <Button title="Skip" onPress={handleSkip} color="orange" />
          </View>

          {currentStep === steps.length - 1 && <SubmitButton title="Submit" />}
        </AppForm>
      </Modal>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "column",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Profile;
