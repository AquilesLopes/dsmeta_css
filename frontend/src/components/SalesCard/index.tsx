import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificatonButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        console.log(BASE_URL + "/api/v1/sales?minDate=" + dmin + "&maxDate=" + dmax);

        axios.get(`${BASE_URL}/api/v1/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                console.log(response.data);
                setSales(response.data.content);
            })
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992" scope="col">ID</th>
                            <th className="show-576" scope="col">Data</th>
                            <th scope="col">Vendedor</th>
                            <th className="show-992" scope="col">Visitas</th>
                            <th className="show-992" scope="col">Vendas</th>
                            <th scope="col">Total</th>
                            <th scope="col">Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show-992">{sale.id}</td>
                                    <td className="show-576">{sale.date}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show-992">{sale.visited}</td>
                                    <td className="show-992">{sale.deals}</td>
                                    <td>{sale.amount}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton saleId={sale.id} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;