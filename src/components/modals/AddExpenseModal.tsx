import { SafeAreaView, StatusBar, Text } from "react-native";
import { Button, Icon, Modal, ThemeProvider, Input, Div } from "react-native-magnus";

interface AddExpenseModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddExpenseModal = ({ isVisible, onClose }: AddExpenseModalProps) => {

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Modal isVisible={isVisible}>
          <Button
            bg="gray400"
            h={35}
            w={35}
            position="absolute"
            top={0}
            right={15}
            rounded="circle"
            onPress={() => {
              onClose();
            }}
          >
            <Icon color="black900" name="close" />
          </Button>

          <Div mt={40} px={15}>
            <Text>Food Name</Text>
            <Input
              placeholder="Example: Malai Chaap"
              py={10}
              borderWidth={1}
              borderColor="gray400"
              rounded="lg"
            />
          </Div>

          <Div mt={20} px={15}>
            <Text>Amount</Text>
            <Input
              placeholder="Example: 420"
              py={10}
              borderWidth={1}
              borderColor="gray400"
              rounded="lg"
              keyboardType="numeric"
            />
          </Div>

          <Div mt={20} px={15}>
            <Text>Place Name</Text>
            <Input
              placeholder="Example: Ganpati Chaap"
              py={10}
              borderWidth={1}
              borderColor="gray400"
              rounded="lg"
            />
          </Div>

          <Div px={15} alignItems="center" style={{ width: "100%" }}>
            <Button mt={20} w="30%">Submit</Button>
          </Div>

        </Modal>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default AddExpenseModal;