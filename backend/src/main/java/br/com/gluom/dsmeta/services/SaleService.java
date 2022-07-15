package br.com.gluom.dsmeta.services;

import br.com.gluom.dsmeta.entities.Sale;
import br.com.gluom.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public Page<Sale> findAll(String minDate, String maxDate, Pageable pageable) {

        LocalDate today = LocalDate.now();

        LocalDate min = minDate.length() > 0 ? LocalDate.parse(minDate) : today.minusDays(90);
        LocalDate max = maxDate.length() > 0 ? LocalDate.parse(maxDate) : today;

        return saleRepository.findSales(min, max, pageable);
    }

    public Sale findById(Long id) {
        return saleRepository.findById(id).orElse(null);
    }

    public Sale save(Sale sale) {
        return saleRepository.save(sale);
    }

    public void delete(Long id) {
        saleRepository.deleteById(id);
    }

}
