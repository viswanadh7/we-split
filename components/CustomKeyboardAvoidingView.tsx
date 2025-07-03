import React, { ReactNode } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';

const CustomKeyboardAvoidingView = ({ children }: { children: ReactNode }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                // style={{ flex: 1 }}
                // keyboardVerticalOffset={40}
            >
                <ScrollView
                    contentContainerStyle={{ padding:1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default CustomKeyboardAvoidingView;
