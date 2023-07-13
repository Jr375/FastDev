import * as C from './style';
import { Headbar } from '../../components/Headbar';
import Loader from '../../assets/loader.png'

export const Loading = () => {
  return (
    <C.Container >
      <Headbar/>
      <C.Content
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <C.Loader>
          <C.Spinner/>
          <C.Image src={Loader} />
          <C.Text>FastDev o seu local favorito para programar...</C.Text>
        </C.Loader>
      </C.Content>
    </C.Container>
  )
}