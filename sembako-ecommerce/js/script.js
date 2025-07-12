document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.productName;
            const initialQuantity = parseInt(this.dataset.productQuantity || '1'); // Ambil jumlah awal

            let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

            // Cek apakah produk sudah ada di savedItems
            const existingItem = savedItems.find(item => item.name === productName);

            if (existingItem) {
                // Jika sudah ada, tambahkan jumlahnya
                existingItem.quantity += initialQuantity; 
            } else {
                // Jika belum ada, tambahkan sebagai item baru
                savedItems.push({
                    name: productName,
                    quantity: initialQuantity 
                });
            }
            
            localStorage.setItem('savedItems', JSON.stringify(savedItems));
            
            alert(`${productName} (Jumlah: ${initialQuantity}) telah ditambahkan ke daftar pesanan!`);
            
            // Langsung arahkan ke halaman pemesanan
            window.location.href = 'pemesanan.html'; 
        });
    });
});