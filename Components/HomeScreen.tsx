import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Button, Pressable, FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from "react-native-dropdown-picker";
import data from '../DataJson/userjson.json'
import Item from "./Items";

export default function HomeScreen(props) {
    const [map, setMap] = useState(true);
    const [open, setOpen] = useState(false);
    const [typetsValue, setTypetsValue] = useState(null);
    const [typets, setTypets] = useState([
        { label: "Грузовой", value: "freight" },
        { label: "Пассажирский", value: "passenger" },
        { label: "Спецтранспорт", value: "special" },
    ]);
    const [itemsList, setItemsList] = useState([]);
    const { handleSubmit, control } = useForm();
    useEffect(() => {
        setItemsList(data.filter((item) => item["category"] == typetsValue))
        console.log(itemsList)
    }, [typetsValue])

    return (
        <View style={{ flex: 1 }}>
            <Controller
                name="gender"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                    <View style={{ zIndex: 10 }}>
                        <DropDownPicker
                            style={styles.dropdown}
                            open={open}
                            value={typetsValue}
                            items={typets}
                            setOpen={setOpen}
                            setValue={setTypetsValue}
                            setItems={setTypets}
                            placeholder="Тип тс"
                            placeholderStyle={styles.placeholderStyles}
                            onChangeValue={onChange}
                            zIndex={1000}
                            zIndexInverse={3000}
                        />
                    </View>
                )}
            />
            <View style={{ flex: 1, zIndex: 1, backgroundColor: 'gray' }}>
                <FlatList
                    data={itemsList}
                    renderItem={({ item }) => <Item navigation={props.navigation} coord1={item["coordinates1"]} coord2={item["coordinates2"]} phoneNumber={item["phoneNumber"]} title={item["tsname"]} driverName={item["driverName"]} category={item["category"]} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.bottomNav}>

                <Pressable onPress={() => props.navigation.navigate('Settings')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                        },
                        styles.bottomNavItem,
                    ]}>
                    <Text>Настройки</Text>
                </Pressable>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,

    },
    bottomNav: {
        width: '100%',
        height: 100,
        backgroundColor: "green",
        flexDirection: 'row',
    },
    bottomNavItem: {
        flex: 1,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
    },
    placeholderStyles: {
        color: "grey",
    },
});