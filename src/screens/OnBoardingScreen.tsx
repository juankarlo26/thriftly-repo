import React from "react";
import { Dimensions } from "react-native";

import { useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Animated, {
    Extrapolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    useDerivedValue,
    interpolate,
    interpolateColor,
} from "react-native-reanimated";
import Layout from "../components/Layout";

import {
    OnBoardingScreenNavigationProps,
    OnBoardingScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

interface OnBoardingScreenProps {
    navigation: OnBoardingScreenNavigationProps;
    route: OnBoardingScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const AnimatedBox = Animated.createAnimatedComponent(Box);

const DATA = [
    {
        id: 0,
        title: "title",
        subtitle: "subtitle",
        image: require("../../assets/logo2.png"),
    },
    {
        id: 1,
        title: "title",
        subtitle: "subtitle",
        image: require("../../assets/logo.png"),
    },
    {
        id: 2,
        title: "title",
        subtitle: "subtitle",
        image: require("../../assets/hive.png"),
    },
    {
        id: 3,
        title: "title",
        subtitle: "subtitle",
        image: require("../../assets/logo2.png"),
    },
];

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const translationX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translationX.value = event.contentOffset.x;
        },
        onBeginDrag: (e) => {},
        onEndDrag: (e) => {},
    });

    return (
        <Layout no_padding>
            <Box
                position="absolute"
                width={60}
                height={60}
                bottom={theme.spacing.m}
                right={theme.spacing.m}
                zIndex={1000}
                bg="black"
                style={{ borderRadius: 30 }}
                justifyContent="center"
                alignItems="center"
            >
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Auth", { screen: "Login" })
                    }
                >
                    <AntDesign
                        name="check"
                        size={24}
                        color={theme.colors.white}
                    />
                </TouchableOpacity>
            </Box>
            <Animated.ScrollView
                style={[{ flex: 1, backgroundColor: theme.colors.primary }]}
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                horizontal
                decelerationRate="fast"
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
            >
                {DATA.map((page, index) => {
                    const scale = useDerivedValue(() => {
                        return interpolate(
                            translationX.value,
                            [
                                width * (index - 1),
                                width * index,
                                width * (index + 1),
                            ],
                            [0.3, 1, 0.3],
                            Extrapolate.CLAMP
                        );
                    });

                    const imageTranslateX = useDerivedValue(() => {
                        return interpolate(
                            translationX.value,
                            [
                                width * (index - 1),
                                width * index,
                                width * (index + 1),
                            ],
                            [-width, 0, width],
                            Extrapolate.CLAMP
                        );
                    });
                    const imageTranslateY = useDerivedValue(() => {
                        return interpolate(
                            translationX.value,
                            [
                                width * (index - 1),
                                width * index,
                                width * (index + 1),
                            ],
                            [10, 0, 10],
                            Extrapolate.CLAMP
                        );
                    });

                    const styles = useAnimatedStyle(() => {
                        return {
                            transform: [
                                {
                                    scale: scale.value,
                                },
                                {
                                    translateX: imageTranslateX.value,
                                },
                                {
                                    translateY: imageTranslateY.value,
                                },
                            ],
                        };
                    });

                    return (
                        <AnimatedBox
                            key={page.id}
                            width={width}
                            height={height}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Animated.Image
                                style={[
                                    { width: width * 0.7, height: width * 0.8 },
                                    styles,
                                ]}
                                source={page.image}
                            />

                            <Text
                                style={{ maxWidth: width * 0.7 }}
                                textAlign="center"
                                marginVertical="l"
                                variant="headlineMont"
                                color="black"
                            >
                                Introducing 
                            </Text>
                            <Text
                                style={{ maxWidth: width * 0.7 }}
                                textAlign="center"
                                variant="descriptionMont"
                                color="black"
                            >
                                We Filipino loves to bargain why not incorporate to an application.{" "}
                            </Text>
                        </AnimatedBox>
                    );
                })}
            </Animated.ScrollView>
            <Box
                position="absolute"
                bottom={0}
                width={width}
                padding="l"
                flexDirection="row"
                justifyContent="center"
            >
                {DATA.map((page, i) => {
                    const widthstyle = useDerivedValue(() => {
                        return interpolate(
                            translationX.value,
                            [width * (i - 1), width * i, width * (i + 1)],
                            [10, 30, 10],
                            Extrapolate.CLAMP
                        );
                    });

                    const colorStyle = useDerivedValue(() => {
                        return interpolateColor(
                            translationX.value,
                            [width * (i - 1), width * i, width * (i + 1)],
                            [
                                theme.colors.white,
                                theme.colors.black,
                                theme.colors.white,
                            ]
                        );
                    });

                    const dotStyles = useAnimatedStyle(() => ({
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: withSpring(colorStyle.value),
                        marginHorizontal: 5,
                        width: withSpring(widthstyle.value),
                    }));

                    return (
                        <Box key={page.id}>
                            <AnimatedBox style={dotStyles} />
                        </Box>
                    );
                })}
            </Box>
        </Layout>
    );
};

export default OnBoardingScreen;
