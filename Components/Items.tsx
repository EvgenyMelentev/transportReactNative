import React, { useState, useCallback, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button, Pressable, FlatList } from 'react-native';
import Context from "../Features/Context";;

export type ItemProps = { title: string, driverName: string, category: string, phoneNumber: number, coord1: number, coord2: number, navigation: any };

export default function Item({ title, driverName, category, phoneNumber, coord1, coord2, navigation }: ItemProps) {
    const driver = useContext(Context);
    function details() {
        navigation.navigate('Details');
        driver.dispatch({
            type: "chooseDriver",
            payload: [title, driverName, category, phoneNumber, coord1, coord2,]
        })
    }
    useEffect(() => console.log(driver, 'Drivers'), [])

    return (
        <Pressable onPress={() => details()} style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{driverName}</Text>
            <Text style={styles.title}>{category}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({


    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});