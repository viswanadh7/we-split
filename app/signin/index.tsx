import CustomText from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import CustomView from '@/components/CustomView';
import { useGlobalState } from '@/hooks/global-state';
import { signInSchema } from '@/validations/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignIn = () => {
    const { theme } = useGlobalState();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signInSchema),
    });

    const handleSignIn = async (loginDetails: {
        username: string;
        password: string;
    }) => {
        console.log(loginDetails);
    };
    return (
        <CustomView>
            <CustomText style={{ fontSize: 30 }}>Sign In</CustomText>
            <CustomText style={{ fontSize: 16, fontStyle: 'italic' }}>
                Welcome back! Let’s get things sorted.
            </CustomText>
            <View style={{ marginTop: 30 }}>
                <Controller
                    name="username"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <CustomTextInput
                            label="Username"
                            placeholder="Enter your unique username"
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors.username?.message}
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
                <TouchableOpacity
                    onPress={handleSubmit(handleSignIn)}
                    style={[
                        styles.button,
                        { borderColor: theme.colors.border },
                    ]}
                >
                    <CustomText style={{ fontSize: 18 }}>Sign in</CustomText>
                </TouchableOpacity>

                <Text
                    style={{
                        color: theme.colors.text,
                        textAlign: 'center',
                        marginTop: 20,
                    }}
                >
                    New to WeSplit? Create an account{' '}
                    <Link
                        href="/signup"
                        style={{
                            color: theme.colors.primary,
                            textDecorationLine: 'underline',
                        }}
                    >
                        SignUp
                    </Link>
                </Text>
            </View>
        </CustomView>
    );
};

export default SignIn;

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
