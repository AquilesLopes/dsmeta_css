
import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification_icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    const idToast = toast.loading("Enviando...");
    
    axios.get(`${BASE_URL}/api/v1/sales/${saleId}/notification`)
         .then(response => {
            toast.dismiss();
            console.log(response.data);
            toast.update(idToast, {render: "SMS enviado com sucesso!", type: "success", isLoading: false});
         }).catch(err => {
                toast.update(idToast, {render: "Erro ao enviar SMS!", type: "error", isLoading: false });
         });
}

function NotificationButton({saleId}: Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)} >
            <img src={icon} alt="notification" />
        </div>
    )
 }
 
 export default NotificationButton;