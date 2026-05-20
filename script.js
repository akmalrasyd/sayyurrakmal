const semuatombol = document.querySelectorAll (".btn-tambah");



semuatombol.forEach(function(tombol) {
    tombol.addEventListener("click", function(){
         tombol.textContent = "✅ ditambahkan";
        setTimeout(function () {
            tombol.textContent = "+ tambah";
        }, 1500 );
    });
});