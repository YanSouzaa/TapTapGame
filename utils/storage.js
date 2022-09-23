import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveScore(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export async function getScore(key) {
    const value = JSON.parse(await AsyncStorage.getItem(key))

    return value ?? 0
}