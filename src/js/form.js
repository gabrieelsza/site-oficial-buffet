emailjs.init("dRCb3qOCh8mryOoAb")

document.getElementById('contact-form').addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        lastName: document.getElementById("lastName").value,
        mailBox: document.getElementById("mailbox").value,
        phone: document.getElementById("phone").value,
        serviceForm: document.getElementById("serviceForm").value,
        descService: document.getElementById("descService").value,
    }

    const serviceID = "service_b2b4ova"
    const templateID = "template_gjkf53r"
    const submitButton = document.getElementById("subtmit_button");
    submitButton.textContent = "Enviando..."
    submitButton.disabled = true; 
    
    emailjs.send(serviceID, templateID, formData)
    .then(() => {
        Toastify({
            text: "Email enviado com sucesso!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #28A745, #96c93d)",
                borderRadius: "1rem",
                color: "F4F4F4",
                fontFamily: "var(--font-ui)",
                fontSize: ".8rem"
            }
            
        }).showToast();
        
        document.getElementById("contact-form").reset();
    })
    
    .catch((error) => {
        Toastify({
            text: "Email não enviado, tente novamente!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #e22f2fec, rgb(241, 0, 0))",
                borderRadius: "1rem",
                color: "F4F4F4",
                textTransform: "uppercase",
                fontFamily: "var(--font-ui)",
                fontSize: ".8rem"
            }
            
        }).showToast();
    })
    
    .finally(() => {
            submitButton.textContent = "Enviar"
            submitButton.disabled = false; 
        })

    console.log(serviceForm.value)
    console.log(descService.value)
})

var swiperDesk = new Swiper(".mySwiperDesk", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
        }
    },
}
);

