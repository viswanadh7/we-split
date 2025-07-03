import CustomKeyboardAvoidingView from '@/components/CustomKeyboardAvoidingView';
import CustomText from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import CustomView from '@/components/CustomView';
import { useGlobalState } from '@/hooks/global-state';
import { signUpSchema } from '@/validations/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
    const { theme } = useGlobalState();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpSchema),
    });

    const handleSignUp = async (signUpDetails: {
        username: string;
        name: string;
        password: string;
    }) => {
        console.log(signUpDetails);
    };
    return (
        <CustomView>
            <CustomText style={{ fontSize: 30 }}>Sign Up</CustomText>
            <CustomText style={{ fontSize: 16, fontStyle: 'italic' }}>
                Create your account. Simplify your spending.
            </CustomText>
            <CustomKeyboardAvoidingView>
                <View style={{ marginTop: 30 }}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <CustomTextInput
                                label="Username"
                                placeholder="Create an unique username"
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.username?.message}
                            />
                        )}
                    />
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <CustomTextInput
                                label="Name"
                                placeholder="Enter your name"
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <CustomTextInput
                                label="Password"
                                placeholder="Enter your password"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <CustomTextInput
                                label="Confirm Password"
                                placeholder="Please confirm your password"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.confirmPassword?.message}
                            />
                        )}
                    />
                    <TouchableOpacity
                        onPress={handleSubmit(handleSignUp)}
                        style={[
                            styles.button,
                            { borderColor: theme.colors.border },
                        ]}
                    >
                        <CustomText style={{ fontSize: 18 }}>
                            Sign Up
                        </CustomText>
                    </TouchableOpacity>

                    <Text
                        style={{
                            color: theme.colors.text,
                            textAlign: 'center',
                            marginTop: 20,
                        }}
                    >
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            style={{
                                color: theme.colors.primary,
                                textDecorationLine: 'underline',
                            }}
                        >
                            Sign In
                        </Link>
                    </Text>
                </View>
            </CustomKeyboardAvoidingView>
        </CustomView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 'auto',
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
