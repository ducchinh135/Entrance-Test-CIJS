const inputLink = document.querySelector('#linkShorten');
const domain = document.querySelector('input[name="options"]:checked');
const btnShorten = document.querySelector('#btn-shorten');


btnShorten.onclick = async () => {
    btnShorten.classList.toggle('active');

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`);
    let result = await response.json();
    if (result.ok) {
        Swal.fire({
            title: 'Rút gọn link thành công!',
            html: `<a href="https://${domain.value}/${result.result.code}" target="_blank" class="result-link">${domain.value}/${result.result.code}</a>`,
            icon: 'success',
            confirmButtonText: 'Đóng',
        });

        inputLink.value = '';
        btnShorten.classList.remove('active');
    } else {
        Swal.fire({
            title: 'Đã có lỗi xảy ra!',
            icon: 'error',
            confirmButtonText: 'Đóng',
        });
        inputLink.value = '';
        btnShorten.classList.remove('active');
    }
};