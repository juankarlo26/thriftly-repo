import 'react-native-reanimated'
import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { useAssets } from 'expo-asset'
import AppLoading from "expo-app-loading";

import Navigation from "./src/navigation";
import store from "./src/redux/store";
import { Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function App() {

    const [assets, error] = useAssets([
        require('./assets/hero-home.jpg'),
        require('./assets/kids.jpg'),
        require('./assets/jewelry.jpg'),
        require('./assets/women.jpg'),
        require('./assets/men.jpg'),

    ])

    const [fontLoaded] = useFonts({
        ...Entypo.font,
        ...MaterialCommunityIcons.font,
        ...Ionicons.font,
        ...MaterialIcons.font,
        "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
        "Ubuntu-BoldItalic": require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
        "Ubuntu-Italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
        "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
        "Ubuntu-LightItalic": require("./assets/fonts/Ubuntu-LightItalic.ttf"),
        "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
        "Ubuntu-MediumItalic": require("./assets/fonts/Ubuntu-MediumItalic.ttf"),
        "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
        
    });

    if (!fontLoaded || !assets) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
