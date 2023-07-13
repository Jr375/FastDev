import * as C from './style';
import { CiMinimize1, CiMaximize1 } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { appWindow } from '@tauri-apps/api/window';

import Logo from '../../assets/logo.png';

export const Headbar = () => {
  return (
    <C.Container data-tauri-drag-region>
      <C.Left>
        <C.Logo src={Logo} alt="Logo" draggable={false}/>
      </C.Left>
      <C.Right>
        <C.Button type='minimize' onClick={() => appWindow.minimize()}>
          <CiMinimize1 color={"white"}/>
        </C.Button>
        <C.Button type='maximize'>
          <CiMaximize1 color={"white"}/>
        </C.Button>
        <C.Button type='close' onClick={() => appWindow.close()}>
          <IoIosClose color={"white"} size={25}/>
        </C.Button>
      </C.Right>
    </C.Container>
  )
};