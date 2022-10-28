var anhs = document.querySelectorAll('.cacAnh img'),
    nenDen = document.querySelector('.nenden'),  
    nutDong = document.querySelector('.dong'), 
    thongtinanh = document.querySelector('.thongtinanh');  
    
// Khi click nutDong
nutDong.addEventListener('click', function()
{
        nenDen.classList.remove("hienlen");
        thongtinanh.classList.remove('hienlen');       
})
// Khi click nen den
nenDen.addEventListener("click", function ()
{
        nenDen.classList.remove("hienlen");
        thongtinanh.classList.remove('hienlen');
});

for (var i = 0;  i < anhs.length; i++) {
    anhs[i].addEventListener('click', function()
    {
        nenDen.classList.add('hienlen');
        thongtinanh.classList.add('hienlen');
    })
} 
