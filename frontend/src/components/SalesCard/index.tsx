import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificatonButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

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
                        <tr>
                            <td className="show-992">1</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Amanda</td>
                            <td className="show-992">125</td>
                            <td className="show-992">54</td>
                            <td>R$ 1.500,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">2</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-992">105</td>
                            <td className="show-992">35</td>
                            <td>R$ 1.000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-992">3</td>
                            <td className="show-576">09/07/2022</td>
                            <td>Marcos</td>
                            <td className="show-992">105</td>
                            <td className="show-992">35</td>
                            <td>R$ 1.000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;