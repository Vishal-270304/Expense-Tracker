import { SafeAreaView, StatusBar, Text } from "react-native";
import { Button, Icon, Modal, ThemeProvider, Input, Radio, Div } from "react-native-magnus";
import { useState } from "react";

interface AddSplitDataModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddSplitDataModal = ({ isVisible, onClose }: AddSplitDataModalProps) => {
  const [status, setStatus] = useState("Unpaid");
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
            <Text>Who owes?</Text>
            <Input
              placeholder="Example: John Doe"
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
            <Text>To Whom?</Text>
            <Input
              placeholder="Example: Jane Doe"
              py={10}
              borderWidth={1}
              borderColor="gray400"
              rounded="lg"
            />
          </Div>
{/* 
          <Radio.Group
            mt={20}
            px={15}
            row
            onChange={(value) => setStatus(value)}
            value={status}
          >
            <Div style={{ marginRight: 15 }}>
              <Text>Status:</Text>
            </Div>
            <Radio value="Paid" onChange={() => {setStatus("Paid"); console.log(status)}}>
              <Text>Paid</Text>
            </Radio>
            <Radio value="Unpaid" ml={20} onChange={() => {setStatus("Unpaid"); console.log(status)}}>
              <Text>Unpaid</Text>
            </Radio>
          </Radio.Group> */}

        <Div px={15} alignItems="center" justifyContent="center" style={{ width: "100%" }}>
            <Button mt={20} w="30%">Submit</Button>
        </Div>

        </Modal>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default AddSplitDataModal;