const inputLink = document.querySelector('#link-must-shorten');
const shortenDomain = document.querySelector('input[name="options"]:checked');
const btn = document.querySelector('#do-shorten');


btn.onclick = async () => {
    btn.classList.toggle('active');

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`);
    let result = await response.json();
    if (result.ok) {
        Swal.fire({
            title: 'Rút gọn link thành công!',
            html: `<a href="https://${shortenDomain.value}/${result.result.code}" target="_blank" class="result-link">${shortenDomain.value}/${result.result.code}</a>`,
            icon: 'success',
            confirmButtonText: 'Đóng',
        });

        inputLink.value = '';
        btn.classList.remove('active');
    } else {
        Swal.fire({
            title: 'Đã có lỗi xảy ra!',
            icon: 'error',
            confirmButtonText: 'Đóng',
        });
        inputLink.value = '';
        btn.classList.remove('active');
    }
};