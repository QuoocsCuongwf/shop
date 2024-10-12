
    // If the user has previously selected a district, restore it
    if (address_2 = localStorage.getItem('address_2_saved')) {
        $('select[name="calc_shipping_district"] option').each(function() {
            if ($(this).text() == address_2) {
                $(this).attr('selected', '');
            }
        });
        $('input.billing_address_2').attr('value', address_2);
    }

    // Handle district selection
    if (district = localStorage.getItem('district')) {
        $('select[name="calc_shipping_district"]').html(district);
        $('select[name="calc_shipping_district"]').on('change', function() {
            var target = $(this).children('option:selected');
            target.attr('selected', '');
            $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected');
            address_2 = target.text();
            $('input.billing_address_2').attr('value', address_2);
            district = $('select[name="calc_shipping_district"]').html();
            localStorage.setItem('district', district);
            localStorage.setItem('address_2_saved', address_2);
        });
    }

    // Populate the province select options
    $('select[name="calc_shipping_provinces"]').each(function() {
        var $this = $(this);
        var stc = '';
        // Assuming you have an array 'c' with province names
        c.forEach(function(i, e) {
            e += 1;
            stc += '<option value=' + e + '>' + i + '</option>';
        });
        $this.html('<option value="">Tỉnh / Thành phố</option>' + stc);

        // If the user has previously selected a province, restore it
        if (address_1 = localStorage.getItem('address_1_saved')) {
            // Handle restoring the selected province here
        }
    });
