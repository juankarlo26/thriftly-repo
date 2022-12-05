import React from "react";
import { TouchableOpacity } from "react-native";

import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

import Social from "../components/forms/form_elements/Social";
import LoginForm from "../components/forms/LoginForm";
import Layout from "../components/Layout";
import { Image } from "react-native";
interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <Layout no_padding>
            <Box
                padding="l"
                bg="primary"
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
                elevation={10}
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box >
                    <Image
                        source={require("../../assets/logo3.png")}
                        style={{ width: 130, height: 130 }}
                    />
                </Box>
                <Box >
                    <Text variant="headlineMont4" color="black" textAlign="center">
                        Sign In
                    </Text>
                    <Text variant="descriptionMont" mb="s" color="black" textAlign="center">
                    Welcome to Thriftly! Login now
                    </Text>
                </Box>

            </Box>
            <Box paddingHorizontal="m" paddingTop="xl">
                
                <LoginForm
                    onSubmit={(data) =>
                        navigation.navigate("Main", { screen: "Home" })
                    }
                />
                <Box
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text variant="descriptionMont">Don't Have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text marginLeft='m' variant="bodyMont2" color='primary'>Sign up</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Layout>
    );
};

export default LoginScreen;
