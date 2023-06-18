import React, { useContext, useEffect } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Linking, View, Text, Button, Pressable, FlatList, Image } from 'react-native';
import call from 'react-native-phone-call';
import Context from "../Features/Context";;

export default function DetailsScreen({ navigation }) {
    const driver = useContext(Context);
    const triggerCall = () => {
        const args = {
            number: '+' + driver.state[3],
            prompt: false,
        }
        call(args).catch(console.error)
    }

    return (
        <View style={{ flex: 1, }}>
            <MapView initialRegion={{
                latitude: 55.751244,
                longitude: 37.618423,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
            }} style={styles.map} >
                <Marker image={require('../Assets/71222.png')}
                    coordinate={{ latitude: driver.state[4], longitude: driver.state[5] }}
                    title={"first driver"}>

                    <Callout>
                        <Text>FirstDriver</Text>

                    </Callout>
                </Marker>
            </MapView>

            <Text>{driver.state[2]}</Text>
            <Text>{driver.state[1]}</Text>
            <Text>{driver.state[3]}</Text>
            <Button title="Позвонить" onPress={() => triggerCall()} />
            <Button title="Написать whatsap" onPress={() => Linking.openURL(`whatsapp://send?phone=+${driver.state[3]}&text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе`)} />
            <Button title="На главную" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({

    map: {
        flex: 1,
    },
});