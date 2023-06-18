import { useState } from "react";
import { Button } from "react-native";


export default function Settings() {
    const [lang, setLang] = useState("русский")
    function change() {
        if (lang === "русский") {
            setLang('english')
        } else {
            setLang("русский")
        }
    }

    return (
        <Button title={lang} onPress={change} />
    )

}