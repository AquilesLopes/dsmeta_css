package br.com.gluom.dsmeta.services;

import br.com.gluom.dsmeta.entities.Sale;
import br.com.gluom.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Autowired
    private SaleRepository saleRepository;

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    public void sendSms(Long id) {

        Sale sale = saleRepository.findById(id).orElse(null);

        if(sale == null) {
            String msg = "Sale not found";
            System.out.println(msg);
        }else{
            String msg = "Vendedor: " + sale.getSellerName() + " - Valor: " + sale.getAmount();

            Twilio.init(twilioSid, twilioKey);

            PhoneNumber to = new PhoneNumber(twilioPhoneTo);
            PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

            Message message = Message.creator(to, from, msg).create();

            System.out.println(message.getSid());
        }


    }
}
