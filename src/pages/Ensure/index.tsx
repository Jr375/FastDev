import { useEffect, useState, useRef } from "react";
import { Loading } from "../Loading";
import * as C from './style';
import { Headbar } from '../../components/Headbar';
import { invoke } from '@tauri-apps/api/tauri';
import { emit, listen } from '@tauri-apps/api/event'
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

export const Ensure = () => {
    const logsContainerRef = useRef<HTMLInputElement | null>(null);
    const [loading,setLoading] = useState(true);
    const [log,setLogs] = useState([])
    let inputref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setTimeout(async () => {
            sendNotification({ title: 'FastDev', body: 'Aplicativo Carregado com sucesso!',icon: 'thunderbird'});
            setLoading(false)

            listen("info", (arg) => {
                setLogs(prevLogs => [...prevLogs, arg.payload]);
                logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
            })
        },2000)
    }, [])

    if(loading) return <Loading/>;

    const handlerclick = () => {
        if (!inputref.current || !inputref.current.value || inputref.current.value.length < 1) {
            return sendNotification({ title: 'FastDev', body: 'Servidor Não Encontrado'});
        }
        invoke("front_ready", {link: inputref.current.value})
    }

    return (
        <C.Container>
            <Headbar/>
            <C.Content
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <C.Title>EnsureMta</C.Title>
                <C.Description>
                    Ensuremta's main function is to restart systems throughout their development, any changes made to the system will be saved and automatically restarted in the script.
                    To activate ensure select the mod you want where ensure works, all mods that have checked will have auto restart active.
                </C.Description>
                <C.CmdContainer>
                    <C.Cmd>
                        <C.LogsContainer ref={logsContainerRef}>
                        {log.map((value, index) => {
                            return <C.Logs key={index}>{value}</C.Logs>;
                        })}
                        </C.LogsContainer>
                        <C.InputContainer>
                            <C.Input placeholder="Enter a command"/>
                        </C.InputContainer>
                    </C.Cmd>
                    <C.RightContainer>
                        <C.MtaServerContainer>
                            <C.MtaServerInput placeholder="Select MTA SERVER folder" ref={inputref}/>
                            <C.Button onClick={handlerclick}>Connect</C.Button>
                        </C.MtaServerContainer>
                        <C.Mods
                          initial={{ opacity: 0}}
                          animate={{ opacity: 1}}
                          transition={{
                            duration: 1.5
                          }}
                        >
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_custom</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_custom</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_custom</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_police</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_guns</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_scoreboard</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_handcuff</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_interface</C.ModName>
                            </C.Mod>
                            <C.Mod>
                                <C.CheckBox type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
                                <C.ModName>norte_login</C.ModName>
                            </C.Mod>
                        </C.Mods>      
                    </C.RightContainer>
                </C.CmdContainer>
            </C.Content>
        </C.Container>            
    )
}