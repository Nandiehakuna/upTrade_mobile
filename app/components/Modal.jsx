import {
        Modal as NativeModal,
        // ModalProps,
        StyleSheet,
        TouchableWithoutFeedback,
        View,
      } from "react-native";
import Colors from "../config/Colors";      
//       import Colors from "../config/colors";
      
//       export interface AppModalProps extends ModalProps {
//         onClose: () => void;
//       }
      
      export default ({ children, onClose,style, ...rest }) => {
        return (
          <NativeModal animationType="slide" transparent {...rest}>
            <TouchableWithoutFeedback onPress={onClose}>
              <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                  {/* Prevent click-through */}
                  <View style={[styles.modalContent, style]}>{children}</View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </NativeModal>
        );
      };
      
      const styles = StyleSheet.create({
        overlay: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalContent: {
          backgroundColor: Colors.white,
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          borderTopColor: Colors.lightGray,
          borderTopWidth: 1,
          padding: 16,
        },
      });
      