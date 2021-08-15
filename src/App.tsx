import "react-native-gesture-handler"

import { ApolloProvider } from "@apollo/client"
import { registerRootComponent } from "expo"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { apolloClient } from "../apollo"
import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"

const App = () => {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <ApolloProvider client={apolloClient}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </ApolloProvider>
            </SafeAreaProvider>
        )
    }
}

export default registerRootComponent(App)
